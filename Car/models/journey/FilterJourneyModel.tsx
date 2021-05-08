import Stop from "../stop/Stop";
import FeeType from "./FeeType";

interface FilterJourneyModel{
    fromStop: Stop,
    toStop: Stop,
    departureTime: Date,
    hasLuggage: boolean,
    feeType: FeeType,
    passengersCount: number
}

export default FilterJourneyModel;
