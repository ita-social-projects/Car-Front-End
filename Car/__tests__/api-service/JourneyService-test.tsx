import { AxiosResponse } from "axios";
import "react-native";
import APIService from "../../api-service/APIService";
import JourneyService from "../../api-service/journey-service/JourneyService";
import FeeType from "../../models/journey/FeeType";
import FilterJourney from "../../models/journey/FilterJourneyModel";
import Journey from "../../models/journey/Journey";
import JourneyDto from "../../models/journey/JourneyDto";
import Stop from "../../models/stop/Stop";

describe("Journey Service test", () => {
    let journeyData: Journey[] = [{
        id: 1,
        duration: "",
        car: null,
        comments: "",
        countOfSeats: 2,
        departureTime: new Date(),
        isFree: true,
        isOnOwnCar: true,
        organizer: null,
        participants: [],
        routeDistance: 2,
        schedule: null,
        stops: [],
        journeyPoints: []
    }];

    let stopsData: Stop[][] = [[{
        address: null,
        id: 1,
        journeyId: 1,
        type: 0,
        userId: 0,
        index: 0,
        isCancelled: false
    },
    {
        address: null,
        id: 2,
        journeyId: 1,
        type: 1,
        userId: 0,
        index: 1,
        isCancelled: false
    },
    {
        address: null,
        id: 3,
        journeyId: 1,
        type: 2,
        userId: 0,
        index: 2,
        isCancelled: false
    }],
    [{
        address: null,
        id: 4,
        journeyId: 2,
        type: 0,
        userId: 0,
        index: 3,
        isCancelled: false
    },
    {
        address: null,
        id: 5,
        journeyId: 2,
        type: 1,
        userId: 0,
        index: 4,
        isCancelled: false
    },
    {
        address: null,
        id: 6,
        journeyId: 2,
        type: 2,
        userId: 0,
        index: 5,
        isCancelled: false
    }]];

    let journeyDTO : JourneyDto = {
        id: 0,
        routeDistance: 1,
        departureTime: new Date(),
        duration: "",
        countOfSeats: 1,
        comments: "",
        isFree: true,
        organizerId: 0,
        isOnOwnCar: true,
        carId: 0,
        journeyPoints: [],
        stops: []
    };

    let filter : FilterJourney = {
        departureTime: new Date(),
        fee: FeeType.All,
        applicantId: 0,
        fromLatitude: 0,
        toLatitude: 0,
        fromLongitude: 0,
        toLongitude: 0,
        hasLuggage: true,
        passengersCount: 1
    };

    test("should return journey", async () => {
        jest.spyOn(APIService, "get").mockImplementation(
            () =>
                new Promise<AxiosResponse<Journey>>(function (resolve) {
                    resolve({
                        data: journeyData[0],
                        statusText: "Ok",
                        status: 200,
                        config: {},
                        headers: {
                            "Context-Type": "application/json"
                        }
                    });
                })
        );
        JourneyService.getJourney(1).then((res) => {
            expect(res.status).toBe(200);
            expect(JSON.stringify(res.data)).toBe(JSON.stringify(journeyData[0]));
        });
    });

    test("should return past journeys", async () => {
        jest.spyOn(APIService, "get").mockImplementation(
            () =>
                new Promise<AxiosResponse<Journey[]>>(function (resolve) {
                    resolve({
                        data: journeyData,
                        statusText: "Ok",
                        status: 200,
                        config: {},
                        headers: {
                            "Context-Type": "application/json"
                        }
                    });
                })
        );
        JourneyService.getPastJourneys().then((res) => {
            expect(res.status).toBe(200);
            expect(JSON.stringify(res.data)).toBe(JSON.stringify(journeyData));
        });
    });

    test("should return upcoming journeys", async () => {
        jest.spyOn(APIService, "get").mockImplementation(
            () =>
                new Promise<AxiosResponse<Journey[]>>(function (resolve) {
                    resolve({
                        data: journeyData,
                        statusText: "Ok",
                        status: 200,
                        config: {},
                        headers: {
                            "Context-Type": "application/json"
                        }
                    });
                })
        );
        JourneyService.getUpcomingJourneys().then((res) => {
            expect(res.status).toBe(200);
            expect(JSON.stringify(res.data)).toBe(JSON.stringify(journeyData));
        });
    });

    test("should return scheduled journeys", async () => {
        jest.spyOn(APIService, "get").mockImplementation(
            () =>
                new Promise<AxiosResponse<Journey[]>>(function (resolve) {
                    resolve({
                        data: journeyData,
                        statusText: "Ok",
                        status: 200,
                        config: {},
                        headers: {
                            "Context-Type": "application/json"
                        }
                    });
                })
        );
        JourneyService.getScheduledJourneys().then((res) => {
            expect(res.status).toBe(200);
            expect(JSON.stringify(res.data)).toBe(JSON.stringify(journeyData));
        });
    });

    test("should return recent stops", async () => {
        jest.spyOn(APIService, "get").mockImplementation(
            () =>
                new Promise<AxiosResponse<Stop[][]>>(function (resolve) {
                    resolve({
                        data: stopsData,
                        statusText: "Ok",
                        status: 200,
                        config: {},
                        headers: {
                            "Context-Type": "application/json"
                        }
                    });
                })
        );
        JourneyService.getRecentJourneyStops().then((res) => {
            expect(res.status).toBe(200);
            expect(JSON.stringify(res.data)).toBe(JSON.stringify(stopsData));
        });
    });
    test("should return boolean that indicating whether the user has been successfully added", async () => {
        jest.spyOn(APIService, "put").mockImplementation(
            () =>
                new Promise<AxiosResponse<boolean>>(function (resolve) {
                    resolve({
                        data: true,
                        statusText: "Ok",
                        status: 200,
                        config: {},
                        headers: {
                            "Context-Type":"application/json"
                        }
                    });
                })
        );
        JourneyService.addUser(1,1, stopsData[0]).then((res) => {
            expect(res.status).toBe(200);
            expect(JSON.stringify(res.data)).toBe(JSON.stringify(true));
        });
    });

    test("should return added journey", async () => {
        jest.spyOn(APIService, "post").mockImplementation(
            () =>
                new Promise<AxiosResponse<Journey>>(function (resolve) {
                    resolve({
                        data: journeyData[0],
                        statusText: "Ok",
                        status: 200,
                        config: {},
                        headers: {
                            "Context-Type": "application/json"
                        }
                    });
                })
        );
        JourneyService.add(journeyDTO).then((res) => {
            expect(res.status).toBe(200);
            expect(JSON.stringify(res.data)).toBe(JSON.stringify(journeyData[0]));
        });
    });

    test("should return filtered journeys", async () => {
        jest.spyOn(APIService, "get").mockImplementation(
            () =>
                new Promise<AxiosResponse<Journey>>(function (resolve) {
                    resolve({
                        data: journeyData[0],
                        statusText: "Ok",
                        status: 200,
                        config: {},
                        headers: {
                            "Context-Type": "application/json"
                        }
                    });
                })
        );
        JourneyService.getFilteredJourneys(filter).then((res) => {
            expect(res.status).toBe(200);
            expect(JSON.stringify(res.data)).toBe(JSON.stringify(journeyData[0]));
        });
    });

    test("should delete journey", async () => {
        jest.spyOn(APIService, "delete").mockImplementation(
            () =>
                new Promise<AxiosResponse>(function (resolve) {
                    resolve({
                        data: {},
                        statusText: "Ok",
                        status: 200,
                        config: {},
                        headers: {
                            "Context-Type": "application/json"
                        }
                    });
                })
        );
        JourneyService.delete(0).then((res) => {
            expect(res.status).toBe(200);
        });
    });

    test("should cancel journey", async () => {
        jest.spyOn(APIService, "put").mockImplementation(
            () =>
                new Promise<AxiosResponse>(function (resolve) {
                    resolve({
                        data: {},
                        statusText: "Ok",
                        status: 200,
                        config: {},
                        headers: {
                            "Context-Type": "application/json"
                        }
                    });
                })
        );
        JourneyService.cancel(0).then((res) => {
            expect(res.status).toBe(200);
        });
    });

    test("should return if journey is cancelled", async () => {
        jest.spyOn(APIService, "put").mockImplementation(
            () =>
                new Promise<AxiosResponse<boolean>>(function (resolve) {
                    resolve({
                        data: false,
                        statusText: "Ok",
                        status: 200,
                        config: {},
                        headers: {
                            "Context-Type": "application/json"
                        }
                    });
                })
        );
        JourneyService.isJourneyCanceled(0).then((res) => {
            expect(res.status).toBe(200);
            expect(JSON.stringify(res.data)).toBe(false);
        });
    });

    test("should return updated journey(route)", async () => {
        jest.spyOn(APIService, "put").mockImplementation(
            () =>
                new Promise<AxiosResponse<Journey>>(function (resolve) {
                    resolve({
                        data: journeyData[0],
                        statusText: "Ok",
                        status: 200,
                        config: {},
                        headers: {
                            "Context-Type": "application/json"
                        }
                    });
                })
        );
        JourneyService.updateRoute(journeyDTO).then((res) => {
            expect(res.status).toBe(200);
            expect(JSON.stringify(res.data)).toBe(JSON.stringify(journeyData[0]));
        });
    });

    test("should return updaited journey(details)", async () => {
        jest.spyOn(APIService, "put").mockImplementation(
            () =>
                new Promise<AxiosResponse<Journey>>(function (resolve) {
                    resolve({
                        data: journeyData[0],
                        statusText: "Ok",
                        status: 200,
                        config: {},
                        headers: {
                            "Context-Type": "application/json"
                        }
                    });
                })
        );
        JourneyService.updateDetails(journeyDTO).then((res) => {
            expect(res.status).toBe(200);
            expect(JSON.stringify(res.data)).toBe(JSON.stringify(journeyData[0]));
        });
    });

    test("should delete user from journey", async () => {
        jest.spyOn(APIService, "delete").mockImplementation(
            () =>
                new Promise<AxiosResponse>(function (resolve) {
                    resolve({
                        data: {},
                        statusText: "Ok",
                        status: 200,
                        config: {},
                        headers: {
                            "Context-Type": "application/json"
                        }
                    });
                })
        );
        JourneyService.deleteUser(0,0).then((res) => {
            expect(res.status).toBe(200);
        });
    });

});
