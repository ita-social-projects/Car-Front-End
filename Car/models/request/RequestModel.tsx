import FeeType from "../journey/FeeType";
import Point from "../journey/Point";

interface Request {
    id?: number,
    from: Point,
    to: Point,
    departureTime: Date,
    fee: FeeType,
    passengersCount: number,
    userId: number
}

export default Request;
