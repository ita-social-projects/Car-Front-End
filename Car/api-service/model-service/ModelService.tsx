import "reflect-metadata";
import { injectable } from "tsyringe";
import CarModel from "../../models/car/CarModel";
import APIService from "../APIService";

@injectable()
class ModelService {
    constructor(private apiService: APIService) {}

    routePrefix: string = "models";

    getModels() {
        return this.apiService.get<CarModel[]>(this.routePrefix);
    }

    getModelsByBrandId(id: number) {
        return this.apiService.get<CarModel[]>(
            this.routePrefix + "/by-brand/" + id
        );
    }
}

export default ModelService;
