import WayPoint from "../../../../../../types/WayPoint";

interface SetPlaceProps {
    route: {
        params: {
            wayPoint: WayPoint,
            wayPointId: string
        }
    }
}

export default SetPlaceProps;
