import APIService from "../APIService";
import "reflect-metadata";
import { injectable } from "tsyringe";
import Model from "../../models/Model";

@injectable()
class ModelService {
    constructor(private apiService: APIService) {}

    routePrefix: string = "models";

    getModels() {
        return this.apiService.get<Model[]>(this.routePrefix);
    }

    getModelsByBrandId(id: number) {
        return this.apiService.get<Model[]>(
            this.routePrefix + "/by-brand/" + id
        );
    }
}

export default ModelService;
