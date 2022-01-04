import WeekDay from "../../src/components/schedule-bottom-popup/WeekDay";
import JourneyDto from "./JourneyDto";

interface ScheduleDto {
    id: number,
    days: WeekDay,
    journey: JourneyDto
}

export default ScheduleDto;