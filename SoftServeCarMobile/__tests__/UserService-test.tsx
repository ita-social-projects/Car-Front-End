import "react-native";
import UserService from "../api-service/user-service/UserService";
import { AxiosResponse } from "axios";
import APIService from "../api-service/APIService";
import { User } from "../models/User";

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

    let apiService: APIService = new APIService();
    let userService = new UserService(apiService);

    test("should get user", () => {
        jest.spyOn(apiService, "get").mockImplementation(
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

        userService.getUser(userData.id).then((res) => {
            response = res.data;
            expect(res.status).toEqual(200);
            expect(response).toEqual(userData);
        });
    });

    test("should add user", () => {
        jest.spyOn(apiService, "post").mockImplementation(
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

        userService.create(userData).then((res) => {
            response = res.data;
            expect(res.status).toEqual(200);
            expect(response).toEqual(userData);
        });
    });
    test("should update user", () => {
        let newName = "Mark";

        let newUser = { ...userData, name: newName };

        jest.spyOn(apiService, "put").mockImplementation(
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

        userService.getUser(userData.id).then((res) => {
            response = res.data;
            expect(res.status).toEqual(200);
            expect(response).toEqual(userData);
        });
    });
});
