import WayPoint from "../../../../types/WayPoint";
import Journey from "../../../../../models/journey/Journey";
import WeekDay from "../../../../components/schedule-bottom-popup/WeekDay";
import { MutableRefObject } from "react";

interface CreateJourneyProps {
    route: {
        params: {
            wayPoint?: WayPoint,
            wayPointId?: string,
            journey?: Journey,
        }
    },
    navigation?: {
        //
        setOptions: (option: object) => void,
        //
        addListener: (eventName: string, callback: () => void) => () => void
    },
    weekDay: MutableRefObject<WeekDay>,
    closeMoreOptionPopup: () => void
}

export default CreateJourneyProps;