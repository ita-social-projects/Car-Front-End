import { MutableRefObject } from "react";
import WeekDay from "./WeekDay";

interface ScheduleBottomPopupProps{
    onCloseEnd: () => void,
    weekDay: MutableRefObject<WeekDay>,
    refForChild: MutableRefObject<any>,
    isOpened: MutableRefObject<any>,
}

export default ScheduleBottomPopupProps;