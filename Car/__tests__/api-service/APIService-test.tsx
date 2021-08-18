import { AxiosResponse } from "axios";
import "react-native";
import APIService from "../../api-service/APIService";
import Axios from "../../api-service/Axios";

describe("API Service test", () => {

    test("get method should return 200 status code", async () => {
        jest.spyOn(Axios, "get").mockImplementation(
            () =>
                new Promise<AxiosResponse>(function (resolve) {
                    resolve({
                        data: {},
                        statusText: "Ok",
                        status: 200,
                        config: {},
                        headers: {
                            "Context-Type": "application/json"
                        }
                    });
                })
        );
        APIService.get("").then((res) => {
            expect(res.status).toBe(200);
        });
    });

    test("post method should return 200 status code", async () => {
        jest.spyOn(Axios, "post").mockImplementation(
            () =>
                new Promise<AxiosResponse>(function (resolve) {
                    resolve({
                        data: {},
                        statusText: "Ok",
                        status: 200,
                        config: {},
                        headers: {
                            "Context-Type": "application/json"
                        }
                    });
                })
        );
        APIService.post("").then((res) => {
            expect(res.status).toBe(200);
        });
    });

    test("put method should return 200 status code", async () => {
        jest.spyOn(Axios, "put").mockImplementation(
            () =>
                new Promise<AxiosResponse>(function (resolve) {
                    resolve({
                        data: {},
                        statusText: "Ok",
                        status: 200,
                        config: {},
                        headers: {
                            "Context-Type": "application/json"
                        }
                    });
                })
        );
        APIService.put("").then((res) => {
            expect(res.status).toBe(200);
        });
    });

    test("delete method should return 200 status code", async () => {
        jest.spyOn(Axios, "delete").mockImplementation(
            () =>
                new Promise<AxiosResponse>(function (resolve) {
                    resolve({
                        data: {},
                        statusText: "Ok",
                        status: 200,
                        config: {},
                        headers: {
                            "Context-Type": "application/json"
                        }
                    });
                })
        );
        APIService.delete("").then((res) => {
            expect(res.status).toBe(200);
        });
    });
});