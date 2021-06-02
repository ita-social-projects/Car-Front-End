import {
    FIRST_ELEMENT_INDEX,
    NUMBER_OF_MINUTES_IN_HOUR,
    SECOND_ELEMENT_INDEX,
    TEN
} from "../constants/GeneralConstants";
import Stop from "../../models/stop/Stop";
import { ZERO_COORDINATE } from "../constants/StylesConstants";
import StopType from "../../models/stop/StopType";
import Journey from "../../models/journey/Journey";

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

export const minutesToTimeString = (totalMinutes: number) => {
    const minutes = Math.trunc(totalMinutes % NUMBER_OF_MINUTES_IN_HOUR);
    const hours = Math.trunc(totalMinutes / NUMBER_OF_MINUTES_IN_HOUR);

    return (hours < TEN ? "0" : "") + hours.toString() + ":" +
        (minutes < TEN ? "0" : "") + minutes.toString() + ":00";
};

export const timeStringToMinutes = (timeString: string) => {
    const parts = timeString.split(":");

    return Number(parts[FIRST_ELEMENT_INDEX]) * NUMBER_OF_MINUTES_IN_HOUR
        + Number(parts[SECOND_ELEMENT_INDEX]);
};