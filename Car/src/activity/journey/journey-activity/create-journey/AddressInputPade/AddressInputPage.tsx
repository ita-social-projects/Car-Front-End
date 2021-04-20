import { Text, TouchableOpacity, View } from "react-native";
import React, { useEffect, useRef, useState } from "react";
import AddressInput from "../AddressInput/AddressInput";
import { mapStyle } from "../../map-address/SearchJourneyMapStyle";
import { CreateJourneyStyle } from "../CreateJourneyStyle";
import MapView, { LatLng, MapEvent, Marker, PROVIDER_GOOGLE } from "react-native-maps";
import {
    FIRST_ELEMENT_INDEX, SECOND_ELEMENT_INDEX, SECOND_FROM_END_ELEMENT_INDEX,
    THIRD_FROM_END_ELEMENT_INDEX,
    THREE_ELEMENT_COLLECTION_LENGTH
} from "../../../../../constants/Constants";
import APIConfig from "../../../../../../api-service/APIConfig";
import WayPoint from "../../../../../types/WayPoint";
import SearchJourneyStyle from "../../search-journey/SearchJourneyStyle";
import DM from "../../../../../components/styles/DM";
import * as navigation from "../../../../../components/navigation/Navigation";
import AddressInputPageStyle from "./AddressInputPageStyle";
import AddressInputPageProps from "./AddressInputPageProps";

const CreateRequestWithAddressToGeocodingApi = (address: string) => {
    return "https://maps.googleapis.com/maps/api/geocode/json?address=" +
        address.replace(" ", "+") +
        "&key=" + APIConfig.apiKey;
};

const CreateRequestWithCoordinatesToGeocodingApi = (coordinates: LatLng) => {
    return "https://maps.googleapis.com/maps/api/geocode/json?latlng=" +
        `${coordinates.latitude},${coordinates.longitude}&key=${APIConfig.apiKey}`;
};

const AddressInputPage = (props: AddressInputPageProps) => {
    const params = props.route.params;

    const centerCoordinates = params.wayPoint.isConfirmed ?
        params.wayPoint.coordinates : params.camera.center;

    const [wayPoint, setWayPoint] = useState<WayPoint>(params.wayPoint);

    useEffect(() => setWayPoint(params.wayPoint), [params.wayPoint]);

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
    const [markerCoordinates, setMarkerCoordinates] = useState<LatLng>(centerCoordinates);

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
                    recentAddresses={params.recentAddresses}
                    userLocation={params.userCoordinates}
                />
            </View>

            <MapView
                ref={ref => (mapRef.current = ref)}
                style={{ height: "100%" }}
                provider={PROVIDER_GOOGLE}
                showsUserLocation={true}
                initialCamera={{ ...params.camera, center: centerCoordinates }}
                customMapStyle={mapStyle}
                onLongPress={mapEventHandler}
            >
                <Marker
                    style={CreateJourneyStyle.movableMarker}
                    draggable={true}
                    onDragEnd={mapEventHandler}
                    image={require("../../../../../../assets/images/small-custom-marker.png")}
                    coordinate={markerCoordinates}
                />
            </MapView>

            <TouchableOpacity
                style={[SearchJourneyStyle.confirmButton,
                    { backgroundColor:  !wayPoint.isConfirmed ? "darkgrey" : "black" }]}
                onPress={() => navigation.navigate(
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