import { AxiosResponse } from "axios";
import "react-native";
import APIService from "../../api-service/APIService";
import LoginService from "../../api-service/login-service/LoginService";
import User from "../../models/user/User";

describe("Login Service test", () => {
    let userData = {
        id: 13,
        name: "Peter",
        surname: "Pen",
        position: "Student",
        imageId: "./dd124lam-112_0!1dxxkd",
        location: "Lviv",
        hireDate: new Date("2020-10-11"),
        email: "peter@gmail.com",
        token: "",
        fcmtoken : null,
        journeyCount: 8,
        phoneNumber: null,
    };

    test("should login user", async () => {
        jest.spyOn(APIService, "post").mockImplementation(
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
        LoginService.loginUser().then((res) => {
            expect(res.status).toBe(200);
            expect(JSON.stringify(res.data)).toBe(JSON.stringify(userData));
        });
    });
});
