import Stop from "../stop/Stop";
import JourneyPoint from "./JourneyPoint";

interface CreateJourneyModel {
    departureTime: Date,
    countOfSeats: number,
    comments: string,
    isFree: boolean,
    organizerId: number,
    carId: number,
    isOnOwnCar: boolean,
    journeyPoints: JourneyPoint[],
    stops: Stop[],
    durationInMinutes: number,
    routeDistance: number
}

export default CreateJourneyModel;