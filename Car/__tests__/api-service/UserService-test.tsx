import axios, { AxiosResponse } from "axios";
import "react-native";
import APIService from "../../api-service/APIService";
import UserService from "../../api-service/user-service/UserService";
import User from "../../models/user/User";

describe("User Service test", () => {
    const userData: User[] = [{
        id: 3,
        name: "Tom",
        surname: "Kick",
        position: "Developer",
        imageId: "./dd124lam-112_0!1dxxkd",
        location: "Lviv",
        hireDate: new Date("2020-04-09"),
        email: "tom@gmail.com",
        fcmtoken : null,
        journeyCount: 8,
        phoneNumber: null,
        isPolicyAccepted: true,
        isNumberVisible: false
    },
    {
        id: 2,
        name: "Ted",
        surname: "Kick",
        position: "Developer",
        imageId: "./dd124lam-112_0!1dxxkd",
        location: "Lviv",
        hireDate: new Date("2020-04-09"),
        email: "tom@gmail.com",
        fcmtoken : null,
        journeyCount: 8,
        phoneNumber: null,
        isPolicyAccepted: true,
        isNumberVisible: false
    }];

    test("should get user", async () => {
        jest.spyOn(APIService, "get").mockImplementation(
            () =>
                new Promise<AxiosResponse<User>>(function (resolve) {
                    resolve({
                        data: userData[0],
                        statusText: "Ok",
                        status: 200,
                        config: {},
                        headers: {
                            "Context-Type": "application/json"
                        }
                    });
                })
        );
        UserService.getUser(3).then((res) => {
            expect(res.status).toBe(200);
            expect(JSON.stringify(res.data)).toBe(JSON.stringify(userData[0]));
        });
    });

    test("should get all users", async () => {
        jest.spyOn(APIService, "get").mockImplementation(
            () =>
                new Promise<AxiosResponse<User[]>>(function (resolve) {
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
        UserService.getAllUsers().then((res) => {
            expect(res.status).toBe(200);
            expect(JSON.stringify(res.data)).toBe(JSON.stringify(userData));
        });
    });

    test("should update users image", async () => {

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

        UserService.updateUserImage({} as any, {}).then((res) => {
            expect(res.status).toBe(200);
        });
    });

    test("should add user fcmtoken", async () => {

        jest.spyOn(axios, "post").mockImplementation(
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

        UserService.addUserFcmtoken({} as any).then((res) => {
            expect(res.status).toBe(200);
        });
    });

    test("should delete user fcmtoken", async () => {

        jest.spyOn(axios, "delete").mockImplementation(
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

        UserService.deleteUserFcmtoken({} as any).then((res) => {
            expect(res.status).toBe(200);
        });
    });
});
