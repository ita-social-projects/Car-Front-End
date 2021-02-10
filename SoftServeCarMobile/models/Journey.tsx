import { Stop } from "./Stop";
import { User } from "./User";

export type Journey = null | {
    id: number;
    routeDistance: number;
    departureTime: Date;
    countOfSeats: number;
    comments: string;
    isFree: boolean;
    scheduleId: number;
    participants: User[];
    stops: Stop[];
    organizer: User;
};
