import CarViewModel from "../../models/car/CarViewModel";
import APIService from "../APIService";
import UpdateCarViewModel from "../../models/car/UpdateCarViewModel";
import axios from "axios";
import APIRoutes from "../APIRoutes";

const route = APIRoutes.getCarUrl();

const CarService = {
    add: async (car: FormData) => axios.post(route, car),

    update: async (car: UpdateCarViewModel) =>
        APIService.put<UpdateCarViewModel>(route, car),

    getById: async (id: number) => APIService.get<CarViewModel>(route + id),

    getAll: async (id: number) =>
        APIService.get<Array<CarViewModel>>(route + "by-user/" + id),

    getAvatar: async (id: number) =>
        APIService.get<string>(route + id + "/photo")
};

export default CarService;
