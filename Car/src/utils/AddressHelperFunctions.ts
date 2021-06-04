import APIConfig from "../../api-service/APIConfig";
import { LatLng } from "react-native-maps";

export const CreateRequestWithAddressToGeocodingApi = (address: string) => {
    return "https://maps.googleapis.com/maps/api/geocode/json?address=" +
        address.replace(" ", "+") +
        "&key=" + APIConfig.apiKey;
};

export const CreateRequestWithCoordinatesToGeocodingApi = (coordinates: LatLng) => {
    return "https://maps.googleapis.com/maps/api/geocode/json?latlng=" +
        `${coordinates.latitude},${coordinates.longitude}&key=${APIConfig.apiKey}`;
};