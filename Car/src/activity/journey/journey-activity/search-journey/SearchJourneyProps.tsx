import WayPoint from "../../../../types/WayPoint";

interface SearchJourneyProps {
    route: {
        params: {
            isRequest: boolean | null,
            isPreviousFilter: boolean | null,
            wayPoint: WayPoint,
            wayPointId: string
        }
    }
}

export default SearchJourneyProps;
