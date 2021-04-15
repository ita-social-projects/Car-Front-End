import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React, { useRef, useState } from "react";
import AddressInput from "../AddressInput/AddressInput";
import { mapStyle } from "../../map-address/SearchJourneyMapStyle";
import { CreateJourneyStyle } from "../CreateJourneyStyle";
import MapView, { LatLng, MapEvent, Marker, PROVIDER_GOOGLE } from "react-native-maps";
import {
    FIRST_ELEMENT_INDEX,
    initialCamera,
    initialCoordinate, initialWayPoint, SECOND_ELEMENT_INDEX, SECOND_FROM_END_ELEMENT_INDEX,
    THIRD_FROM_END_ELEMENT_INDEX,
    THREE_ELEMENT_COLLECTION_LENGTH
} from "../../../../../constants/Constants";
import APIConfig from "../../../../../../api-service/APIConfig";
import WayPoint from "../WayPoint";
import SearchJourneyStyle from "../../search-journey/SearchJourneyStyle";
import DM from "../../../../../components/styles/DM";

const AddressInputPageStyle = StyleSheet.create({
    inputContainer: {
        position: "absolute",
        top: 10,
        left: 10,
        right: 10,
        zIndex: 1
    }
});

const CreateRequestToGeocodingApi = (address: string) => {
    return "https://maps.googleapis.com/maps/api/geocode/json?address=" +
        address.replace(" ", "+") +
        "&key=" + APIConfig.apiKey;
};

const AddressInputPage = (props: any) => {
    // console.log(JSON.stringify(props.navigation, null, 8));
    // console.log("AddressInputPage");
    // console.log(props);

    const [wayPoint, setWayPoint] = useState<WayPoint>(initialWayPoint);

    // console.log("wayPoint.isConfirmed - " + wayPoint.isConfirmed);

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

    const mapRef = useRef<MapView | null>(null);
    const [markerCoordinates, setMarkerCoordinates] = useState<LatLng>(initialCoordinate);

    const animateCameraAndMoveMarker = (latitude: number, longitude: number) => {
        const newMarkerCoordinates: LatLng = { longitude: longitude, latitude: latitude };

        setMarkerCoordinates(newMarkerCoordinates);

        mapRef.current?.animateCamera({
            center: newMarkerCoordinates
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

    const setCoordinatesByDescription = (description: string) => {

        fetch(CreateRequestToGeocodingApi(description))
            .then(result => result.json())
            .then(json => {
                const location = json.results[FIRST_ELEMENT_INDEX].geometry.location;
                const coordinates = { latitude: location.lat, longitude: location.lng };

                setWayPointsCoordinates(coordinates);
                animateCameraAndMoveMarker(coordinates.latitude, coordinates.longitude);
            });
    };

    const addressInputOnPressHandler = (data: any) => {
        if (data.geometry) {
            const point = data.geometry.location;

            setWayPointsCoordinates({ latitude: point.lat, longitude: point.lng });
            animateCameraAndMoveMarker(point.lat, point.lng);
        } else {
            setCoordinatesByDescription(data.description);
        }

        setWayPointsTextAndIsConfirmed(data.description, true);
    };

    const addressInputOnChangeTextHandler = (text: string) => {
        setWayPointsTextAndIsConfirmed(text, false);
    };

    const markerOnDragEndHandler = (event: MapEvent) => {
        const { latitude, longitude } = event.nativeEvent.coordinate;

        setAddressByCoordinates(latitude, longitude);

        animateCameraAndMoveMarker(latitude, longitude);
    };

    const params = props.route.params;

    return (
        <View>
            <View style={AddressInputPageStyle.inputContainer}>
                <AddressInput
                    placeholder={params.placeholder}
                    paddingLeft={params.paddingLeft}
                    address={wayPoint.text}
                    onChangeText={addressInputOnChangeTextHandler}
                    onPress={addressInputOnPressHandler}
                    savedLocations={params.savedLocations}
                />
            </View>

            <MapView
                ref={ref => (mapRef.current = ref)}
                style={{ height: "100%" }}
                provider={PROVIDER_GOOGLE}
                showsUserLocation={true}
                initialCamera={initialCamera}
                customMapStyle={mapStyle}
            >
                <Marker
                    style={CreateJourneyStyle.movableMarker}
                    draggable={true}
                    onDragEnd={markerOnDragEndHandler}
                    image={require("../../../../../../assets/images/small-custom-marker.png")}
                    coordinate={markerCoordinates}
                />
            </MapView>

            <TouchableOpacity
                style={[SearchJourneyStyle.confirmButton,
                    { backgroundColor:  !wayPoint.isConfirmed ? "darkgrey" : "black" }]}
                onPress={() => props.navigation.navigate(
                    params.previousScreen, { wayPoint: wayPoint, wayPointId: params.wayPointId })}
                disabled={!wayPoint.isConfirmed}
            >
                <Text style={[SearchJourneyStyle.confirmButtonSaveText, { color: DM(DM("white")) }]}>
                    Confirm
                </Text>
            </TouchableOpacity>
        </View>
    );
};

export default AddressInputPage;