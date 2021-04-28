import React, { useEffect, useRef, useState } from "react";
import { PermissionsAndroid, Platform, Text, TextInput, TouchableOpacity, View } from "react-native";
import MapView, { PROVIDER_GOOGLE, Marker, LatLng, MapEvent } from "react-native-maps";
import DM from "../../../../../../components/styles/DM";
import {
    initialWayPoint,
    THREE_ELEMENT_COLLECTION_LENGTH,
    THIRD_FROM_END_ELEMENT_INDEX,
    SECOND_FROM_END_ELEMENT_INDEX,
    FIRST_ELEMENT_INDEX,
    SECOND_ELEMENT_INDEX,
    initialCamera,
    initialCoordinate
} from "../../../../../../constants/Constants";

import { mapStyle } from "../../../../../journey/journey-activity/map-address/SearchJourneyMapStyle";
import WayPoint from "../../../../../../types/WayPoint";
import * as navigation from "../../../../../../components/navigation/Navigation";
import Geolocation from "@react-native-community/geolocation";
import APIConfig from "../../../../../../../api-service/APIConfig";
import { CreateJourneyStyle } from "../../../../../journey/journey-activity/create-journey/CreateJourneyStyle";
import AddressInput from "../../../../../journey/journey-activity/create-journey/AddressInput/AddressInput";

import AddLocationStyle from "./AddLocationStyle";

import LocationDropDownPicker from "../../../../../../components/location-drop-down-picker/LocationDropDownPicker";

import Ionicons from "react-native-vector-icons/Ionicons";

const CreateRequestWithAddressToGeocodingApi = (address: string) => {
    return "https://maps.googleapis.com/maps/api/geocode/json?address=" +
        address.replace(" ", "+") +
        "&key=" + APIConfig.apiKey;
};

const CreateRequestWithCoordinatesToGeocodingApi = (coordinates: LatLng) => {
    return "https://maps.googleapis.com/maps/api/geocode/json?latlng=" +
        `${coordinates.latitude},${coordinates.longitude}&key=${APIConfig.apiKey}`;
};

const AddLocation = () => {

    const [wayPoint, setWayPoint] = useState<WayPoint>(initialWayPoint);

    const [isVisibleLocationDropDown, setIsVisibleLocationDropDown] = useState(false);

    // eslint-disable-next-line unused-imports/no-unused-vars
    const [selectedLocationType, setSelectedLocationType] =
        useState<{id: number, name: string}>({ id: NaN, name: "" });

    const setWayPointsCoordinates = (coordinates: LatLng) => {
        setWayPoint(prevState => ({
            ...prevState,
            coordinates: coordinates
        }));
    };

    const setWayPointsTextAndIsConfirmed = (text: string, isConfirmed: boolean) => {
        setWayPoint(prevState => ({
            ...prevState,
            isConfirmed: isConfirmed,
            text: text
        }));
    };

    // eslint-disable-next-line unused-imports/no-unused-vars
    const [location, setLocation] = useState<WayPoint>(initialWayPoint);

    const [locationName, setLocationName] = useState("");

    const [userCoordinates, setUserCoordinates] = useState<LatLng>(initialCoordinate);

    const mapRef = useRef<MapView | null>(null);

    const [markerCoordinates, setMarkerCoordinates] = useState<LatLng>(initialCoordinate);

    const animateCameraAndMoveMarker = (coordinates: LatLng) => {
        setMarkerCoordinates(coordinates);

        mapRef.current?.animateCamera({
            center: coordinates
        }, { duration: 2000 });
    };

    const setAddress = (address: string, coordinates: LatLng) => {
        setWayPointsCoordinates(coordinates);
        setWayPointsTextAndIsConfirmed(address, true);
    };

    const removeRegionAndPostalCode = (json: string) => {
        const addressArray = json.split(", ");
        const endIndex = addressArray.length > THREE_ELEMENT_COLLECTION_LENGTH ?
            THIRD_FROM_END_ELEMENT_INDEX :
            SECOND_FROM_END_ELEMENT_INDEX;

        return addressArray.slice(FIRST_ELEMENT_INDEX, endIndex).join(", ");
    };

    const setAddressByCoordinates = (coordinates: LatLng) => {
        fetch(CreateRequestWithCoordinatesToGeocodingApi(coordinates))
            .then((res) => res.json())
            .then((json) => {
                let resultedAddress = json.results[SECOND_ELEMENT_INDEX].formatted_address;

                resultedAddress = removeRegionAndPostalCode(resultedAddress);
                setAddress(resultedAddress, coordinates);
            });
    };

    const setCoordinatesByDescription = (description: string) => {

        fetch(CreateRequestWithAddressToGeocodingApi(description))
            .then(result => result.json())
            .then(json => {
                const latLng = json.results[FIRST_ELEMENT_INDEX].geometry.location;

                console.log(latLng);

                const coordinates: LatLng = { latitude: latLng.lat, longitude: latLng.lng };

                setWayPointsCoordinates(coordinates);
                animateCameraAndMoveMarker(coordinates);
            });
    };

    const addressInputOnPressHandler = (data: any) => {
        if (data.geometry) {
            const point = data.geometry.location;

            setWayPointsCoordinates({ latitude: point.lat, longitude: point.lng });
            animateCameraAndMoveMarker({ latitude: point.lat, longitude: point.lng });
        } else {
            setCoordinatesByDescription(data.description);
        }

        setWayPointsTextAndIsConfirmed(data.description, true);
    };
    const addressInputOnChangeTextHandler = (text: string) => {
        setWayPointsTextAndIsConfirmed(text, false);
    };

    const mapEventHandler = (event: MapEvent) => {
        setAddressByCoordinates(event.nativeEvent.coordinate);

        animateCameraAndMoveMarker(event.nativeEvent.coordinate);
    };

    const animateCamera = (coordinates: LatLng) => {
        setMarkerCoordinates(coordinates);

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
                setUserCoordinates(position.coords);
                animateCamera(position.coords);
            },
            (error) => {
                console.log(error);
            },
            { enableHighAccuracy: true, timeout: 15000, maximumAge: 10000 }
        );
    }, []);

    // eslint-disable-next-line unused-imports/no-unused-vars
    const onAddressInputButtonPressHandler = (placeholder: string, paddingLeft: number) => {
        navigation.navigate("AddLocation", {
            placeholder: placeholder,
            paddingLeft: paddingLeft,
        });
    };

    return (
        <View style={{ flex: 1 }}>
            <View style={AddLocationStyle.inputContainer}>
                <AddressInput
                    placeholder={"Address"}
                    paddingLeft={90}
                    address={wayPoint.text}
                    onChangeText={addressInputOnChangeTextHandler}
                    onPress={addressInputOnPressHandler}
                    onClearIconPress={() => setWayPointsTextAndIsConfirmed("", false)}
                    savedLocations={[]}
                    userLocation={userCoordinates}
                    recentAddresses={[]}
                />

                <TextInput
                    style={AddLocationStyle.textInput}
                    value={locationName}
                    placeholder={"Name the chosen address"}
                    placeholderTextColor={"grey"}
                    onChangeText={(fromInput) => {
                        setLocationName(fromInput);
                    }}
                />

                <LocationDropDownPicker
                    items={[{ label:"Work", value: 1 ,
                        icon: () => <Ionicons name="ios-briefcase-outline" size={25} color="#414045"/> },
                    { label:"Home", value: 2 ,
                        icon: () => <Ionicons name="home-outline" size={25} color="#414045"/> },
                    { label:"Other", value: 3 ,
                        icon: () => <Ionicons name="star-outline" size={25} color="#414045"/> }]}

                    placeholder="Choose the address type and the icon"
                    isVisible={isVisibleLocationDropDown}
                    onOpen={() => setIsVisibleLocationDropDown(true)}
                    onChangeItem={(item) => {
                        setSelectedLocationType({ id: item.value, name: item.label });
                        setIsVisibleLocationDropDown(false);
                    }}
                    valueId={0}
                />
            </View>

            <MapView
                ref={ref => (mapRef.current = ref)}
                style={{ height: "100%" }}
                provider={PROVIDER_GOOGLE}
                showsUserLocation={true}
                initialCamera={initialCamera}
                customMapStyle={mapStyle}
                onLongPress={mapEventHandler}
                showsCompass={false}
            >
                <Marker
                    title={"Address"}
                    style={CreateJourneyStyle.movableMarker}
                    draggable={true}
                    onDragEnd={mapEventHandler}
                    //onDragEnd={markerOnDragEndHandler}
                    image={require("../../../../../../../assets/images/maps-markers/with_shade.png")}
                    coordinate={markerCoordinates}
                />
            </MapView>

            <TouchableOpacity
                style={[AddLocationStyle.saveButton,
                    { backgroundColor:  wayPoint.isConfirmed ? "black" : "darkgrey" }]}
                /*onPress={confirmOnPressHandler}*/
                disabled={!wayPoint.isConfirmed}
            >
                <Text style={[AddLocationStyle.saveButtonSaveText, { color: DM(DM("white")) }]}>
                    Save
                </Text>
            </TouchableOpacity>
        </View>
    );
};

export default AddLocation;
