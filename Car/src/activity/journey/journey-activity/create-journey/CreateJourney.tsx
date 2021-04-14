import React, { Dispatch, SetStateAction,
    useContext, useEffect, useRef, useState } from "react";
import {
    PermissionsAndroid,
    Platform, ScrollView,
    Text,
    TouchableOpacity,
    View
} from "react-native";
import SearchJourneyStyle from "../search-journey/SearchJourneyStyle";
import DM from "../../../../components/styles/DM";
import MapView, { LatLng, MapEvent, Marker, PROVIDER_GOOGLE } from "react-native-maps";
import { mapStyle } from "../map-address/SearchJourneyMapStyle";
import {
    FIRST_ELEMENT_INDEX,
    INITIAL_LATITUDE,
    INITIAL_LONGITUDE, NUMBER_OF_STOPS_LIMIT,
    SECOND_ELEMENT_INDEX,
    SECOND_FROM_END_ELEMENT_INDEX,
    THIRD_FROM_END_ELEMENT_INDEX,
    THREE_ELEMENT_COLLECTION_LENGTH
} from "../../../../constants/Constants";
import APIConfig from "../../../../../api-service/APIConfig";
import MapViewDirections from "react-native-maps-directions";
import { CreateJourneyStyle } from "./CreateJourneyStyle";
import MarkerFocus from "./MarkerFocus";
import Geolocation from "@react-native-community/geolocation";
import LocationService from "../../../../../api-service/location-service/LocationService";
import AuthContext from "../../../../components/auth/AuthContext";
import Location from "../../../../../models/location/Location";
import AddressInputButton from "./AddressInputButton/AddressInputButton";

const CreateRequestToGeocodingApi = (address: string) => {
    return "https://maps.googleapis.com/maps/api/geocode/json?address=" +
        address.replace(" ", "+") +
        "&key=" + APIConfig.apiKey;
};

interface WayPoint {
    text: string,
    isConfirmed: boolean,
    coordinates: LatLng
}

const initialWayPoint: WayPoint = {
    text: "",
    isConfirmed: false,
    coordinates: { latitude: 0, longitude: 0 }
};

interface CreateJourneyComponent {
    addStopPressHandler: () => void,
    (): JSX.Element
}

const initialCoordinate: LatLng = {
    latitude: INITIAL_LATITUDE,
    longitude: INITIAL_LONGITUDE
};

const initialCamera = {
    center: initialCoordinate,
    pitch: 2,
    heading: 20,
    altitude: 200,
    zoom: 16
};

const CreateJourney: CreateJourneyComponent = () => {
    const { user } = useContext(AuthContext);
    // eslint-disable-next-line unused-imports/no-unused-vars
    const [savedLocations, setSavedLocations] = useState<Array<Location>>([]);

    const [from, setFrom] = useState<WayPoint>(initialWayPoint);
    const [to, setTo] = useState<WayPoint>(initialWayPoint);

    const setWayPointsCoordinates = (setWayPoint: Dispatch<SetStateAction<WayPoint>>, coordinates: LatLng) => {
        setWayPoint(prevState => ({
            ...prevState,
            coordinates: coordinates
        }));
    };

    const setWayPointsTextAndIsConfirmed = (
        setWayPoint: Dispatch<SetStateAction<WayPoint>>,
        text: string, isConfirmed: boolean) => {
        setWayPoint(prevState => ({
            ...prevState,
            isConfirmed: isConfirmed,
            text: text
        }));
    };

    const [stops, setStops] = useState<WayPoint[]>([]);

    const [markerFocus, setMarkerFocus] = useState(MarkerFocus.From);
    const [markerCoordinates, setMarkerCoordinates] = useState<LatLng>(initialCoordinate);
    const mapRef = useRef<MapView | null>(null);

    useEffect(() => {
        LocationService
            .getAll(Number(user?.id))
            .then((res: any) => setSavedLocations(res.data))
            .catch((e: any) => console.log(e));
    }, []);

    const animateCameraAndMoveMarker = (latitude: number, longitude: number) => {
        const newMarkerCoordinates: LatLng = { longitude: longitude, latitude: latitude };

        setMarkerCoordinates(newMarkerCoordinates);

        mapRef.current?.animateCamera({
            center: newMarkerCoordinates
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
                animateCameraAndMoveMarker(position.coords.latitude, position.coords.longitude);
            },
            (error) => {
                console.log(error);
            },
            { enableHighAccuracy: true, timeout: 15000, maximumAge: 10000 }
        );
    }, []);

    const addStopPressHandler = () => {
        console.log("addStopPressHandler");
        if (stops.length >= NUMBER_OF_STOPS_LIMIT) return;

        setStops(prevState => [...prevState, {
            text: "",
            isConfirmed: false,
            coordinates: { longitude: 0, latitude: 0 }
        }]);
    };

    CreateJourney.addStopPressHandler = addStopPressHandler;

    const setAddress = (address: string, coordinates: LatLng) => {
        const setWayPoint = markerFocus === MarkerFocus.From ? setFrom : setTo;

        setWayPointsCoordinates(setWayPoint, coordinates);
        setWayPointsTextAndIsConfirmed(setWayPoint, address, true);
    };

    const removeRegionAndPostalCode = (json: string) => {
        const addressArray = json.split(", ");
        const endIndex = addressArray.length > THREE_ELEMENT_COLLECTION_LENGTH ?
            THIRD_FROM_END_ELEMENT_INDEX :
            SECOND_FROM_END_ELEMENT_INDEX;

        return addressArray.slice(FIRST_ELEMENT_INDEX, endIndex).join(", ");
    };

    const setAddressByCoordinates = (latitude: number, longitude: number) => {
        fetch(
            `https://maps.googleapis.com/maps/api/geocode/json?latlng=${latitude},${longitude}&key=${APIConfig.apiKey}`)
            .then((res) => res.json())
            .then((json) => {
                let resultedAddress = json.results[SECOND_ELEMENT_INDEX].formatted_address;

                resultedAddress = removeRegionAndPostalCode(resultedAddress);
                setAddress(resultedAddress, { latitude: latitude, longitude: longitude });
            });
    };

    // eslint-disable-next-line unused-imports/no-unused-vars
    const onMarkerPressHandler = (focus: MarkerFocus) => setMarkerFocus(focus);

    const SetCoordinatesByDescription = (description: string,
        setWayPoint: Dispatch<SetStateAction<WayPoint>>) => {

        fetch(CreateRequestToGeocodingApi(description))
            .then(result => result.json())
            .then(json => {
                const location = json.results[FIRST_ELEMENT_INDEX].geometry.location;
                const coordinates = { latitude: location.lat, longitude: location.lng };

                setWayPointsCoordinates(setWayPoint, coordinates);
                animateCameraAndMoveMarker(coordinates.latitude, coordinates.longitude);
            });
    };

    // eslint-disable-next-line unused-imports/no-unused-vars
    const addressInputOnPressHandler = (data: any,
        setWayPoint: Dispatch<SetStateAction<WayPoint>>,
        focus: MarkerFocus) => {

        if (data.geometry) {
            const point = data.geometry.location;

            setWayPointsCoordinates(setWayPoint, { latitude: point.lat, longitude: point.lng });
            animateCameraAndMoveMarker(point.lat, point.lng);
        } else {
            SetCoordinatesByDescription(data.description, setWayPoint);
        }

        setWayPointsTextAndIsConfirmed(setWayPoint, data.description, true);
        setMarkerFocus(focus);
    };

    // eslint-disable-next-line unused-imports/no-unused-vars
    const addressInputOnChangeTextHandler = (text: string, setWayPoint: Dispatch<SetStateAction<WayPoint>>) => {
        setWayPointsTextAndIsConfirmed(setWayPoint, text, false);
    };

    const markerOnDragEndHandler = (event: MapEvent) => {
        const { latitude, longitude } = event.nativeEvent.coordinate;

        setAddressByCoordinates(latitude, longitude);

        animateCameraAndMoveMarker(latitude, longitude);
    };

    const fromAndToIsConfirmed = from.isConfirmed && to.isConfirmed;

    return (
        <View style={{ flex: 1 }}>

            <ScrollView
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
                    onPress={() => console.log("From press")}
                />

                <AddressInputButton
                    directionType={"To"}
                    text={to.text}
                    onPress={() => console.log("To press")}
                />

                {stops.map((stop, index) => (
                    <AddressInputButton
                        directionType={"Via"}
                        text={stop.text}
                        onPress={() => console.log("Via press")}
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
                    <>
                        <Marker
                            style={CreateJourneyStyle.movableMarker}
                            draggable={true}
                            onDragEnd={markerOnDragEndHandler}
                            image={require("../../../../../assets/images/small-custom-marker.png")}
                            coordinate={markerCoordinates}
                        />
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
                    </>
                }
            </MapView>

            <TouchableOpacity
                style={SearchJourneyStyle.confirmButton}
                onPress={addStopPressHandler}
                disabled={stops.length > NUMBER_OF_STOPS_LIMIT}
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
