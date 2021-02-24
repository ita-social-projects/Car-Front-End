import CreateCarViewModel from "../../models/car/CreateCarViewModel";
import CarViewModel from "../../models/car/CarViewModel";
import APIService from "../APIService";
import UpdateCarViewModel from "../../models/car/UpdateCarViewModel";
import APIRoutes from "../APIRoutes";

const route = APIRoutes.getCarUrl();

const CarService = {
    uploadPhoto: async (id: number, formData: FormData) => {
        return APIService.put(route + id + "/photo", formData);
    },

    add: async (car: CreateCarViewModel) => {
        return APIService.post<CreateCarViewModel>(route, car);
    },

    update: async (car: UpdateCarViewModel) => {
        return APIService.put<UpdateCarViewModel>(route, car);
    },

    getById: async (id: number) => {
        return APIService.get<CarViewModel>(route + id);
    },

    getAll: async (id: number) => {
        return APIService.get<Array<CarViewModel>>(route + "by-user/" + id);
    },

    getAvatar: async (id: number) => {
        return APIService.get<string>(route + id + "/photo");
    }
};

export default CarService;
