import Stop from "../stop/Stop";
import JourneyPoint from "./JourneyPoint";

interface JourneyDto {
    id: number,
    routeDistance: number,
    departureTime: Date,
    durationInMinutes: number,
    countOfSeats: number,
    comments: string,
    isFree: boolean,
    organizerId: number,
    carId: number,
    isOnOwnCar: boolean,
    journeyPoints: JourneyPoint[],
    stops: Stop[],
}

export default JourneyDto;