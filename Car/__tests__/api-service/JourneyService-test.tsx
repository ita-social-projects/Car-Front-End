import { AxiosResponse } from "axios";
import "react-native";
import APIService from "../../api-service/APIService";
import JourneyService from "../../api-service/journey-service/JourneyService";
import Journey from "../../models/Journey";

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

    test("should return journey", () => {
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

    test("should return past journeys", () => {
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

    test("should return upcoming journeys", () => {
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

    test("should return scheduled journeys", () => {
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
});
