import { FIRST_ELEMENT_INDEX, THREE_DOTS_LENGTH } from "../constants/GeneralConstants";
import Stop from "../../models/stop/Stop";
import { ZERO_COORDINATE } from "../constants/StylesConstants";
import StopType from "../../models/stop/StopType";
import Journey from "../../models/journey/Journey";

export const trimTheStringIfTooLong = (str: string, maxLength: number) => {
    return str.length <= maxLength ?
        str :
        str.substr(FIRST_ELEMENT_INDEX, maxLength - THREE_DOTS_LENGTH) + "...";
};

export const mapStopToWayPoint = (stop?: Stop) => {
    return {
        coordinates: {
            latitude: stop?.address?.latitude ?? ZERO_COORDINATE,
            longitude: stop?.address?.longitude ?? ZERO_COORDINATE
        },
        text: stop?.address?.name ?? "",
        isConfirmed: true
    };
};

export const getStopByType = (journey: Journey, stopType: (StopType.Start | StopType.Finish)) => {
    return journey?.stops.filter(stop => stop?.type === stopType)[FIRST_ELEMENT_INDEX];
};

export const getJourneyStops = (journey: Journey) => {
    return journey?.stops.filter(stop => stop?.type === StopType.Intermediate);
};