import axios, { AxiosResponse } from "axios";
import "react-native";
import APIService from "../../api-service/APIService";
import CarService from "../../api-service/car-service/CarService";
import CarViewModel from "../../models/car/CarViewModel";
import UpdateCarViewModel from "../../models/car/UpdateCarViewModel";

describe("Location Service test", () => {
    let carViewModelData: CarViewModel[] = [{
        color: 1,
        id: 1,
        imageId: "ABC",
        model: {
            brand: {
                id: 1,
                models: [],
                name: "BCD",
            },
            id: 1,
            name: "CDE",
        },
        ownerId: 1,
        plateNumber: "DEF"
    }];

    let updateCarViewModel: UpdateCarViewModel = {
        color: 1,
        id: 1,
        imageId: "ABC",
        modelId: 1,
        ownerId: 1,
        plateNumber: "DEF"
    };

    test("should return cars", () => {
        jest.spyOn(APIService, "get").mockImplementation(
            () =>
                new Promise<AxiosResponse<CarViewModel[]>>(function (resolve) {
                    resolve({
                        data: carViewModelData,
                        statusText: "Ok",
                        status: 200,
                        config: {},
                        headers: {
                            "Context-Type": "application/json"
                        }
                    });
                })
        );
        CarService.getAll(1).then((res) => {
            expect(res.status).toBe(200);
            expect(JSON.stringify(res.data)).toBe(JSON.stringify(carViewModelData));
        });
    });

    test("should return car", () => {
        jest.spyOn(APIService, "get").mockImplementation(
            () =>
                new Promise<AxiosResponse<CarViewModel>>(function (resolve) {
                    resolve({
                        data: carViewModelData[0],
                        statusText: "Ok",
                        status: 200,
                        config: {},
                        headers: {
                            "Context-Type": "application/json"
                        }
                    });
                })
        );
        CarService.getById(1).then((res) => {
            expect(res.status).toBe(200);
            expect(JSON.stringify(res.data)).toBe(JSON.stringify(carViewModelData[0]));
        });
    });

    test("should return car image", () => {
        jest.spyOn(APIService, "get").mockImplementation(
            () =>
                new Promise<AxiosResponse<string>>(function (resolve) {
                    resolve({
                        data: carViewModelData[0]?.imageId!,
                        statusText: "Ok",
                        status: 200,
                        config: {},
                        headers: {
                            "Context-Type": "application/json"
                        }
                    });
                })
        );
        CarService.getAvatar(1).then((res) => {
            expect(res.status).toBe(200);
            expect(res.data).toBe(carViewModelData[0]?.imageId);
        });
    });

    test("should update car", () => {
        jest.spyOn(APIService, "put").mockImplementation(
            () =>
                new Promise<AxiosResponse<UpdateCarViewModel>>(function (resolve) {
                    resolve({
                        data: updateCarViewModel,
                        statusText: "Ok",
                        status: 200,
                        config: {},
                        headers: {
                            "Context-Type": "application/json"
                        }
                    });
                })
        );
        CarService.update(updateCarViewModel).then((res) => {
            expect(res.status).toBe(200);
            expect(JSON.stringify(res.data)).toBe(JSON.stringify(updateCarViewModel));
        });
    });

    test("should add car", () => {
        jest.spyOn(axios, "post").mockImplementation(
            () =>
                new Promise<AxiosResponse<UpdateCarViewModel>>(function (resolve) {
                    resolve({
                        data: {} as any,
                        statusText: "Ok",
                        status: 200,
                        config: {},
                        headers: {
                            "Context-Type": "multipart/Form-data"
                        }
                    });
                })
        );
        CarService.add({} as any).then((res) => {
            expect(res.status).toBe(200);
        });
    });
});
