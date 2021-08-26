import { AxiosResponse } from "axios";
import "react-native";
import APIService from "../../api-service/APIService";
import RequestService from "../../api-service/request-service/RequestService";
import FeeType from "../../models/journey/FeeType";
import Point from "../../models/journey/Point";
import Request from "../../models/request/RequestModel";

describe("Request Service test", () => {
    let request : Request = {
        from: {} as Point,
        to: {} as Point,
        departureTime: new Date(),
        fee: FeeType.All,
        passengersCount: 1,
        userId: 0
    };

    test("should get request", async () => {
        jest.spyOn(APIService, "get").mockImplementation(
            () =>
                new Promise<AxiosResponse<Request>>(function (resolve) {
                    resolve({
                        data: request,
                        statusText: "Ok",
                        status: 200,
                        config: {},
                        headers: {
                            "Context-Type": "application/json"
                        }
                    });
                })
        );

        RequestService.getRequest(0).then(
            (res) => {
                expect(res.status).toBe(200);
                expect(JSON.stringify(res.data)).toBe(JSON.stringify(request));
            }
        );
    });

    test("should return added request", async () => {
        jest.spyOn(APIService, "post").mockImplementation(
            () =>
                new Promise<AxiosResponse<Request>>(function (resolve) {
                    resolve({
                        data: request,
                        statusText: "Ok",
                        status: 200,
                        config: {},
                        headers: {
                            "Context-Type": "application/json"
                        }
                    });
                })
        );

        RequestService.addRequest(request).then(
            (res) => {
                expect(res.status).toBe(200);
                expect(JSON.stringify(res.data)).toBe(JSON.stringify(request));
            }
        );
    });

});
