import { LatLng } from "react-native-maps";
import CredentialsManager from "../../credentials/credentials.json";

export const CreateRequestWithAddressToGeocodingApi = (address: string) => {
    return "https://maps.googleapis.com/maps/api/geocode/json?address=" +
        address.replace(" ", "+") +
        "&key=" + CredentialsManager.mapApiKey;
};

export const CreateRequestWithCoordinatesToGeocodingApi = (coordinates: LatLng) => {
    return "https://maps.googleapis.com/maps/api/geocode/json?latlng=" +
        `${coordinates.latitude},${coordinates.longitude}&key=${CredentialsManager.mapApiKey}`;
};