import React, { Dispatch, SetStateAction,
    useContext, useEffect, useRef, useState } from "react";
import { PermissionsAndroid, Platform, Text, TouchableOpacity, View } from "react-native";
import SearchJourneyStyle from "../search-journey/SearchJourneyStyle";
import DM from "../../../../components/styles/DM";
import AddressInput from "./AddressInput/AddressInput";
import MapView, { LatLng, MapEvent, Marker, PROVIDER_GOOGLE } from "react-native-maps";
import { mapStyle } from "../map-address/SearchJourneyMapStyle";
import {
    FIRST_ELEMENT_INDEX,
    INITIAL_LATITUDE,
    INITIAL_LONGITUDE,
    SECOND_ELEMENT_INDEX,
    SECOND_FROM_END_ELEMENT_INDEX,
    THIRD_FROM_END_ELEMENT_INDEX, THREE_ELEMENT_COLLECTION_LENGTH
} from "../../../../constants/Constants";
import APIConfig from "../../../../../api-service/APIConfig";
import MapViewDirections from "react-native-maps-directions";
import { CreateJourneyStyle } from "./CreateJourneyStyle";
import MarkerFocus from "./MarkerFocus";
import Geolocation from "@react-native-community/geolocation";
import LocationService from "../../../../../api-service/location-service/LocationService";
import AuthContext from "../../../../components/auth/AuthContext";
import Location from "../../../../../models/location/Location";

const CreateRequestToGeocodingApi = (address: string) => {
    return "https://maps.googleapis.com/maps/api/geocode/json?address=" +
        address.replace(" ", "+") +
        "&key=" + APIConfig.apiKey;
};

const CreateJourney = () => {
    const { user } = useContext(AuthContext);
    const [locations, setLocations] = useState<Array<Location>>([]);

    const [fromText, setFromText] = useState("");
    const [toText, setToText] = useState("");

    const [markerFocus, setMarkerFocus] = useState(MarkerFocus.From);

    const [isFromConfirmed, setIsFromConfirmed] = useState(false);
    const [isToConfirmed, setIsToConfirmed] = useState(false);

    const [fromCoordinates, setFromCoordinates] =
        useState<LatLng>({ latitude: 0, longitude: 0 });
    const [toCoordinates, setToCoordinates] =
        useState<LatLng>({ latitude: 0, longitude: 0 });

    const initialCoordinate: LatLng = {
        latitude: INITIAL_LATITUDE,
        longitude: INITIAL_LONGITUDE
    };
    const [markerCoordinates, setMarkerCoordinates] = useState<LatLng>(initialCoordinate);
    const mapRef = useRef<MapView | null>(null);

    const initialCamera = {
        center: initialCoordinate,
        pitch: 2,
        heading: 20,
        altitude: 200,
        zoom: 16
    };

    useEffect(() => {
        LocationService
            .getAll(Number(user?.id))
            .then((res: any) => {
                setLocations(res.data);
            })
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

    const confirmPressHandler = () => {
        console.log("Confirm was pressed");
    };

    const setAddress = (address: string, coordinates: LatLng) => {
        if (markerFocus === MarkerFocus.From) {
            setFromText(address);
            setIsFromConfirmed(true);
            setFromCoordinates(coordinates);
        } else if (markerFocus === MarkerFocus.To) {
            setToText(address);
            setIsToConfirmed(true);
            setToCoordinates(coordinates);
        }
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

    const onMarkerPressHandler = (markerFocus: MarkerFocus) => setMarkerFocus(markerFocus);

    const SetCoordinatesByDescription = (description: string,
        setAddress: Dispatch<SetStateAction<LatLng>>) => {

        fetch(CreateRequestToGeocodingApi(description))
            .then(result => result.json())
            .then(json => {
                const location = json.results[FIRST_ELEMENT_INDEX].geometry.location;
                const coordinate = { latitude: location.lat, longitude: location.lng };

                setAddress(coordinate);
                animateCameraAndMoveMarker(coordinate.latitude, coordinate.longitude);
            });
    };

    const addressInputOnPressHandler = (data: any,
        setCoordinates: Dispatch<SetStateAction<LatLng>>,
        setIsConfirmed: Dispatch<SetStateAction<boolean>>,
        setText: Dispatch<SetStateAction<string>>,
        markerFocus: MarkerFocus) => {

        if (data.geometry) {
            const point = data.geometry.location;

            setCoordinates({ latitude: point.lat, longitude: point.lng });
            animateCameraAndMoveMarker(point.lat, point.lng);
        } else {
            SetCoordinatesByDescription(data.description, setCoordinates);
        }
        setIsConfirmed(true);
        setText(data.description);
        setMarkerFocus(markerFocus);
    };

    const addressInputOnChangeTextHandler = (text: string,
        setIsConfirmed: Dispatch<SetStateAction<boolean>>,
        setText: Dispatch<SetStateAction<string>>) => {
        setIsConfirmed(false);
        setText(text);
    };

    const markerOnDragEndHandler = (event: MapEvent) => {
        const { latitude, longitude } = event.nativeEvent.coordinate;

        setAddressByCoordinates(latitude, longitude);

        animateCameraAndMoveMarker(latitude, longitude);
    };

    const fromAndToIsConfirmed = isFromConfirmed && isToConfirmed;

    return (
        <View style={{ flex: 1 }}>
            <AddressInput
                placeholder={"From"}
                top={10}
                paddingLeft={68}
                address={fromText}
                onPress={(data) =>
                    addressInputOnPressHandler(data, setFromCoordinates,
                        setIsFromConfirmed, setFromText, MarkerFocus.From)
                }
                onChangeText={(text) =>
                    addressInputOnChangeTextHandler(text, setIsFromConfirmed, setFromText)
                }
                onMarkerPress={() => onMarkerPressHandler(MarkerFocus.From)}
                isMarkerFocus={markerFocus === MarkerFocus.From}
                savedLocations={locations}
            />

            <AddressInput
                placeholder={"To"}
                top={65}
                paddingLeft={45}
                address={toText}
                onPress={(data) =>
                    addressInputOnPressHandler(data, setToCoordinates,
                        setIsToConfirmed, setToText, MarkerFocus.To)
                }
                onChangeText={(text) =>
                    addressInputOnChangeTextHandler(text, setIsToConfirmed, setToText)
                }
                onMarkerPress={() => onMarkerPressHandler(MarkerFocus.To)}
                isMarkerFocus={markerFocus === MarkerFocus.To}
                savedLocations={locations}
            />

            <MapView
                ref={ref => { mapRef.current = ref; }}
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
                            image={require("../../../../../assets/images/custom-marker.png")}
                            coordinate={markerCoordinates}
                        />
                        {
                            fromAndToIsConfirmed ? (
                                <>
                                    <Marker
                                        title={"From"}
                                        coordinate={fromCoordinates}
                                        image={require("../../../../../assets/images/circle-marker.png")}
                                    />
                                    <Marker
                                        title={"To"}
                                        coordinate={toCoordinates}
                                    />
                                    <MapViewDirections
                                        origin={fromCoordinates}
                                        destination={toCoordinates}
                                        apikey={APIConfig.apiKey}
                                        strokeWidth={5}
                                        strokeColor="#027ebd"
                                    />
                                </>
                            ) : (<></>)
                        }
                    </>
                }
            </MapView>

            <TouchableOpacity
                style={[SearchJourneyStyle.confirmButton,
                    { backgroundColor: DM(DM(fromAndToIsConfirmed ? "black" : "gray")) }]}
                onPress={confirmPressHandler}
                disabled={!fromAndToIsConfirmed}
            >
                <Text style={[SearchJourneyStyle.confirmButtonSaveText, { color: DM(DM("white")) }]}>
                    Confirm
                </Text>
            </TouchableOpacity>
        </View>
    );
};

export default CreateJourney;
