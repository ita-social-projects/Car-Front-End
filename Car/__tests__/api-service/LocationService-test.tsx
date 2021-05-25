import { AxiosResponse } from "axios";
import "react-native";
import APIService from "../../api-service/APIService";
import LocationService from "../../api-service/location-service/LocationService";
import Location from "../../models/location/Location";
import CreateLocationModel from "../../models/location/CreateLocationModel";

describe("Location Service test", () => {
    let createLocationModelData: CreateLocationModel[] = [{
        address: null,
        name: "ABC",
        typeId: 1,
        userId: 1,
    }];
    let locationData: Location[] = [{
        id: 1,
        address: null,
        name: "ABC",
        type: {
            id: 1,
            name: "BCD"
        },
        userId: 1
    }];

    test("should return locations", async () => {
        jest.spyOn(APIService, "get").mockImplementation(
            () =>
                new Promise<AxiosResponse<Location[]>>(function (resolve) {
                    resolve({
                        data: locationData,
                        statusText: "Ok",
                        status: 200,
                        config: {},
                        headers: {
                            "Context-Type": "application/json"
                        }
                    });
                })
        );
        LocationService.getAll(1).then((res: any) => {
            expect(res.status).toBe(200);
            expect(JSON.stringify(res.data)).toBe(JSON.stringify(locationData));
        });
    });

    test("should return location", async () => {
        jest.spyOn(APIService, "get").mockImplementation(
            () =>
                new Promise<AxiosResponse<Location>>(function (resolve) {
                    resolve({
                        data: locationData[0],
                        statusText: "Ok",
                        status: 200,
                        config: {},
                        headers: {
                            "Context-Type": "application/json"
                        }
                    });
                })
        );
        LocationService.getById(1).then((res: any) => {
            expect(res.status).toBe(200);
            expect(JSON.stringify(res.data)).toBe(JSON.stringify(locationData[0]));
        });
    });

    test("should add location", async () => {
        jest.spyOn(APIService, "post").mockImplementation(
            () =>
                new Promise<AxiosResponse<Location>>(function (resolve) {
                    resolve({
                        data: locationData[0],
                        statusText: "Ok",
                        status: 200,
                        config: {},
                        headers: {
                            "Context-Type": "application/json"
                        }
                    });
                })
        );
        LocationService.add(createLocationModelData[0]).then((res: any) => {
            expect(res.status).toBe(200);
            expect(JSON.stringify(res.data)).toBe(JSON.stringify(locationData[0]));
        });
    });

    test("should update location", async () => {
        jest.spyOn(APIService, "put").mockImplementation(
            () =>
                new Promise<AxiosResponse<Location>>(function (resolve) {
                    resolve({
                        data: locationData[0],
                        statusText: "Ok",
                        status: 200,
                        config: {},
                        headers: {
                            "Context-Type": "application/json"
                        }
                    });
                })
        );
        LocationService.update(locationData[0]).then((res: any) => {
            expect(res.status).toBe(200);
            expect(JSON.stringify(res.data)).toBe(JSON.stringify(locationData[0]));
        });
    });
});
