import React, { useContext, useEffect, useRef, useState } from "react";
import {
    PermissionsAndroid,
    Platform, ScrollView,
    Text,
    TouchableOpacity,
    View
} from "react-native";
import SearchJourneyStyle from "../search-journey/SearchJourneyStyle";
import DM from "../../../../components/styles/DM";
import MapView, { Marker, PROVIDER_GOOGLE } from "react-native-maps";
import { mapStyle } from "../map-address/SearchJourneyMapStyle";
import {
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

interface CreateJourneyComponent {
    addStopPressHandler: () => void,
    (): JSX.Element
}

const CreateJourney: CreateJourneyComponent = () => {
    const { user } = useContext(AuthContext);
    const [savedLocations, setSavedLocations] = useState<Array<Location>>([]);

    // eslint-disable-next-line unused-imports/no-unused-vars
    const [from, setFrom] = useState<WayPoint>(initialWayPoint);
    // eslint-disable-next-line unused-imports/no-unused-vars
    const [to, setTo] = useState<WayPoint>(initialWayPoint);

    const [stops, setStops] = useState<WayPoint[]>([]);

    const mapRef = useRef<MapView | null>(null);
    const scrollViewRef = useRef<ScrollView | null>();

    useEffect(() => {
        LocationService
            .getAll(Number(user?.id))
            .then((res: any) => setSavedLocations(res.data))
            .catch((e: any) => console.log(e));
    }, []);

    const animateCamera = (latitude: number, longitude: number) => {
        mapRef.current?.animateCamera({
            center: { longitude: longitude, latitude: latitude }
        }, { duration: 2000 });
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
                animateCamera(position.coords.latitude, position.coords.longitude);
            },
            (error) => {
                console.log(error);
            },
            { enableHighAccuracy: true, timeout: 15000, maximumAge: 10000 }
        );
    }, []);

    const addStopPressHandler = () => {
        console.log(stops.length);
        if (stops.length >= NUMBER_OF_STOPS_LIMIT) return;

        setStops(prevState => [...prevState, {
            text: "",
            isConfirmed: false,
            coordinates: { longitude: 0, latitude: 0 }
        }]);
    };

    CreateJourney.addStopPressHandler = addStopPressHandler;

    const fromAndToIsConfirmed = from.isConfirmed && to.isConfirmed;

    const isAddStopDisabled = stops.length >= NUMBER_OF_STOPS_LIMIT;

    const onAddressInputButtonPressHandler = (placeholder: string, paddingLeft: number) => {
        navigation.navigate("Address Input", {
            placeholder: placeholder,
            paddingLeft: paddingLeft,
            savedLocations: savedLocations
        });
    };

    return (
        <View style={{ flex: 1 }}>

            <ScrollView
                ref={ref => (scrollViewRef.current = ref)}
                onContentSizeChange={() => scrollViewRef.current?.scrollToEnd({ animated: true })}
                style={{
                    position: "absolute",
                    zIndex: 1,
                    width: "100%",
                    paddingHorizontal: 10,
                    height: 200,
                    marginTop: 15
                }}
            >
                <AddressInputButton
                    directionType={"From"}
                    text={from.text}
                    onPress={() => onAddressInputButtonPressHandler(
                        "From", LEFT_PADDING_FOR_FROM_PLACEHOLDER)}
                />

                <AddressInputButton
                    directionType={"To"}
                    text={to.text}
                    onPress={() => onAddressInputButtonPressHandler(
                        "To", LEFT_PADDING_FOR_TO_PLACEHOLDER)}
                />

                {stops.map((stop, index) => (
                    <AddressInputButton
                        directionType={"Via"}
                        text={stop.text}
                        onPress={() => onAddressInputButtonPressHandler(
                            "Via", LEFT_PADDING_FOR_VIA_PLACEHOLDER)}
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
            >
                {
                    fromAndToIsConfirmed && (
                        <>
                            <Marker
                                title={"From"}
                                coordinate={from.coordinates}
                                image={require("../../../../../assets/images/small-circle-marker.png")}
                            />
                            <Marker
                                title={"To"}
                                coordinate={to.coordinates}
                            />
                            <MapViewDirections
                                origin={from.coordinates}
                                destination={to.coordinates}
                                apikey={APIConfig.apiKey}
                                strokeWidth={5}
                                strokeColor="#027ebd"
                            />
                        </>
                    )
                }
            </MapView>

            <TouchableOpacity
                style={[SearchJourneyStyle.confirmButton,
                    { backgroundColor:  isAddStopDisabled ? "darkgrey" : "black" }]}
                onPress={addStopPressHandler}
                disabled={isAddStopDisabled}
            >
                <Text style={[SearchJourneyStyle.confirmButtonSaveText, { color: DM(DM("white")) }]}>
                    Add stop
                </Text>
            </TouchableOpacity>
        </View>
    );
};

CreateJourney.addStopPressHandler = () => console.log("Outer Add stop handler");

export default CreateJourney;
