import {
    FIRST_ELEMENT_INDEX,
    LAST_INDEX_CORRECTION,
    LOCATION_EPSILON_DIAMETER,
    NUMBER_OF_MINUTES_IN_HOUR,
    SECOND_ELEMENT_INDEX,
    TEN,
    ZERO,
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
import { View } from "react-native";
import Request from "../../models/request/Request";
import { UserStop } from "../../models/user/UserStop";
import { StopModel } from "../../models/stop/StopModel";
import { AddressModel } from "../../models/address/AddressModel";
import { getAddressByCoordinatesAsync } from "./LocationHelperFunctions";

export const mapStopToWayPoint = (stop?: Stop, organizerId?: number): WayPoint => {
    return {
        coordinates: {
            latitude: stop?.address?.latitude ?? ZERO_COORDINATE,
            longitude: stop?.address?.longitude ?? ZERO_COORDINATE
        },
        text: stop?.address?.name ?? "",
        isConfirmed: true,
        stopId: stop?.id || ZERO,
        changeable: !stop?.userStops?.some(
            (us: UserStop) =>
                (us.stopType === StopType.Start || us.stopType === StopType.Finish) && us.userId !== organizerId
        ) ?? true
    };
};

export const getJourneyStartStop = (journey: Journey): Stop | undefined => {
    return journey?.stops?.find((x: Stop) => x!.index === ZERO);
};

export const getJourneyFinishStop = (journey: Journey): Stop | undefined => {
    return journey?.stops?.find((x: Stop) => x!.index === journey!.stops.length - LAST_INDEX_CORRECTION);
};

export const getIntermediateJourneyStops = (journey: Journey): Array<Stop> | undefined => {
    return journey?.stops?.filter((x: Stop) =>
        ZERO < x!.index && x!.index < journey!.stops.length - LAST_INDEX_CORRECTION
    );
};

export const getUserStartStop = (stops: Stop[], userId: number): Stop | undefined => {
    return stops.find((stop: Stop) =>
        stop?.userStops?.find((us: UserStop) => us.userId == userId)?.stopType === StopType.Start);
};

export const getUserFinishStop = (stops: Stop[], userId: number): Stop | undefined => {
    return stops.find((stop: Stop) =>
        stop?.userStops?.find((us: UserStop) => us.userId == userId)?.stopType === StopType.Finish);
};

export const getUserIntermediateStops = (stops: Stop[], userId: number): Stop[] => {
    return stops.filter((stop: Stop) =>
        getUserStartStop(stops, userId)!.index < stop!.index &&
        stop!.index < getUserFinishStop(stops, userId)!.index);
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

// eslint-disable-next-line max-len
export const mapWayPointsIntoStopsForUpdatedJourney = (journey: Journey, from: WayPoint, to: WayPoint, wayPoints: WayPoint[]) : Stop[] => {
    const updatedStops = new Array<Stop>();

    [from, ...wayPoints, to].forEach((wp: WayPoint, index: number) => {
        const stop = journey!.stops.find((stop: Stop) => stop!.id === wp.stopId);

        updatedStops.push({
            id: 0,
            index,
            journeyId: journey!.id,
            userStops: stop ?
                stop!.userStops?.map((us: UserStop): UserStop => ({ ...us, stopId: ZERO })) :
                [new UserStop({ userId: journey!.organizer!.id })],
            isCancelled: false,
            address: {
                id: 0,
                name: wp.text,
                latitude: wp.coordinates.latitude,
                longitude: wp.coordinates.longitude
            }
        });
    });

    return updatedStops;
};

export const setLocationName = (stops: Stop[]) : void => {
    stops!.forEach((stop) => {
        if(!stop?.address?.name) {
            getAddressByCoordinatesAsync(
                {
                    latitude: stop?.address?.latitude!,
                    longitude: stop?.address?.longitude!
                })
                .then((res: string) => {
                    stop!.address!.name = res;
                    // make a request to add an address
                });
        }
    });
};

export const getApplicantStops = (stops: Stop[], applicantId: number): Array<StopModel> => {
    return stops.filter((stop: Stop) =>
        stop!.userStops!.some((us: UserStop) => us.userId === applicantId)
    ).map((stop: Stop) =>
        new StopModel(
            {
                address: new AddressModel({
                    name: stop!.address!.name,
                    latitude: stop!.address!.latitude,
                    longitude: stop!.address!.longitude
                }),
                stopType: stop!.userStops!.find((us: UserStop) => us.userId === applicantId)!.stopType
            })
    );
};

export const mapWayPointsIntoStopsForNewJourney =
    (from: WayPoint, to: WayPoint, stops: WayPoint[], organizerId: number) => {
        return [{ ...from, userStops: [new UserStop({ userId: organizerId, stopType: StopType.Start })] },
            ...stops.filter(stop => stop.isConfirmed).map(stop => ({
                ...stop,
                userStops: [new UserStop({ userId: organizerId })]
            })),
            { ...to, userStops: [new UserStop({ userId: organizerId, stopType: StopType.Finish })] }]
            .map((stop, index) => {
                return {
                    address: {
                        id: ZERO,
                        latitude: stop.coordinates.latitude,
                        longitude: stop.coordinates.longitude,
                        name: stop.text
                    },
                    index: index,
                    id: ZERO,
                    journeyId: ZERO,
                    userStops: stop.userStops,
                    isCancelled: false,
                };
            });
    };

export const getHighlightedStops = (stops: Stop[], userId: number): Array<number> => {
    return [
        getUserStartStop(stops, userId)!.index,
        ...getUserIntermediateStops(stops, userId).map(stop => stop!.index),
        getUserFinishStop(stops, userId)!.index
    ];
};

export const getStopCoordinates = (stop?: Stop) => {
    return {
        longitude: stop?.address?.longitude ?? ZERO_COORDINATE,
        latitude: stop?.address?.latitude ?? ZERO_COORDINATE
    };
};

export const mapStopToMarker = (stop: Stop, index) => (
    <View key={index}>
        <Marker
            title={stop?.address?.name}
            coordinate={getStopCoordinates(stop)}
            image={require("../../assets/images/maps-markers/Stop.png")}
        />
    </View>

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

export const getTimeToShow = (journey?: Journey): string => {
    return journey?.schedule ?
        // eslint-disable-next-line
        `Every ${weekDayToString(journey.schedule.days)} at ${moment(new Date(journey?.departureTime ?? "")).format("HH:mm")}` :
        capitalize(moment(new Date(journey?.departureTime ?? "")).format("dddd[, ]MM[.]DD[, ]HH:mm"));
};

export const getRequestTimeToShow = (request?: Request): string => {
    return request?.departureTime ?
        // eslint-disable-next-line
        capitalize(moment(new Date(request?.departureTime ?? "")).format("dddd[, ]MM[.]DD[, ]HH:mm")) : "Invalid Time"

};

export const areStopsLocationEqual = (stopA: Stop, stopB: Stop): boolean => {
    return Math.abs(stopA!.address!.longitude - stopB!.address!.longitude) < LOCATION_EPSILON_DIAMETER &&
        Math.abs(stopA!.address!.latitude - stopB!.address!.latitude) < LOCATION_EPSILON_DIAMETER;
};
