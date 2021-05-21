import WayPoint from "../../../../../types/WayPoint";
import { LatLng } from "react-native-maps";
import Journey from "../../../../../../models/journey/Journey";

interface JourneyDetailsPageProps {
    route: {
        params: {
            from: WayPoint,
            to: WayPoint,
            stops: WayPoint[],
            routePoints: LatLng[],
            routeDistance: number,
            duration: number,
            journey?: Journey
        }
    }
}

export default JourneyDetailsPageProps;