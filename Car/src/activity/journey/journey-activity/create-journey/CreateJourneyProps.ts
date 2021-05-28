import WayPoint from "../../../../types/WayPoint";
import Journey from "../../../../../models/journey/Journey";

interface CreateJourneyProps {
    route: {
        params: {
            wayPoint?: WayPoint,
            wayPointId?: string,
            journey?: Journey
        }
    }
}

export default CreateJourneyProps;