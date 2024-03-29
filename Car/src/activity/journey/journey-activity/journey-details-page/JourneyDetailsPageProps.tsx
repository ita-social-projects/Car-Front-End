import WayPoint from "../../../../types/WayPoint";
import { LatLng } from "react-native-maps";
import Journey from "../../../../../models/journey/Journey";
import WeekDay from "../../../../components/schedule-bottom-popup/WeekDay";
import { MutableRefObject } from "react";

interface JourneyDetailsPageProps {
    route: {
        params: {
            from: WayPoint,
            to: WayPoint,
            stops: WayPoint[],
            routePoints: LatLng[],
            routeDistance: number,
            duration: string,
            journey?: Journey,
            weekDay: WeekDay,
            newInvitations?: {email:string; isCorrect: boolean}[]
        }
    },
    navigation?: {
        push: (name: string, params: object) => void
    },
    weekDay?: MutableRefObject<WeekDay>;
}

export default JourneyDetailsPageProps;