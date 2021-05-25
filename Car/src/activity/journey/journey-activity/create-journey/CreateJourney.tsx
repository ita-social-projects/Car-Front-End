import React, { useContext, useEffect, useRef, useState } from "react";
import { PermissionsAndroid, Platform, ScrollView, Text, TouchableOpacity, View } from "react-native";
import SearchJourneyStyle from "../search-journey/SearchJourneyStyle";
import DM from "../../../../components/styles/DM";
import MapView, { LatLng, Marker, PROVIDER_GOOGLE } from "react-native-maps";
import { mapStyle } from "../map-address/SearchJourneyMapStyle";
import {
    initialCamera,
    initialCoordinate,
    initialWayPoint,
    RECENT_ADDRESSES_COUNT_LIMIT
} from "../../../../constants/AddressConstants";
import {
    INITIAL_ROUTE_DISTANCE,
    INITIAL_TIME,
    NUMBER_OF_STOPS_LIMIT,
    LEFT_PADDING_FOR_FROM_PLACEHOLDER,
    LEFT_PADDING_FOR_TO_PLACEHOLDER,
    LEFT_PADDING_FOR_VIA_PLACEHOLDER
} from "../../../../constants/JourneyConstants";
import {
    DELETE_COUNT,
    FIRST_ELEMENT_INDEX
} from "../../../../constants/GeneralConstants";
import APIConfig from "../../../../../api-service/APIConfig";
import MapViewDirections from "react-native-maps-directions";
import Geolocation from "@react-native-community/geolocation";
import LocationService from "../../../../../api-service/location-service/LocationService";
import AuthContext from "../../../../components/auth/AuthContext";
import Location from "../../../../../models/location/Location";
import AddressInputButton from "./AddressInputButton/AddressInputButton";
import * as navigation from "../../../../components/navigation/Navigation";
import WayPoint from "../../../../types/WayPoint";
import { CreateJourneyStyle } from "./CreateJourneyStyle";
import CreateJourneyProps from "./CreateJourneyProps";
import JourneyService from "../../../../../api-service/journey-service/JourneyService";
import Address from "../../../../../models/Address";
import Indicator from "../../../../components/activity-indicator/Indicator";
import ConfirmModal from "../../../../components/confirm-modal/ConfirmModal";

interface CreateJourneyComponent {
    addStopPressHandler: () => void,
    numberOfAddedStop: number,
    // eslint-disable-next-line unused-imports/no-unused-vars
    ({ props }: {props: CreateJourneyProps}): JSX.Element
}

interface OnRouteReadyResult {
    coordinates: LatLng[],
    distance: number,
    duration: number
}

const CreateJourney: CreateJourneyComponent = ({ props }: {props: CreateJourneyProps}) => {

    const params = props?.route?.params;

    const { user } = useContext(AuthContext);
    const [userCoordinates, setUserCoordinates] = useState<LatLng>(initialCoordinate);

    const [savedLocations, setSavedLocations] = useState<Array<Location>>([]);
    const [recentAddresses, setRecentAddresses] = useState<Array<Address>>([]);

    const [from, setFrom] = useState<WayPoint>(initialWayPoint);
    const [to, setTo] = useState<WayPoint>(initialWayPoint);
    const [stops, setStops] = useState<WayPoint[]>([]);
    const [duration, setDuration] = useState<number>(INITIAL_TIME);
    const [routeDistance, setRouteDistance] = useState<number>(INITIAL_ROUTE_DISTANCE);
    const [routePoints, setRoutePoints] = useState<LatLng[]>([]);
    const [routeIsConfirmed, setRouteIsConfirmed] = useState(false);

    const [deleteModalIsVisible, setDeleteModalIsVisible] = useState(false);
    const [stopIndexForDeleting, setStopIndexForDeleting] = useState(NaN);

    const [errorModalIsVisible, setErrorModalIsVisible] = useState(false);

    const mapRef = useRef<MapView | null>(null);
    const scrollViewRef = useRef<ScrollView | null>();

    const [savedLocationIsLoading, setSavedLocationIsLoading] = useState(true);
    const [recentAddressesIsLoading, setRecentAddressesIsLoading] = useState(true);
    const [userLocationIsLoading, setUserLocationIsLoading] = useState(true);

    useEffect(() => {
        if (params) {
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
        CreateJourney.numberOfAddedStop = 0;

        LocationService
            .getAll(Number(user?.id))
            .then((res: any) => {
                setSavedLocations(res.data);
                setSavedLocationIsLoading(false);
            })
            .catch((e) => console.log(e));

        JourneyService
            .getRecentJourneyStops(Number(user?.id))
            .then((res: any) => {
                setRecentAddresses(([] as Address[]).concat(
                    ...res.data.map((recentStops: any) => recentStops.map((stop: any) => stop!.address))));
                setRecentAddressesIsLoading(false);
            })
            .catch((e) => console.log(e));
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
                console.log("You can use the location");
                findUserLocation();
            } else {
                console.log("Location permission denied");
                setUserLocationIsLoading(false);
            }
        } catch (err) {
            console.warn(err);
        }
    };

    const findUserLocation = () => {
        Geolocation.getCurrentPosition(
            (position) => {
                setUserLocationIsLoading(false);
                setUserCoordinates(position.coords);
                mapRef.current?.setCamera({ ...initialCamera, center: position.coords });
            },
            (error) => {
                setUserLocationIsLoading(false);
                console.log(error);
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

    CreateJourney.addStopPressHandler = () => {
        if (stops.length >= NUMBER_OF_STOPS_LIMIT) return;

        setStops(prevState => [...prevState, initialWayPoint]);
        CreateJourney.numberOfAddedStop = ++stops.length;
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

    const confirmOnPressHandler = () => {
        navigation.navigate("Journey Details", {
            from: from,
            to: to,
            stops: stops.filter(stop => stop.isConfirmed),
            routePoints: routePoints,
            duration: duration,
            routeDistance: routeDistance
        });
    };

    const cantBuildRouteAlert = () => {
        setRouteIsConfirmed(false);
        setErrorModalIsVisible(true);
    };

    const onRouteReadyHandler = (result: OnRouteReadyResult) => {
        setRouteDistance(result.distance);
        setDuration(result.duration);
        setRoutePoints(result.coordinates);
        setRouteIsConfirmed(true);
        mapRef.current?.fitToCoordinates(result.coordinates,
            { edgePadding: { top: 800, right: 20, left: 20, bottom: 400 } });
    };

    const infoIsLoading = recentAddressesIsLoading || savedLocationIsLoading || userLocationIsLoading;

    return (
        <>
            {infoIsLoading && (
                <View style={{ height: "85%" }}>
                    <Indicator
                        size="large"
                        color="#414045"
                        text="Loading information..."
                    />
                </View>
            )}
            <View style={infoIsLoading ? { display: "none", height: 0, flex: 0 } : { flex: 1 }}>
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
                    />

                    <AddressInputButton
                        iconName={"location"}
                        directionType={"To"}
                        text={to.text}
                        onPress={() => onAddressInputButtonPressHandler(
                            "To", LEFT_PADDING_FOR_TO_PLACEHOLDER, "To", to)}
                        marginBottom={15}
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
                        />
                    ))}
                </ScrollView>

                <MapView
                    ref={ref => {
                        mapRef.current = ref;
                    }}
                    style={{ flex: 1 }}
                    provider={PROVIDER_GOOGLE}
                    showsUserLocation={true}
                    customMapStyle={mapStyle}
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
                            apikey={APIConfig.apiKey}
                            strokeWidth={5}
                            strokeColor="#027ebd"
                            onError={cantBuildRouteAlert}
                            onReady={onRouteReadyHandler}
                        />
                    )}
                </MapView>

                <TouchableOpacity
                    style={[SearchJourneyStyle.confirmButton,
                        { backgroundColor:  routeIsConfirmed ? "black" : "#afafaf" }]}
                    onPress={confirmOnPressHandler}
                    disabled={!routeIsConfirmed}
                >
                    <Text style={[SearchJourneyStyle.confirmButtonSaveText, { color: DM(DM("white")) }]}>
                    Confirm
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
                subtitle={"Cant build route. Please chose another way points"}
                confirmText={"OK"}
                hideCancelButton={true}
                onConfirm={() => setErrorModalIsVisible(false)}
                disableModal={() => setErrorModalIsVisible(false)}
            />
        </>
    );
};

CreateJourney.addStopPressHandler = () => console.log("Outer Add stop handler");
CreateJourney.numberOfAddedStop = 0;

export default CreateJourney;
