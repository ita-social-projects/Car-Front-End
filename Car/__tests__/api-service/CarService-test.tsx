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
        brand: "EFG",
        model: "CDE",
        ownerId: 1,
        plateNumber: "DEF"
    }];

    let updateCarViewModel: UpdateCarViewModel = {
        color: 1,
        id: 1,
        brand: "EFG",
        model: "CDE",
        plateNumber: "DEF",
        photo: {
            name: "Photo",
            type: "JPG",
            uri: "photo"
        }
    };

    test("should return cars", async () => {
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
        CarService.getAll().then((res) => {
            expect(res.status).toBe(200);
            expect(JSON.stringify(res.data)).toBe(JSON.stringify(carViewModelData));
        });
    });

    test("should return car", async () => {
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

    test("should return car image", async () => {
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

    test("should update car", async () => {
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
        CarService.update({} as any).then((res) => {
            expect(res.status).toBe(200);
            expect(JSON.stringify(res.data)).toBe(JSON.stringify(updateCarViewModel));
        });
    });

    test("should add car", async () => {
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

    test("should delete car", async () => {
        jest.spyOn(APIService, "delete").mockImplementation(
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
        CarService.deleteCar({} as any).then((res) => {
            expect(res.status).toBe(200);
        });
    });
});
