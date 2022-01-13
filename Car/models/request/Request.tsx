import FeeType from "../journey/FeeType";
import Point from "../journey/Point";
import User from "../user/User";

type Request = null | {
    id: number;
    from: Point;
    to: Point;
    departureTime: Date;
    fee: FeeType;
    passengersCount: number;
    userId: number;
    organizer: User;
};

export default Request;