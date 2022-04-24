import WeekDay from "../../src/components/schedule-bottom-popup/WeekDay";
import Invitation from "../invitation/Invitation";
import Stop from "../stop/Stop";
import JourneyPoint from "./JourneyPoint";

interface JourneyDto {
    id: number,
    routeDistance: number,
    departureTime: Date,
    duration: string,
    countOfSeats: number,
    comments: string,
    isFree: boolean,
    organizerId: number,
    carId: number | null,
    chatId: number | null,
    isOnOwnCar: boolean,
    journeyPoints: JourneyPoint[],
    stops: Stop[],
    weekDay: WeekDay | null,
    invitations: Invitation[],
}

export default JourneyDto;
