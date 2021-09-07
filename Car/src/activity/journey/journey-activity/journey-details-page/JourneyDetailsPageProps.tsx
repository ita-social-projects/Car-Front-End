import WayPoint from "../../../../types/WayPoint";
import { LatLng } from "react-native-maps";
import Journey from "../../../../../models/journey/Journey";

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
            newInvitations?: {email:string; isCorrect: boolean}[]
        }
    },
    navigation?: {
        // eslint-disable-next-line unused-imports/no-unused-vars
        push: (name: string, params: object) => void
    }
}

export default JourneyDetailsPageProps;