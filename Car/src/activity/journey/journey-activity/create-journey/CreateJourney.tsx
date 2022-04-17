import React, { useContext, useEffect, useRef, useState } from "react";
import { PermissionsAndroid, Platform, ScrollView, Text, TouchableOpacity, View } from "react-native";
import SearchJourneyStyle from "../search-journey/SearchJourneyStyle";
import MapView, { LatLng, Marker, PROVIDER_GOOGLE } from "react-native-maps";
import { mapStyle } from "../search-journey-map/SearchJourneyMapStyle";
import {
    initialCamera,
    initialCoordinate,
    initialWayPoint,
    RECENT_ADDRESSES_COUNT_LIMIT
} from "../../../../constants/AddressConstants";
import {
    INITIAL_ROUTE_DISTANCE, INITIAL_STOPS_COUNT,
    LEFT_PADDING_FOR_FROM_PLACEHOLDER,
    LEFT_PADDING_FOR_TO_PLACEHOLDER,
    LEFT_PADDING_FOR_VIA_PLACEHOLDER,
    NUMBER_OF_STOPS_LIMIT
} from "../../../../constants/JourneyConstants";
import { DELETE_COUNT, FIRST_ELEMENT_INDEX, SECOND_ELEMENT_INDEX } from "../../../../constants/GeneralConstants";
import MapViewDirections from "react-native-maps-directions";
import Geolocation from "@react-native-community/geolocation";
import LocationService from "../../../../../api-service/location-service/LocationService";
import AuthContext from "../../../../components/auth/AuthContext";
import Location from "../../../../../models/location/Location";
import * as navigation from "../../../../components/navigation/Navigation";
import WayPoint from "../../../../types/WayPoint";
import { CreateJourneyStyle } from "./CreateJourneyStyle";
import CreateJourneyProps from "./CreateJourneyProps";
import JourneyService from "../../../../../api-service/journey-service/JourneyService";
import Address from "../../../../../models/Address";
import Indicator from "../../../../components/activity-indicator/Indicator";
import ConfirmModal from "../../../../components/confirm-modal/ConfirmModal";
import {
    createStopArrayFromWayPoint,
    getJourneyStops,
    getStopByType,
    mapStopToWayPoint,
    minutesToTimeString
} from "../../../../utils/JourneyHelperFunctions";
import StopType from "../../../../../models/stop/StopType";
import JourneyDto from "../../../../../models/journey/JourneyDto";
import JourneyDetailsPageProps from "../journey-details-page/JourneyDetailsPageProps";
import { useTheme } from "../../../../components/theme/ThemeProvider";
import { darkMapStyle } from "../../../../constants/DarkMapStyleConstant";
import AddressInputButton from "../../../../components/address-input-button/AddressInputButton";
import WeekDay from "../../../../components/schedule-bottom-popup/WeekDay";
import Stop from "../../../../../models/stop/Stop";
import appInsights from "../../../../components/telemetry/AppInsights";
import CredentialsManager from "../../../../../credentials/credentials.json";
import { darkColors, lightColors } from "../../../../components/theme/ThemesColors";
import AddressInputPageStyle from "../address-input-page/AddressInputPageStyle";

interface CreateJourneyComponent {
    addStopPressHandler: () => void,
    IsFromToChanged: () => boolean,
    numberOfAddedStop: number,
    ({ props }: { props: CreateJourneyProps }): JSX.Element
}

interface OnRouteReadyResult {
    coordinates: LatLng[],
    distance: number,
    duration: number
}

const INVALID_ROUTE = "Cant build route. Please chose another way points";
const ROUTE_UPDATE_ERROR = "Route update is failed";

const CreateJourney: CreateJourneyComponent = ({ props }: { props: CreateJourneyProps }) => {
    const { colors, isThemeDark } = useTheme();
    const params = props?.route?.params;
    const journey = params?.journey;

    if (props)
        props.weekDay.current = props.weekDay.current || (journey?.schedule?.days ?? WeekDay.None);
    const weekDay = props?.weekDay;

    const { user } = useContext(AuthContext);
    const [userCoordinates, setUserCoordinates] = useState<LatLng>(initialCoordinate);

    const [savedLocations, setSavedLocations] = useState<Array<Location>>([]);
    const [recentAddresses, setRecentAddresses] = useState<Array<Address>>([]);

    const [from, setFrom] = useState<WayPoint>(
        journey ? mapStopToWayPoint(getStopByType(journey, StopType.Start)) : initialWayPoint);
    const [to, setTo] = useState<WayPoint>(
        journey ? mapStopToWayPoint(getStopByType(journey, StopType.Finish)) : initialWayPoint);
    const [stops, setStops] = useState<WayPoint[]>(
        journey ? getJourneyStops(journey)!.filter(stop => stop!.userId === user!.id).map(mapStopToWayPoint) : []);
    const [duration, setDuration] = useState(journey ? journey.duration : "");
    const [routeDistance, setRouteDistance] = useState<number>(journey?.routeDistance ?? INITIAL_ROUTE_DISTANCE);
    const [routePoints, setRoutePoints] = useState<LatLng[]>(journey?.journeyPoints ?? []);
    const [routeIsConfirmed, setRouteIsConfirmed] = useState(Boolean(journey));

    const [deleteModalIsVisible, setDeleteModalIsVisible] = useState(false);
    const [successfullyUpdateModalIsVisible, setSuccessfullyUpdateModalIsVisible] = useState(false);
    const [applyChangesModalIsVisible, setApplyChangesModalIsVisible] = useState(false);
    const [stopIndexForDeleting, setStopIndexForDeleting] = useState(NaN);

    const [errorModalIsVisible, setErrorModalIsVisible] = useState(false);
    const [errorModalText, setErrorModalText] = useState(INVALID_ROUTE);

    const mapRef = useRef<MapView | null>(null);
    const scrollViewRef = useRef<ScrollView | null>();

    const [savedLocationIsLoading, setSavedLocationIsLoading] = useState(true);
    const [recentAddressesIsLoading, setRecentAddressesIsLoading] = useState(true);
    const [userLocationIsLoading, setUserLocationIsLoading] = useState(true);
    const [routeIsUpdating, setRouteIsUpdating] = useState(false);

    const [isFromToChanged,setIsFromToChanged] = useState(false);

    useEffect(() => {
        if(from.text !== "" || to.text !== "")
            setIsFromToChanged(true);
    },[from,to]);

    useEffect(() => {
        if (params?.wayPoint) {
            animateCamera(params.wayPoint.coordinates);

            if (params.wayPointId === "From") {
                setFrom(params.wayPoint);
            } else if (params.wayPointId === "To") {
                setTo(params.wayPoint);
            } else {
                let updatedStops = new Array(...stops);

                updatedStops.splice(Number(params.wayPointId), DELETE_COUNT, params.wayPoint);
                setStops(updatedStops);
            }
        }
    }, [params]);

    useEffect(() => {
        CreateJourney.numberOfAddedStop = journey ? getJourneyStops(journey)!.length : INITIAL_STOPS_COUNT;

        if (journey) {
            fitCameraToCoordinates(journey.journeyPoints, false);
            props.navigation?.setOptions({ headerTitle: "Edit the Ride" });
        }

        LocationService
            .getAll()
            .then((res) => {
                setSavedLocations(res.data);
                setSavedLocationIsLoading(false);
            });

        JourneyService
            .getRecentJourneyStops()
            .then((res) => {
                setRecentAddresses(([] as Address[]).concat(
                    ...res.data.map(recentStops => recentStops.map(stop => stop!.address))));
                setRecentAddressesIsLoading(false);
            });

        return props.navigation?.addListener("blur", () => {
            journey && props.closeMoreOptionPopup();
        });
    }, []);

    const filterRecentAddresses = () => {
        const withoutAddressBook = recentAddresses.filter(address =>
            savedLocations.every(location =>
                location?.address?.longitude !== address?.longitude &&
                location?.address?.latitude !== address?.latitude));

        const result: Address[] = [];

        withoutAddressBook.forEach(address => {
            if (result.every(value => value?.latitude !== address?.latitude ||
                value?.longitude !== address?.longitude))
                result.push(address);
        });

        return result.length > RECENT_ADDRESSES_COUNT_LIMIT ?
            result.slice(FIRST_ELEMENT_INDEX, RECENT_ADDRESSES_COUNT_LIMIT) :
            result;

    };

    useEffect(() => {
        if (!recentAddressesIsLoading && !savedLocationIsLoading) {
            setRecentAddresses(filterRecentAddresses());
        }
    }, [recentAddressesIsLoading, savedLocationIsLoading]);

    const animateCamera = (coordinates: LatLng) => {
        mapRef.current?.animateCamera({
            ...initialCamera,
            center: coordinates
        }, { duration: 1000 });
    };

    const androidPermission = async () => {
        try {
            const granted = await PermissionsAndroid
                .request(PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION);

            if (granted === PermissionsAndroid.RESULTS.GRANTED) {
                findUserLocation();
            } else {
                setUserLocationIsLoading(false);
            }
        } catch (e) {
            appInsights.trackException({ exception: e as Error });
        }
    };

    const findUserLocation = () => {
        Geolocation.getCurrentPosition(
            (position) => {
                setUserLocationIsLoading(false);
                setUserCoordinates(position.coords);
                !journey && mapRef.current?.setCamera({ ...initialCamera, center: position.coords });
            },
            (error) => {
                setUserLocationIsLoading(false);
                appInsights.trackException({ exception: { name: "GeolocationError", message: error.message } });
            },
            { enableHighAccuracy: true, timeout: 15000, maximumAge: 10000 }
        );
    };

    useEffect(() => {
        if (Platform.OS === "android") {
            androidPermission();
        } else {
            Geolocation.requestAuthorization();
            findUserLocation();
        }
    }, []);

    useEffect(() => {
        CreateJourney.numberOfAddedStop = stops.length + SECOND_ELEMENT_INDEX;
    });
    CreateJourney.IsFromToChanged = () => {
        return isFromToChanged;
    };

    CreateJourney.addStopPressHandler = () => {
        if (stops.length >= NUMBER_OF_STOPS_LIMIT) return;

        setStops(prevState => [...prevState, initialWayPoint]);
    };
    const onAddressInputButtonPressHandler = (placeholder: string,
        paddingLeft: number, wayPointId: string, wayPoint: WayPoint) => {

        mapRef.current?.getCamera().then(camera => {
            navigation.navigate("Address Input", {
                placeholder: placeholder,
                paddingLeft: paddingLeft,
                savedLocations: savedLocations,
                recentAddresses: recentAddresses,
                previousScreen: "Create Journey",
                wayPointId: wayPointId,
                wayPoint: wayPoint,
                camera: { ...camera, altitude: 200 },
                userCoordinates: userCoordinates
            });
        });
    };

    const removeStopByIndex = (stopIndex: number) => {
        let updatedStops = new Array(...stops);

        updatedStops.splice(stopIndex, DELETE_COUNT);
        setStops(updatedStops);

        CreateJourney.numberOfAddedStop = updatedStops.length;
    };

    const onDeleteIconPressHandler = (stopIndex: number) => {
        setStopIndexForDeleting(stopIndex);
        setDeleteModalIsVisible(true);
    };

    const onConfirmPressHandler = () => {
        const properties: JourneyDetailsPageProps = {
            route: {
                params: {
                    from: from,
                    to: to,
                    stops: stops.filter(stop => stop.isConfirmed),
                    routePoints: routePoints,
                    duration: duration,
                    routeDistance: routeDistance,
                    weekDay: weekDay.current,
                }
            }
        };

        navigation.navigate("Journey Details", { ...properties.route.params, headerTitle:"Publish a Ride" });
    };

    const onUpdateRoutePressHandler = async () => {
        if (!journey) return;

        setRouteIsUpdating(true);

        let arrayOfPassengerStops = journey.stops.filter(stop => stop!.userId !== user!.id);

        arrayOfPassengerStops.forEach((item) => {
            item!.id = 0; item!.address!.id = 0;
        });

        const updatedJourney: JourneyDto = {
            ...journey,
            carId: journey.car!.id,
            chatId: journey.chatId,
            organizerId: Number(journey?.organizer?.id),
            duration: duration,
            routeDistance: Math.round(routeDistance),
            journeyPoints: routePoints.map((point, index) =>
                ({ ...point, index: index, journeyId: journey?.id })),
            stops: (createStopArrayFromWayPoint(from, to, stops, Number(user?.id), journey.id) as Stop[]).
                concat(arrayOfPassengerStops),
            weekDay: weekDay?.current || null,
        };

        await JourneyService.updateRoute(updatedJourney)
            .then(() => setSuccessfullyUpdateModalIsVisible(true))
            .catch(() => {
                setErrorModalIsVisible(true);
                setErrorModalText(ROUTE_UPDATE_ERROR);
            });

        setRouteIsUpdating(false);
    };

    const noChanges = () => {
        if (!journey) return false;

        return journey.duration === duration &&
            journey.routeDistance === routeDistance &&
            journey.journeyPoints.every((value, index) => routePoints[index] === value) &&
            journey.schedule?.days === weekDay?.current;
    };

    const cantBuildRouteAlert = () => {
        setRouteIsConfirmed(false);
        setErrorModalIsVisible(true);
        setErrorModalText(INVALID_ROUTE);
    };

    const fitCameraToCoordinates = (coordinates: LatLng[], animated: boolean) => {
        mapRef.current?.fitToCoordinates(coordinates,
            { edgePadding: { top: 800, right: 20, left: 20, bottom: 400 }, animated: animated });
    };

    const onRouteReadyHandler = (result: OnRouteReadyResult) => {
        if (isLoading) return;

        setRouteDistance(Math.round(result.distance));
        setDuration(minutesToTimeString(result.duration));
        setRoutePoints(result.coordinates);
        setRouteIsConfirmed(true);
        fitCameraToCoordinates(result.coordinates, true);
    };

    const isLoading = recentAddressesIsLoading ||
        savedLocationIsLoading || userLocationIsLoading || routeIsUpdating;

    const confirmDisabled = !routeIsConfirmed || noChanges();

    return (
        <View>
            {isLoading && (
                <View style={{ height: "85%" }}>
                    <Indicator
                        size="large"
                        color={colors.hover}
                        text={routeIsUpdating ? "Route updating..." : "Loading information..."}
                    />
                </View>
            )}
            <View>
                <ScrollView
                    ref={ref => (scrollViewRef.current = ref)}
                    onContentSizeChange={() => scrollViewRef.current?.scrollToEnd({ animated: true })}
                    style={CreateJourneyStyle.scrollView}
                >

                    <AddressInputButton
                        iconName={"location"}
                        directionType={"From"}
                        text={from.text}
                        onPress={() => onAddressInputButtonPressHandler(
                            "From", LEFT_PADDING_FOR_FROM_PLACEHOLDER, "From", from)}
                        marginBottom={15}
                        marginTop={7}
                        iconColor={useTheme().isThemeDark?darkColors.neutralDark:lightColors.hover}
                    />

                    <AddressInputButton
                        iconName={"location"}
                        directionType={"To"}
                        text={to.text}
                        onPress={() => onAddressInputButtonPressHandler(
                            "To", LEFT_PADDING_FOR_TO_PLACEHOLDER, "To", to)}
                        marginBottom={15}
                        iconColor={useTheme().isThemeDark?darkColors.neutralDark:lightColors.hover}
                    />

                    {stops.map((stop, index) => (
                        <AddressInputButton
                            iconName={"close"}
                            directionType={"Via"}
                            text={stop.text}
                            onPress={() => onAddressInputButtonPressHandler(
                                "Via", LEFT_PADDING_FOR_VIA_PLACEHOLDER, index.toString(), stops[index])}
                            onIconPress={() => onDeleteIconPressHandler(index)}
                            marginBottom={15}
                            key={index}
                            iconColor={darkColors.disableBack}
                        />
                    ))}
                </ScrollView>

                <MapView
                    ref={ref => {
                        mapRef.current = ref;
                    }}
                    style={ AddressInputPageStyle.mapContainer }
                    provider={PROVIDER_GOOGLE}
                    showsUserLocation={true}
                    customMapStyle={isThemeDark ? darkMapStyle : mapStyle}
                    showsCompass={false}
                    showsMyLocationButton={false}
                >
                    {from.isConfirmed && (
                        <Marker
                            title={from.text}
                            coordinate={from.coordinates}
                            image={require("../../../../../assets/images/maps-markers/From.png")}
                        />)
                    }

                    {to.isConfirmed && (
                        <Marker
                            title={to.text}
                            coordinate={to.coordinates}
                            image={require("../../../../../assets/images/maps-markers/To.png")}
                        />)
                    }

                    {stops.filter(stop => stop.isConfirmed)
                        .map((stop, index) => (
                            <Marker
                                title={stop.text}
                                coordinate={stop.coordinates}
                                image={require("../../../../../assets/images/maps-markers/Stop.png")}
                                key={index}
                            />
                        ))
                    }

                    {from.isConfirmed && to.isConfirmed && (
                        <MapViewDirections
                            origin={from.coordinates}
                            destination={to.coordinates}
                            waypoints={stops.filter(stop => stop.isConfirmed).map(stop => stop.coordinates)}
                            apikey={CredentialsManager.mapApiKey}
                            strokeWidth={5}
                            strokeColor="#027ebd"
                            onError={cantBuildRouteAlert}
                            onReady={onRouteReadyHandler}
                        />
                    )}
                </MapView>

                <TouchableOpacity
                    style={[SearchJourneyStyle.confirmButton,
                        {
                            backgroundColor: confirmDisabled ? colors.secondaryDark : colors.hover,
                        }]}
                    onPress={journey ? () => setApplyChangesModalIsVisible(true) : onConfirmPressHandler}
                    disabled={confirmDisabled}
                >
                    <Text style={[SearchJourneyStyle.confirmButtonSaveText, { color: colors.white }]}>
                        {journey ? "Update route" : "Confirm"}
                    </Text>
                </TouchableOpacity>

            </View>

            <ConfirmModal
                visible={deleteModalIsVisible}
                title={"Stop deleting"}
                confirmText={"Yes, delete it"}
                cancelText={"No, keep it"}
                onConfirm={() => {
                    removeStopByIndex(stopIndexForDeleting);
                    setDeleteModalIsVisible(false);
                }}
                disableModal={() => setDeleteModalIsVisible(false)}
                subtitle={"Are you sure you want to delete the stop?"}
            />

            <ConfirmModal
                visible={errorModalIsVisible}
                title={"Error"}
                subtitle={errorModalText}
                confirmText={"OK"}
                hideCancelButton={true}
                onConfirm={() => setErrorModalIsVisible(false)}
                disableModal={() => setErrorModalIsVisible(false)}
            />

            <ConfirmModal
                visible={successfullyUpdateModalIsVisible}
                title={"Success"}
                subtitle={"Your ride route is updated"}
                confirmText={"OK"}
                hideCancelButton={true}
                onConfirm={() => {
                    setSuccessfullyUpdateModalIsVisible(false);
                    navigation.goBack();
                }}
                disableModal={() => {
                    setSuccessfullyUpdateModalIsVisible(false);
                    navigation.goBack();
                }}
            />

            <ConfirmModal
                visible={applyChangesModalIsVisible}
                confirmColor={"black"}
                title={"CHANGES"}
                subtitle={"After the changes is applied, all passengers will get notified. " +
                    "Some of them might withdraw from the ride if change doesn't suit them"}
                confirmText={"Apply"}
                cancelText={"Cancel"}
                onConfirm={() => {
                    setApplyChangesModalIsVisible(false);
                    onUpdateRoutePressHandler();
                }}
                disableModal={() => setApplyChangesModalIsVisible(false)}
            />
        </View>
    );
};

CreateJourney.addStopPressHandler = () => console.log("Outer Add stop handler");
CreateJourney.IsFromToChanged = () => false;
CreateJourney.numberOfAddedStop = 0;

export default CreateJourney;
