import { LatLng } from "react-native-maps";

interface CreateJourneyModel {
    departureTime: Date,
    countOfSeats: number,
    comments: string,
    isFree: boolean,
    organizerId: number,
    carId: number,
    isOnOwnCar: boolean,
    routePoints: LatLng[]
}

export default CreateJourneyModel;