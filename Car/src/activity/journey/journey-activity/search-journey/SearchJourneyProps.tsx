import WayPoint from "../../../../types/WayPoint";

interface SearchJourneyProps {
    route: {
        params: {
            wayPoint: WayPoint,
            wayPointId: string
        }
    }
}

export default SearchJourneyProps;
