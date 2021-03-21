import axios, { AxiosResponse } from "axios";
import "react-native";
import APIService from "../../api-service/APIService";
import UserService from "../../api-service/user-service/UserService";
import User from "../../models/user/User";

describe("User Service test", () => {
    const userData: User = {
        id: 3,
        name: "Tom",
        surname: "Kick",
        position: "Developer",
        imageId: "./dd124lam-112_0!1dxxkd",
        location: "Lviv",
        hireDate: new Date("2020-04-09"),
        email: "tom@gmail.com",
        token: "",
        journeyCount: 8,
    };

    test("should get user", () => {
        jest.spyOn(APIService, "get").mockImplementation(
            () =>
                new Promise<AxiosResponse<User>>(function (resolve) {
                    resolve({
                        data: userData,
                        statusText: "Ok",
                        status: 200,
                        config: {},
                        headers: {
                            "Context-Type": "application/json"
                        }
                    });
                })
        );
        UserService.getUser(userData.id).then((res) => {
            expect(res.status).toBe(200);
            expect(JSON.stringify(res.data)).toBe(JSON.stringify(userData));
        });
    });

    test("should update user", () => {

        jest.spyOn(axios, "put").mockImplementation(
            () =>
                new Promise<AxiosResponse>(function (resolve) {
                    resolve({
                        data: {} as any,
                        statusText: "Ok",
                        status: 200,
                        config: {},
                        headers: {
                            "Context-Type": "miltipart/Form-data"
                        }
                    });
                })
        );

        UserService.updateUser({} as any).then((res) => {
            expect(res.status).toBe(200);
        });
    });
});
