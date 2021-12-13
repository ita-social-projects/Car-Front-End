import { MutableRefObject } from "react";
import WeekDay from "../../src/components/schedule-bottom-popup/WeekDay";
import FeeType from "./FeeType";
import RideType from "./RideType";

interface PublishRideFilter{
    departureTime: Date,
    departureTimeIsConfirmed: boolean,
    rideType: RideType,
    selectedCar: { id: number | null, name: string },
    fee: FeeType,
    passengers: number,
    comments: string,
    newInvitations?: {email:string; isCorrect: boolean}[],
    schedule?: MutableRefObject<WeekDay> | null
}
export default PublishRideFilter;