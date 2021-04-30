import { LatLng } from "react-native-maps";
import Stop from "../stop/Stop";

interface CreateJourneyModel {
    departureTime: Date,
    countOfSeats: number,
    comments: string,
    isFree: boolean,
    organizerId: number,
    carId: number,
    isOnOwnCar: boolean,
    routePoints: LatLng[],
    stops: Stop[]
}

export default CreateJourneyModel;