import FeeType from "./FeeType";
import RideType from "./RideType";

interface PublishRideFilter{
    departureTime: Date,
    departureTimeIsConfirmed: boolean,
    rideType: RideType,
    selectedCar: { id: number | null, name: string },
    fee: FeeType,
    passengers: number,
    comments: string
}
export default PublishRideFilter;