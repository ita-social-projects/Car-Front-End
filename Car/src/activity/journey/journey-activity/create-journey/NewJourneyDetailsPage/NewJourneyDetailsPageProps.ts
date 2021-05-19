import WayPoint from "../../../../../types/WayPoint";
import { LatLng } from "react-native-maps";

interface NewJourneyDetailsPageProps {
    route: {
        params: {
            from: WayPoint,
            to: WayPoint,
            stops: WayPoint[],
            routePoints: LatLng[],
            routeDistance: number,
            duration: number
        }
    }
}

export default NewJourneyDetailsPageProps;