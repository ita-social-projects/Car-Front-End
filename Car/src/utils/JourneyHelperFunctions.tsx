import {
    FIRST_ELEMENT_INDEX,
    NUMBER_OF_MINUTES_IN_HOUR,
    SECOND_ELEMENT_INDEX,
    TEN, ZERO_ID
} from "../constants/GeneralConstants";
import Stop from "../../models/stop/Stop";
import { ZERO_COORDINATE } from "../constants/StylesConstants";
import StopType from "../../models/stop/StopType";
import Journey from "../../models/journey/Journey";
import WayPoint from "../types/WayPoint";
import { Marker } from "react-native-maps";
import React from "react";
import WeekDay from "../components/schedule-bottom-popup/WeekDay";
import moment from "moment";
import { capitalize } from "./GeneralHelperFunctions";

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

export const createStopArrayFromWayPoint =
    (from: WayPoint, to: WayPoint, stops: WayPoint[], userId: number, journeyId: number = ZERO_ID) => {
        return [{ ...from, stopType: StopType.Start },
            ...stops.filter(stop => stop.isConfirmed).map(stop => ({ ...stop, stopType: StopType.Intermediate })),
            { ...to, stopType: StopType.Finish }]
            .map((stop, index) => {
                return {
                    address: {
                        id: 0,
                        latitude: stop.coordinates.latitude,
                        longitude: stop.coordinates.longitude,
                        name: stop.text
                    },
                    index: index,
                    type: stop.stopType,
                    id: 0,
                    journeyId: journeyId,
                    userId: userId,
                    isCancelled: false,
                };
            });
    };

export const getStopCoordinates = (stop?: Stop) => {
    return {
        longitude: stop?.address?.longitude ?? ZERO_COORDINATE,
        latitude: stop?.address?.latitude ?? ZERO_COORDINATE
    };
};

export const mapStopToMarker = (stop: Stop) => (
    <Marker
        title={stop?.address?.name}
        coordinate={getStopCoordinates(stop)}
        image={require("../../assets/images/maps-markers/Stop.png")}
    />
);

export const weekDayToString = (weekDay: WeekDay): string => {
    let result: string[] = [];

    if (weekDay & WeekDay.Monday)
        result.push("Mon");
    if (weekDay & WeekDay.Tuesday)
        result.push("Tue");
    if (weekDay & WeekDay.Wednesday)
        result.push("Wed");
    if (weekDay & WeekDay.Thursday)
        result.push("Thu");
    if (weekDay & WeekDay.Friday)
        result.push("Fri");
    if (weekDay & WeekDay.Saturday)
        result.push("Sat");
    if (weekDay & WeekDay.Sunday)
        result.push("Sun");

    return result.join(", ");
};

export const getTimeToShow = (journey?: Journey): string =>{
    return journey?.schedule ?
        // eslint-disable-next-line
        `Every ${weekDayToString(journey.schedule.days)} at ${moment(new Date(journey?.departureTime ?? "")).format("HH:mm")}` :
        capitalize(moment(new Date(journey?.departureTime ?? "")).format("dddd[, ]MM[.]DD[, ]h:mm"));
};