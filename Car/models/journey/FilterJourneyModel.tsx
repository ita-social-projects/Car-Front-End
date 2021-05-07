import Stop from "../stop/Stop";
import FeeType from "./FeeType";

interface FilterJourneyModel{
    fromStop: Stop,
    toStop: Stop,
    departureTime: Date,
    hasLuggage: boolean,
    feeType: FeeType
}

export default FilterJourneyModel;
