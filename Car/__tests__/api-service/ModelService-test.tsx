import { AxiosResponse } from "axios";
import "react-native";
import APIService from "../../api-service/APIService";
import ModelService from "../../api-service/model-service/ModelService";
import CarModel from "../../models/car/CarModel";

describe("Model Service test", () => {
    let modelData: CarModel[] = [{
        id: 1,
        brand: null,
        name: "ABC"
    }];

    test("should return models", async () => {
        jest.spyOn(APIService, "get").mockImplementation(
            () =>
                new Promise<AxiosResponse<CarModel[]>>(function (resolve) {
                    resolve({
                        data: modelData,
                        statusText: "Ok",
                        status: 200,
                        config: {},
                        headers: {
                            "Context-Type": "application/json"
                        }
                    });
                })
        );
        ModelService.getModelsByBrandId(1).then((res) => {
            expect(res.status).toBe(200);
            expect(JSON.stringify(res.data)).toBe(JSON.stringify(modelData));
        });
    });
});
