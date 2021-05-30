import { AxiosResponse } from "axios";
import "react-native";
import APIService from "../../api-service/APIService";
import BrandService from "../../api-service/brand-service/BrandService";
import CarBrand from "../../models/car/CarBrand";

describe("Brand Service test", () => {
    let brandData: CarBrand[] = [{
        id: 1,
        models: [],
        name: "ABC"
    }];

    test("should return brands", async () => {
        jest.spyOn(APIService, "get").mockImplementation(
            () =>
                new Promise<AxiosResponse<CarBrand[]>>(function (resolve) {
                    resolve({
                        data: brandData,
                        statusText: "Ok",
                        status: 200,
                        config: {},
                        headers: {
                            "Context-Type": "application/json"
                        }
                    });
                })
        );
        BrandService.getBrands().then((res) => {
            expect(res.status).toBe(200);
            expect(JSON.stringify(res.data)).toBe(JSON.stringify(brandData));
        });
    });
});
