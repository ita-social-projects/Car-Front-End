import { AxiosResponse } from "axios";
import "react-native";
import APIService from "../../api-service/APIService";
import JourneyUserService from "../../api-service/journey-user-service/JourneyUserService";
import JourneyUserDto from "../../models/journey-user/JourneyUserDto";

describe("JourneyUser Service test", () => {

    let journeyUserData: JourneyUserDto = {
        journeyId: 1,
        userId: 1,
        withBaggage: true
    };

    test("should return journeyUser", async () => {
        jest.spyOn(APIService, "get").mockImplementation(
            () =>
                new Promise<AxiosResponse<JourneyUserDto>>(function (resolve) {
                    resolve({
                        data: journeyUserData,
                        statusText: "Ok",
                        status: 200,
                        config: {},
                        headers: {
                            "Context-Type": "application/json"
                        }
                    });
                })
        );
        JourneyUserService.getJourneyUser(1,1).then((res) => {
            expect(res.status).toBe(200);
            expect(JSON.stringify(res.data)).toBe(JSON.stringify(journeyUserData));
        });
    });

    test("should return hasBaggage property value", async () => {
        jest.spyOn(APIService, "get").mockImplementation(
            () =>
                new Promise<AxiosResponse<boolean>>(function (resolve) {
                    resolve({
                        data: journeyUserData.withBaggage,
                        statusText: "Ok",
                        status: 200,
                        config: {},
                        headers: {
                            "Context-Type": "application/json"
                        }
                    });
                })
        );
        JourneyUserService.getHasBaggage(1,1).then((res) => {
            expect(res.status).toBe(200);
            expect(JSON.stringify(res.data)).toBe(JSON.stringify(journeyUserData.withBaggage));
        });
    });

    test("should update journeyUser and return updated object", async () => {
        jest.spyOn(APIService, "put").mockImplementation(
            () =>
                new Promise<AxiosResponse<JourneyUserDto>>(function (resolve) {
                    resolve({
                        data: journeyUserData,
                        statusText: "Ok",
                        status: 200,
                        config: {},
                        headers: {
                            "Context-Type": "application/json"
                        }
                    });
                })
        );
        JourneyUserService.update(journeyUserData).then((res) => {
            expect(res.status).toBe(200);
            expect(JSON.stringify(res.data)).toBe(JSON.stringify(journeyUserData));
        });
    });

    test("should update withBaggage property and return updated object", async () => {
        jest.spyOn(APIService, "put").mockImplementation(
            () =>
                new Promise<AxiosResponse<JourneyUserDto>>(function (resolve) {
                    resolve({
                        data: journeyUserData,
                        statusText: "Ok",
                        status: 200,
                        config: {},
                        headers: {
                            "Context-Type": "application/json"
                        }
                    });
                })
        );
        JourneyUserService.updateWithBaggage(1,1, true).then((res) => {
            expect(res.status).toBe(200);
            expect(JSON.stringify(res.data)).toBe(JSON.stringify(journeyUserData));
        });
    });
});