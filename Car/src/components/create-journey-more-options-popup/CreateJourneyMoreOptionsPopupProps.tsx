import { MutableRefObject } from "react";
import WeekDay from "../schedule-bottom-popup/WeekDay";

interface CreateJourneyMoreOptionsPopupProps{
    createRideMoreOptionsRef: any;
    closeHandle: (() => void) | undefined;
    pressHandle: any;
    scheduleMoreOptionsRef: any;
    isScheduleOpened: any;
    navigation: any;
    weekDayRef: MutableRefObject<WeekDay>;
    closeMoreOptionPopup: any;
    showAddStop: boolean;
}

export default CreateJourneyMoreOptionsPopupProps;