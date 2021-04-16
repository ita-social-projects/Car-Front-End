import WayPoint from "../../../../types/WayPoint";

interface CreateJourneyProps {
    route: {
        params: {
            wayPoint: WayPoint,
            wayPointId: string
        }
    }
}

export default CreateJourneyProps;