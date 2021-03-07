import CarViewModel from "./car/CarViewModel";
import Schedule from "./Schedule";
import Stop from "./stop/Stop";
import User from "./user/User";

type Journey = null | {
    id: number;
    routeDistance: number;
    departureTime: Date;
    countOfSeats: number;
    comments: string;
    isFree: boolean;
    schedule: Schedule;
    participants: User[];
    stops: Stop[];
    organizer: User;
    car: CarViewModel;
};

export default Journey;
