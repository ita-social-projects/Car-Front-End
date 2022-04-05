import WayPoint from "../../../../../types/WayPoint";
import Request from "../../../../../../models/request/Request";

interface EditJourneyRequestProps {
    route: {
        params: {
            isRequest: boolean | null,
            isPreviousFilter: boolean | null,
            wayPoint: WayPoint,
            wayPointId: string,
            request: Request
        }
    }
}

export default EditJourneyRequestProps;
