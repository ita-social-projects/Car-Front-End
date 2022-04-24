import CarViewModel from "../car/CarViewModel";
import Invitation from "../invitation/Invitation";
import Schedule from "../Schedule";
import Stop from "../stop/Stop";
import User from "../user/User";
import JourneyPoint from "./JourneyPoint";
import Notification from "../notification/Notification";
import JourneyUserDto from "../journey-user/JourneyUserDto";

type Journey = null | {
    id: number;
    routeDistance: number;
    duration: string;
    departureTime: Date;
    countOfSeats: number;
    comments: string;
    isFree: boolean;
    isOnOwnCar: boolean;
    parentId?: number;
    isMarkedAsFinished: boolean;
    schedule: Schedule;
    journeyPoints: JourneyPoint[];
    participants: User[];
    stops: Stop[];
    invitations: Invitation[];
    organizer: User;
    journeyUsers: JourneyUserDto[];
    car: CarViewModel;
    chatId: number;
    notifications: Notification[];
};

export default Journey;
