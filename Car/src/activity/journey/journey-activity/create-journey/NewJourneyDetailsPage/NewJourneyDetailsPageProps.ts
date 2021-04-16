import WayPoint from "../../../../../types/WayPoint";

interface NewJourneyDetailsPageProps {
    route: {
        params: {
            from: WayPoint,
            to: WayPoint,
            stops: WayPoint[]
        }
    }
}

export default NewJourneyDetailsPageProps;