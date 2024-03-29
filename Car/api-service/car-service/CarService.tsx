import CarViewModel from "../../models/car/CarViewModel";
import APIService from "../APIService";
import APIRoutes from "../APIRoutes";
import Axios from "../Axios";
import { AxiosRequestConfig } from "axios";

const route = APIRoutes.getCarUrl();

const CarService = {
    add: async (car: FormData, config: AxiosRequestConfig = {}) =>
        Axios.post<FormData>(route, car, config),

    update: async (car: FormData, config: AxiosRequestConfig = {}) =>
        Axios.put<FormData>(route, car, config),

    getById: async (id: number) =>
        APIService.get<CarViewModel>(route + id),

    getAll: async () =>
        APIService.get<Array<CarViewModel>>(route + "by-user"),

    getAvatar: async (id: number) =>
        APIService.get<string>(route + id + "/photo"),

    deleteCar: async (id: number) =>
        APIService.delete(route + id)
};

export default CarService;
