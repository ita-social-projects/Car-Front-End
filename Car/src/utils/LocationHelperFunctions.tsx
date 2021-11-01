/* eslint-disable unused-imports/no-unused-vars */
import { MutableRefObject } from "react";
import { PermissionsAndroid } from "react-native";
import MapView, { LatLng } from "react-native-maps";
import {
    CreateRequestWithAddressToGeocodingApi,
    CreateRequestWithCoordinatesToGeocodingApi
} from "./AddressHelperFunctions";
import {
    FIRST_ELEMENT_INDEX, SECOND_ELEMENT_INDEX, SECOND_FROM_END_ELEMENT_INDEX,
    THIRD_FROM_END_ELEMENT_INDEX,
    THREE_ELEMENT_COLLECTION_LENGTH
} from "../constants/GeneralConstants";
import { MAX_LOCATION_NAME_LENGTH } from "../constants/LocationConstants";
import appInsights from "../components/telemetry/AppInsights";

export const androidPermission = async () => {
    try {
        const granted = await PermissionsAndroid
            .request(PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION);

        if (granted === PermissionsAndroid.RESULTS.GRANTED) {
            console.log("You can use the location");
        } else {
            console.log("Location permission denied");
        }
    } catch (e) {
        appInsights.trackException({ exception: e as Error });
    }
};

export const animateCamera =
    (fn: (coordinates: LatLng) => void, coordinates: LatLng, mapRef: MutableRefObject<MapView | null>) => {
        fn(coordinates);

    mapRef.current?.animateCamera({
        center: coordinates
    }, { duration: 1000 });
    };

export const setCoordinatesByDescription =
    (description: string, fn1: (coordinates: LatLng) => void, fn2: (coordinates: LatLng) => void) => {

        fetch(CreateRequestWithAddressToGeocodingApi(description))
            .then(result => result.json())
            .then(json => {
                const latLng = json.results[FIRST_ELEMENT_INDEX].geometry.location;

                const coordinates: LatLng = { latitude: latLng.lat, longitude: latLng.lng };

                fn1(coordinates);
                fn2(coordinates);
            });
    };

export const removeRegionAndPostalCode = (json: string) => {
    const addressArray = json.split(", ");
    const endIndex = addressArray.length > THREE_ELEMENT_COLLECTION_LENGTH ?
        THIRD_FROM_END_ELEMENT_INDEX :
        SECOND_FROM_END_ELEMENT_INDEX;

    return addressArray.slice(FIRST_ELEMENT_INDEX, endIndex).join(", ");
};

export const addressNameSubstring = (addressName: string) => {
    return addressName.substr(FIRST_ELEMENT_INDEX,
        MAX_LOCATION_NAME_LENGTH - THREE_ELEMENT_COLLECTION_LENGTH) + "...";
};

export const setAddressByCoordinates = (fn: (s: string, c: LatLng) => void, coordinates: LatLng) => {
    fetch(CreateRequestWithCoordinatesToGeocodingApi(coordinates))
        .then((res) => res.json())
        .then((json) => {
            let resultedAddress = json.results[SECOND_ELEMENT_INDEX].formatted_address;

            resultedAddress = removeRegionAndPostalCode(resultedAddress);
            fn(resultedAddress, coordinates);
        });
};

export const getAddressByCoordinatesAsync = async (coordinates: LatLng) => {
    var address = "";

    address = await fetch(CreateRequestWithCoordinatesToGeocodingApi(coordinates))
        .then((res) => res.json())
        .then((json) => {
            let resultedAddress = json.results[FIRST_ELEMENT_INDEX].formatted_address;

            resultedAddress = removeRegionAndPostalCode(resultedAddress);

            return resultedAddress;
        });

    return address;
};