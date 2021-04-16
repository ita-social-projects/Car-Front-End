import React, { useContext, useEffect, useRef, useState } from "react";
import { Alert, PermissionsAndroid, Platform, ScrollView, Text, TouchableOpacity, View } from "react-native";
import SearchJourneyStyle from "../search-journey/SearchJourneyStyle";
import DM from "../../../../components/styles/DM";
import MapView, { LatLng, Marker, PROVIDER_GOOGLE } from "react-native-maps";
import { mapStyle } from "../map-address/SearchJourneyMapStyle";
import {
    DELETE_COUNT,
    initialCamera,
    initialWayPoint,
    LEFT_PADDING_FOR_FROM_PLACEHOLDER,
    LEFT_PADDING_FOR_TO_PLACEHOLDER,
    LEFT_PADDING_FOR_VIA_PLACEHOLDER,
    NUMBER_OF_STOPS_LIMIT
} from "../../../../constants/Constants";
import APIConfig from "../../../../../api-service/APIConfig";
import MapViewDirections from "react-native-maps-directions";
import Geolocation from "@react-native-community/geolocation";
import LocationService from "../../../../../api-service/location-service/LocationService";
import AuthContext from "../../../../components/auth/AuthContext";
import Location from "../../../../../models/location/Location";
import AddressInputButton from "./AddressInputButton/AddressInputButton";
import * as navigation from "../../../../components/navigation/Navigation";
import WayPoint from "./WayPoint";
import { CreateJourneyStyle } from "./CreateJourneyStyle";

interface CreateJourneyComponent {
    addStopPressHandler: () => void,
    // eslint-disable-next-line unused-imports/no-unused-vars
    ({ props }: {props: CreateJourneyProps}): JSX.Element
}

interface CreateJourneyProps {
    route: {
        params: {
            wayPoint: WayPoint,
            wayPointId: string
        }
    }
}

const CreateJourney: CreateJourneyComponent = ({ props }: {props: CreateJourneyProps}) => {
    const params = props?.route?.params;

    const { user } = useContext(AuthContext);
    const [savedLocations, setSavedLocations] = useState<Array<Location>>([]);

    const [from, setFrom] = useState<WayPoint>(initialWayPoint);
    const [to, setTo] = useState<WayPoint>(initialWayPoint);

    const [stops, setStops] = useState<WayPoint[]>([]);

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

    const mapRef = useRef<MapView | null>(null);
    const scrollViewRef = useRef<ScrollView | null>();

    useEffect(() => {
        LocationService
            .getAll(Number(user?.id))
            .then((res: any) => setSavedLocations(res.data))
            .catch((e: any) => console.log(e));
    }, []);

    const animateCamera = (coordinates: LatLng) => {
        mapRef.current?.animateCamera({
            center: coordinates
        }, { duration: 1000 });
    };

    const androidPermission = async () => {
        try {
            const granted = await PermissionsAndroid
                .request(PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION);

            if (granted === PermissionsAndroid.RESULTS.GRANTED) {
                console.log("You can use the location");
            } else {
                console.log("Location permission denied");
            }
        } catch (err) {
            console.warn(err);
        }
    };

    useEffect(() => {
        if (Platform.OS === "android") {
            androidPermission();
        } else {
            Geolocation.requestAuthorization();
        }
        Geolocation.getCurrentPosition(
            (position) => {
                animateCamera(position.coords);
            },
            (error) => {
                console.log(error);
            },
            { enableHighAccuracy: true, timeout: 15000, maximumAge: 10000 }
        );
    }, []);

    CreateJourney.addStopPressHandler = () => {
        if (stops.length >= NUMBER_OF_STOPS_LIMIT) return;

        setStops(prevState => [...prevState, {
            text: "",
            isConfirmed: false,
            coordinates: { longitude: 0, latitude: 0 }
        }]);
    };

    const fromAndToIsConfirmed = from.isConfirmed && to.isConfirmed;

    const onAddressInputButtonPressHandler = (
        placeholder: string, paddingLeft: number, wayPointId: string, wayPoint: WayPoint) => {

        mapRef.current?.getCamera().then(camera => {
            navigation.navigate("Address Input", {
                placeholder: placeholder,
                paddingLeft: paddingLeft,
                savedLocations: savedLocations,
                previousScreen: "Create Journey",
                wayPointId: wayPointId,
                wayPoint: wayPoint,
                camera: { ...camera, altitude: 200 }
            });
        });
    };

    useEffect(() => console.log(stops), [stops]);

    const removeStopByIndex = (stopIndex: number) => {
        let updatedStops = new Array(...stops);

        updatedStops.splice(stopIndex, DELETE_COUNT);
        setStops(updatedStops);
    };

    const onCloseIconPressHandler = (stopIndex: number) => {
        Alert.alert(
            "Delete stop",
            "Are you sure you want to delete the stop?",
            [{ text: "Cancel", style: "cancel" },
                { text: "Yes", onPress: () => removeStopByIndex(stopIndex) }]
        );
    };

    const confirmOnPressHandler = () => {
        navigation.navigate("New Journey Details", {
            from: from,
            to: to,
            stops: stops.filter(stop => stop.isConfirmed)
        });
    };

    return (
        <View style={{ flex: 1 }}>

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
                />

                <AddressInputButton
                    iconName={"location"}
                    directionType={"To"}
                    text={to.text}
                    onPress={() => onAddressInputButtonPressHandler(
                        "To", LEFT_PADDING_FOR_TO_PLACEHOLDER, "To", to)}
                />

                {stops.map((stop, index) => (
                    <AddressInputButton
                        iconName={"close"}
                        directionType={"Via"}
                        text={stop.text}
                        onPress={() => onAddressInputButtonPressHandler(
                            "Via", LEFT_PADDING_FOR_VIA_PLACEHOLDER, index.toString(), stops[index])}
                        onIconPress={() => onCloseIconPressHandler(index)}
                        key={index}
                    />
                ))}
            </ScrollView>

            <MapView
                ref={ref => (mapRef.current = ref)}
                style={{ flex: 1 }}
                provider={PROVIDER_GOOGLE}
                showsUserLocation={true}
                initialCamera={initialCamera}
                customMapStyle={mapStyle}
                showsCompass={false}
            >
                {from.isConfirmed && (
                    <Marker
                        title={"From"}
                        coordinate={from.coordinates}
                        image={require("../../../../../assets/images/small-circle-marker.png")}
                    />)
                }

                {to.isConfirmed && (
                    <Marker
                        title={"To"}
                        coordinate={to.coordinates}
                    />)
                }

                {stops.filter(stop => stop.isConfirmed)
                    .map((stop, index) => (
                        <Marker
                            title={"Stop"}
                            coordinate={stop.coordinates}
                            image={require("../../../../../assets/images/stop-marker-transparent.png")}
                            key={index}
                        />
                    ))
                }

                {fromAndToIsConfirmed && (
                    <MapViewDirections
                        optimizeWaypoints={true}
                        origin={from.coordinates}
                        destination={to.coordinates}
                        waypoints={stops.filter(stop => stop.isConfirmed).map(stop => stop.coordinates)}
                        apikey={APIConfig.apiKey}
                        strokeWidth={5}
                        strokeColor="#027ebd"
                    />
                )}
            </MapView>

            <TouchableOpacity
                style={[SearchJourneyStyle.confirmButton,
                    { backgroundColor:  fromAndToIsConfirmed ? "black" : "darkgrey" }]}
                onPress={confirmOnPressHandler}
                disabled={!fromAndToIsConfirmed}
            >
                <Text style={[SearchJourneyStyle.confirmButtonSaveText, { color: DM(DM("white")) }]}>
                    Confirm
                </Text>
            </TouchableOpacity>
        </View>
    );
};

CreateJourney.addStopPressHandler = () => console.log("Outer Add stop handler");

export default CreateJourney;
