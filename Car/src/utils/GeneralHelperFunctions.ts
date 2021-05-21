import { FIRST_ELEMENT_INDEX, THREE_DOTS_LENGTH } from "../constants/GeneralConstants";
import Stop from "../../models/stop/Stop";
import WayPoint from "../types/WayPoint";
import { ZERO_COORDINATE } from "../constants/StylesConstants";

export const trimTheStringIfTooLong = (str: string, maxLength: number) => {
    return str.length <= maxLength ?
        str :
        str.substr(FIRST_ELEMENT_INDEX, maxLength - THREE_DOTS_LENGTH) + "...";
};

export const mapStopToWayPoint = (stop?: Stop) => {
    const wayPoint: WayPoint = {
        coordinates: {
            latitude: stop?.address?.latitude ?? ZERO_COORDINATE,
            longitude: stop?.address?.longitude ?? ZERO_COORDINATE
        },
        text: stop?.address?.name ?? "",
        isConfirmed: true
    };

    return wayPoint;
};