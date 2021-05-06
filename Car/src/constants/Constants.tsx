import { Animated, Dimensions } from "react-native";
import { getStatusBarHeight } from "react-native-status-bar-height";
import { LatLng } from "react-native-maps";
import WayPoint from "../types/WayPoint";

export const DROP_DOWN_MAX_HEIGHT = Dimensions.get("window").height / 4;
export const GRADIENT_START = 0;
export const GRADIENT_END = 1;
export const NOT_EXISTING_ELEMENT_INDEX = -1;
export const FIRST_ELEMENT_INDEX = 0;
export const SECOND_ELEMENT_INDEX = 1;
export const THIRD_ELEMENT_INDEX = 2;
export const FOURTH_ELEMENT_INDEX = 3;
export const SECOND_FROM_END_ELEMENT_INDEX = -2;
export const THIRD_FROM_END_ELEMENT_INDEX = -3;
export const LAST_INDEX_CORRECTION = 1;
export const EMPTY_COLLECTION_LENGTH = 0;
export const SINGLE_ELEMENT_COLLECTION_LENGTH = 1;
export const THREE_ELEMENT_COLLECTION_LENGTH = 3;
export const ZERO_OPACITY = 0;
export const ZERO_MARGIN = 0;
export const HALF_OPACITY = 0.5;
export const MAX_OPACITY = 1;
export const ANIMATION_DURATION = 500;
export const SLEEP_DURATION = 700;
export const MODAL_SLEEP_DURATION = 100;
export const MAX_POPUP_POSITION = 0;
export const MIN_POPUP_POSITION = 1;
export const MIN_POPUP_HEIGHT = 0;
export const POPUP_HEIGHT_WITH_USER_IMAGE = 188;
export const POPUP_HEIGHT_WITHOUT_USER_IMAGE = 143;
export const JOURNEY_MORE_OPTIONS_POPUP_HEIGHT = 280;
export const CREATE_JOURNEY_MORE_OPTIONS_POPUP_HEIGHT = 200;
export const EDIT_ADDRESS_MORE_OPTIONS_POPUP_HEIGHT = 150;
export const JOURNEY_CONTENT_HEIGHT = 201 + getStatusBarHeight();
export const MIN_JOURNEY_PAGE_POPUP_HEIGHT = 0;
export const MEDIUM_JOURNEY_PAGE_POPUP_HEIGHT = 262 + getStatusBarHeight();
export const MAX_JOURNEY_PAGE_POPUP_HEIGHT = 663 + getStatusBarHeight();
export const MIN_JOURNEY_REQUEST_PAGE_POPUP_HEIGHT = 0;
export const MEDIUM_JOURNEY_REQUEST_PAGE_POPUP_HEIGHT = 147;
export const MAX_JOURNEY_REQUEST_PAGE_POPUP_HEIGHT = 412;
export const CHAT_POPUP_HEIGHT = 135;
export const MAX_PLATE_NUMBER_LENGTH = 10;
export const MIN_PLATE_NUMBER_LENGTH = 4;
export const INITIAL_LATITUDE = 49.843844;
export const INITIAL_LONGITUDE = 24.025581;
export const REFRESHER_TIMEOUT = 500;
export const MILLISECONDS_IN_MONTH = 2629800000;
export const MILLISECONDS_IN_MINUTES = 60000;
export const HIDDEN_MAP_Z_INDEX = 100;
export const SHOWN_MAP_Z_INDEX = 200;
export const HTTP_STATUS_OK = 200;
export const AVATAR_LOGO_SIZE_TO_TEXT_RATIO = 2.5;
export const AVATAR_LOGO_SIZE_TO_PADDING_RATIO = 14;
export const INITIAL_TIME = 0;
export const FIRST_LOADING_MESSAGES = 0;
export const COUNT_OF_MESSAGES_TO_LOAD = 0;
export const NUMBER_OF_STOPS_LIMIT = 7;
export const LEFT_PADDING_FOR_FROM_PLACEHOLDER = 67;
export const LEFT_PADDING_FOR_TO_PLACEHOLDER = 45;
export const LEFT_PADDING_FOR_VIA_PLACEHOLDER = 50;
export const DELETE_COUNT = 1;
export const DEFAULT_AVAILABLE_SEATS_COUNT = 4;
export const MINUTES_OFFSET = 10;
export const MAX_PHOTO_FILE_SIZE = 7e+6;
export const USER_STATE_CHANGE_EVENT_NAME = "onUserStateChange";

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
    coordinates: { latitude: 0, longitude: 0 }
};

export const animateOpacity = (layout: Animated.Value, opacity: number, duration: number) : void => {
    Animated.timing(layout, {
        toValue: opacity,
        duration: duration,
        useNativeDriver: true
    }).start();
};

export const sleep = (milliseconds: number) =>
    new Promise(resolve => setTimeout(resolve, milliseconds));