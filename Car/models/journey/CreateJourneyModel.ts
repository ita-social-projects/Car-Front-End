import Stop from "../stop/Stop";
interface CreateJourneyModel {
    departureTime: Date,
    countOfSeats: number,
    comments: string,
    isFree: boolean,
    organizerId: number,
    carId: number,
    isOnOwnCar: boolean,
    journeyPoints: {
        index: number,
        latitude: number,
        longitude: number
    }[],
    stops: Stop[],
    durationInMinutes: number,
    routeDistance: number
}

export default CreateJourneyModel;