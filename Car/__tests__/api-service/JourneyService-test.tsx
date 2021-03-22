import { AxiosResponse } from "axios";
import "react-native";
import APIService from "../../api-service/APIService";
import JourneyService from "../../api-service/journey-service/JourneyService";
import Journey from "../../models/Journey";
import Stop from "../../models/stop/Stop";

describe("Journey Service test", () => {
    let journeyData: Journey[] = [{
        id: 1,
        car: null,
        comments: "",
        countOfSeats: 2,
        departureTime: new Date(),
        isFree: true,
        organizer: null,
        participants: [],
        routeDistance: 2,
        schedule: null,
        stops: []
    }];

    let stopsData: Stop[][] = [[{
        address: null,
        id: 1,
        journeyId: 1,
        type: 0,
        user: null
    },
    {
        address: null,
        id: 2,
        journeyId: 1,
        type: 1,
        user: null
    },
    {
        address: null,
        id: 3,
        journeyId: 1,
        type: 2,
        user: null
    }],
    [{
        address: null,
        id: 4,
        journeyId: 2,
        type: 0,
        user: null
    },
    {
        address: null,
        id: 5,
        journeyId: 2,
        type: 1,
        user: null
    },
    {
        address: null,
        id: 6,
        journeyId: 2,
        type: 2,
        user: null
    }]];

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
        JourneyService.getPastJourneys(1).then((res) => {
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
        JourneyService.getUpcomingJourneys(1).then((res) => {
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
        JourneyService.getScheduledJourneys(1).then((res) => {
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
        JourneyService.getRecentJourneyStops(1).then((res) => {
            expect(res.status).toBe(200);
            expect(JSON.stringify(res.data)).toBe(JSON.stringify(stopsData));
        });
    });
});