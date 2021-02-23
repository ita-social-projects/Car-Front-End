import CarModel from "../../models/car/CarModel";
import APIRoutes from "../APIRoutes";
import APIService from "../APIService";

const route = APIRoutes.getModelUrl();

const ModelService = {
    getModels: async () => {
        return APIService.get<CarModel[]>(route);
    },

    getModelsByBrandId: async (id: number) => {
        return APIService.get<CarModel[]>(route + "by-brand/" + id);
    }
};

export default ModelService;
