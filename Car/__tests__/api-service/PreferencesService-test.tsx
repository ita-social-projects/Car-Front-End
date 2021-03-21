import { AxiosResponse } from "axios";
import "react-native";
import APIService from "../../api-service/APIService";
import PreferencesService from "../../api-service/preferences-service/PreferencesService";
import UserPreferences from "../../models/user/UserPreferences";

describe("Preferences Service test", () => {
    let preferencesData = {
        id: 1,
        doAllowEating: false,
        doAllowSmoking: false,
        comments: "what a lovely day"
    };

    test("should get preferences", () => {
        jest.spyOn(APIService, "get").mockImplementation(
            () =>
                new Promise<AxiosResponse<UserPreferences>>(function (resolve) {
                    resolve({
                        data: preferencesData,
                        statusText: "Ok",
                        status: 200,
                        config: {},
                        headers: {
                            "Context-Type": "application/json"
                        }
                    });
                })
        );

        let response: UserPreferences;

        PreferencesService.getUserPreferences(preferencesData.id).then(
            (res) => {
                response = res.data;
                expect(res.status).toBe(200);
                expect(JSON.stringify(response)).toBe(JSON.stringify(preferencesData));
            }
        );
    });

    test("should update preferences", () => {
        let newComments = "Hello world!";
        let newPreferences = { ...preferencesData, comments: newComments };

        jest.spyOn(APIService, "put").mockImplementation(
            () =>
                new Promise<AxiosResponse<UserPreferences>>(function (resolve) {
                    resolve({
                        data: newPreferences,
                        statusText: "Ok",
                        status: 200,
                        config: {},
                        headers: {
                            "Context-Type": "application/json"
                        }
                    });
                })
        );
        let response: UserPreferences;

        PreferencesService.updateUserPreferences(preferencesData).then(
            (res) => {
                response = res.data;
                expect(res.status).toBe(200);
                expect(JSON.stringify(response)).toBe(JSON.stringify(preferencesData));
            }
        );
    });
});
