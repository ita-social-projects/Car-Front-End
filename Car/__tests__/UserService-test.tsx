import { AxiosResponse } from "axios";
import "react-native";
import APIService from "../api-service/APIService";
import UserService from "../api-service/user-service/UserService";
import User from "../models/user/User";

describe("UserService", () => {
    let userData = {
        id: 3,
        name: "Tom",
        surname: "Kick",
        position: "Developer",
        byteOfImage: "./dd124lam-112_0!1dxxkd",
        location: "Lviv",
        hireDate: new Date("2020-04-09"),
        email: "tom@gmail.com",
        token: ""
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

        let response: User;

        UserService.getUser(userData.id).then((res) => {
            response = res.data;
            expect(res.status).toEqual(200);
            expect(response).toEqual(userData);
        });
    });

    test("should update user", () => {
        let newName = "Mark";

        let newUser = { ...userData, name: newName };

        jest.spyOn(APIService, "put").mockImplementation(
            () =>
                new Promise<AxiosResponse<User>>(function (resolve) {
                    resolve({
                        data: newUser,
                        statusText: "Ok",
                        status: 200,
                        config: {},
                        headers: {
                            "Context-Type": "application/json"
                        }
                    });
                })
        );

        let response: User;

        UserService.getUser(userData.id).then((res) => {
            response = res.data;
            expect(res.status).toEqual(200);
            expect(response).toEqual(userData);
        });
    });
});
