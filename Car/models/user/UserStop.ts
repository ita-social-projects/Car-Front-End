import StopType from "../stop/StopType";
import { ZERO } from "../../src/constants/GeneralConstants";

export class UserStop {
    userId: number;
    stopId: number;
    stopType?: StopType;

    constructor (userStop: Partial<UserStop>) {
        this.userId = userStop.userId || ZERO;
        this.stopId = userStop.stopId || ZERO;
        this.stopType = userStop.stopType;
    }
}
