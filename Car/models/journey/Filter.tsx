import WayPoint from "../../src/types/WayPoint";
import FeeType from "./FeeType";

interface Filter{
    departureTime: Date,
    from: WayPoint,
    to: WayPoint,
    fee: FeeType,
    quantity: number,
}

export default Filter;
