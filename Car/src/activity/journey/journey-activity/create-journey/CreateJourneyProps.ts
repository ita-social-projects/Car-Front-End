import WayPoint from "../../../../types/WayPoint";
import Journey from "../../../../../models/journey/Journey";

interface CreateJourneyProps {
    route: {
        params: {
            wayPoint?: WayPoint,
            wayPointId?: string,
            journey?: Journey
        }
    },
    navigation?: {
        // eslint-disable-next-line unused-imports/no-unused-vars
        setOptions: (option: object) => void,
        // eslint-disable-next-line unused-imports/no-unused-vars
        addListener: (eventName: string, callback: () => void) => () => void
    },
    closeMoreOptionPopup: () => void
}

export default CreateJourneyProps;