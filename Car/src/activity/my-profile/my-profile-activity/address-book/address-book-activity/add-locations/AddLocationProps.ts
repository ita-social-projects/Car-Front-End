import WayPoint from "../../../../../../types/WayPoint";

interface AddLocationProps {
    route: {
        params: {
            wayPoint: WayPoint,
            wayPointId: string
        }
    }
}

export default AddLocationProps;
