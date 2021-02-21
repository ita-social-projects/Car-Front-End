import "reflect-metadata";
import { injectable } from "tsyringe";
import CarBrand from "../../models/car/CarBrand";
import APIService from "../APIService";

@injectable()
class BrandService {
    constructor(private apiService: APIService) {}

    routePrefix: string = "brands";

    getBrands() {
        return this.apiService.get<CarBrand[]>(this.routePrefix);
    }
}

export default BrandService;
