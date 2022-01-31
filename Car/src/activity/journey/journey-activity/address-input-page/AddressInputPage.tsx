import { Text, TouchableOpacity, View } from "react-native";
import React, { useEffect, useRef, useState } from "react";
import MapView, { LatLng, MapEvent, Marker, PROVIDER_GOOGLE } from "react-native-maps";

import AddressInputPageStyle from "./AddressInputPageStyle";
import AddressInputPageProps from "./AddressInputPageProps";
import AddressInput from "../../../../components/address-input/AddressInput";
import { useTheme } from "../../../../components/theme/ThemeProvider";
import { darkMapStyle } from "../../../../constants/DarkMapStyleConstant";
import { THREE_ELEMENT_COLLECTION_LENGTH, THIRD_FROM_END_ELEMENT_INDEX, SECOND_FROM_END_ELEMENT_INDEX, FIRST_ELEMENT_INDEX, SECOND_ELEMENT_INDEX } from "../../../../constants/GeneralConstants";
import WayPoint from "../../../../types/WayPoint";
import { CreateRequestWithCoordinatesToGeocodingApi, CreateRequestWithAddressToGeocodingApi } from "../../../../utils/AddressHelperFunctions";
import { CreateJourneyStyle } from "../create-journey/CreateJourneyStyle";
import { mapStyle } from "../search-journey-map/SearchJourneyMapStyle";
import SearchJourneyStyle from "../search-journey/SearchJourneyStyle";
import * as navigation from "../../../../components/navigation/Navigation";
import { DEFAULT_INPUT_LEFT_PADDING } from "../../../../constants/StylesConstants";

const AddressInputPage = (props: AddressInputPageProps) => {
    const { colors, isThemeDark } = useTheme();
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
        }, { duration: 1000 });
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
                    placeholder={wayPoint.isConfirmed ? "" : params.placeholder}
                    paddingLeft={wayPoint.isConfirmed ? DEFAULT_INPUT_LEFT_PADDING : params.paddingLeft}
                    address={wayPoint.text}
                    onChangeText={addressInputOnChangeTextHandler}
                    onPress={addressInputOnPressHandler}
                    onClearIconPress={() => setWayPointsTextAndIsConfirmed("", false)}
                    onShowLocationIconPress={() => animateCameraAndMoveMarker(centerCoordinates)}
                    savedLocations={params.savedLocations}
                    recentAddresses={params.recentAddresses}
                    userLocation={params.userCoordinates}
                />
            </View>

            <MapView
                ref={ref => (mapRef.current = ref)}
                style={AddressInputPageStyle.mapContainer}
                provider={PROVIDER_GOOGLE}
                showsUserLocation={true}
                initialCamera={{ ...params.camera, center: centerCoordinates }}
                customMapStyle={isThemeDark ? darkMapStyle : mapStyle}
                onLongPress={mapEventHandler}
                showsCompass={false}
                showsMyLocationButton={false}
            >
                <Marker
                    style={CreateJourneyStyle.movableMarker}
                    draggable={true}
                    onDragEnd={mapEventHandler}
                    image={require("../../../../../assets/images/maps-markers/with_shade.png")}
                    coordinate={markerCoordinates}
                />
            </MapView>

            <TouchableOpacity
                style={[SearchJourneyStyle.confirmButton,
                    { backgroundColor:  !wayPoint.isConfirmed ? colors.secondaryDark : colors.hover }]}
                onPress={() => navigation.navigate(
                    params.previousScreen, { wayPoint: wayPoint, wayPointId: params.wayPointId })}
                disabled={!wayPoint.isConfirmed}
            >
                <Text style={[SearchJourneyStyle.confirmButtonSaveText, { color: colors.white }]}>
                    Confirm
                </Text>
            </TouchableOpacity>
        </View>
    );
};

export default AddressInputPage;