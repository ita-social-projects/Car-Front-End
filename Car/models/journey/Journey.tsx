import CarViewModel from "../car/CarViewModel";
import Schedule from "../Schedule";
import Stop from "../stop/Stop";
import User from "../user/User";
import JourneyPoint from "./JourneyPoint";

type Journey = null | {
    id: number;
    routeDistance: number;
    duration: number;
    departureTime: Date;
    countOfSeats: number;
    comments: string;
    isFree: boolean;
    isOnOwnCar: boolean;
    schedule: Schedule;
    journeyPoints: JourneyPoint[];
    participants: User[];
    stops: Stop[];
    organizer: User;
    car: CarViewModel;
};

export default Journey;
