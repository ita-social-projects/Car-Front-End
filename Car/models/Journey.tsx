import { Car } from "./Car";
import { Schedule } from "./Schedule";
import { Stop } from "./Stop";
import { User } from "./User";

export type Journey = null | {
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
    car: Car;
};
