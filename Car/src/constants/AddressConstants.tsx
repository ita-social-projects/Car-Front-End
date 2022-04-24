import { LatLng } from "react-native-maps";
import WayPoint from "../types/WayPoint";
import { ZERO } from "./GeneralConstants";

export const EDIT_ADDRESS_MORE_OPTIONS_POPUP_HEIGHT = 150;
export const INITIAL_LATITUDE = 49.843844;
export const INITIAL_LONGITUDE = 24.025581;
export const RECENT_ADDRESSES_COUNT_LIMIT = 5;
export const DEFAULT_LOCATION_ICON_ID = 9;
export const MAX_ADDRESS_NAME_LENGTH = 45;
export const ADDRESS_NAME_MAX_LINES_COUNT = 1;
export const ADDRESS_NAME_WIDTH_CUT = 140;

export const initialCoordinate: LatLng = {
    latitude: INITIAL_LATITUDE,
    longitude: INITIAL_LONGITUDE
};

export const initialCamera = {
    center: initialCoordinate,
    pitch: 2,
    heading: 20,
    altitude: 200,
    zoom: 16
};

export const initialWayPoint: WayPoint = {
    text: "",
    isConfirmed: false,
    coordinates: { latitude: 0, longitude: 0 },
    stopId: ZERO,
    changeable: true
};
