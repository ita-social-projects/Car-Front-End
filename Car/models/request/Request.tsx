import FeeType from "../journey/FeeType";
import Point from "../journey/Point";
import User from "../user/User";
import Stop from "../stop/Stop";

type Request = null | {
    id: number;
    from: Point;
    to: Point;
    departureTime: Date;
    stops: Stop[];
    fee: FeeType;
    passengersCount: number;
    userId: number;
    organizer: User;
};

export default Request;