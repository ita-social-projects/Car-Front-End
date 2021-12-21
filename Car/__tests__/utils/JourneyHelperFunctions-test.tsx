import Journey from "../../models/journey/Journey";
import Stop from "../../models/stop/Stop";
import StopType from "../../models/stop/StopType";
import { getStopByType, getStopCoordinates } from "../../src/utils/JourneyHelperFunctions";

const createJourney = (stops: Stop[]) => {
    return {
        id: 5,
        routeDistance: 20,
        duration: "string",
        departureTime: new Date(),
        countOfSeats: 2,
        comments: "string",
        isFree: true,
        isOnOwnCar: true,
        schedule: null,
        journeyPoints: [],
        participants: [],
        stops,
        invitations: [],
        organizer: null,
        car: null,
        chatId: 10
    };
};

const createStop = (type: StopType) =>{
    return {
        id: 1,
        type,
        index: 4,
        address: {
            id: 4,
            name: "string",
            latitude: 45.555,
            longitude: 46.565
        },
        userId: 1,
        journeyId: 5,
        isCancelled: false
    };
};

test("journey with empty stops, getStopsByType(), return undefined", async () => {
    const journey: Journey = createJourney([]);
    const actualStop = getStopByType(journey, StopType.Start);

    expect(actualStop).toBeUndefined();
});

test("journey with start stop, getStopByType(journey, StopType.Start), return true", async () => {
    const stop = createStop(StopType.Start);
    const journey: Journey = createJourney([stop]);

    const actualStop = getStopByType(journey, StopType.Start);

    expect(actualStop).toBe(stop);
});

test("journey with finish stop, getStopByType(journey, StopType.Finish), return true", async () => {
    const stop = createStop(StopType.Finish);
    const journey: Journey = createJourney([stop]);

    const actualStop = getStopByType(journey, StopType.Finish);

    expect(actualStop).toBe(stop);
});

test("stop with not null longitude and latitude, getStopCoordinates(stop), return true", async () => {
    const stop = createStop(StopType.Finish);

    const actualStop = getStopCoordinates(stop);

    expect(actualStop).toHaveProperty("latitude", 45.555);
    expect(actualStop).toHaveProperty("longitude", 46.565);
});
