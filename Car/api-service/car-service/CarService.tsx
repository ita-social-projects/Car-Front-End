import CarViewModel from "../../models/car/CarViewModel";
import APIService from "../APIService";
import APIRoutes from "../APIRoutes";
import Axios from "../Axios";

const route = APIRoutes.getCarUrl();

const CarService = {
    add: async (car: FormData) =>
        Axios.post<FormData>(route, car),

    update: async (car: FormData) =>
        Axios.put<FormData>(route, car),

    getById: async (id: number) =>
        APIService.get<CarViewModel>(route + id),

    getAll: async (id: number) =>
        APIService.get<Array<CarViewModel>>(route + "by-user/" + id),

    getAvatar: async (id: number) =>
        APIService.get<string>(route + id + "/photo"),

    deleteCar: async (id: number) =>
        APIService.delete(route + id)
};

export default CarService;
