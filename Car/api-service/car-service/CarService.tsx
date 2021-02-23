import CreateCarViewModel from "../../models/car/CreateCarViewModel";
import CarViewModel from "../../models/car/CarViewModel";
import APIService from "../APIService";
import UpdateCarViewModel from "../../models/car/UpdateCarViewModel";
import APIRoutes from "../APIRoutes";

const route = APIRoutes.getCarUrl();

const CarService = {
    uploadPhoto: async (id: number, formData: FormData) => {
        return await fetch(route + id + "/photo", {
            method: "PUT",
            headers: { "Content-Type": "multipart/form-data" },
            body: formData
        });
    },

    add: async (car: CreateCarViewModel) => {
        return await APIService.post<CreateCarViewModel>(route, car);
    },

    update: async (car: UpdateCarViewModel) => {
        return await APIService.put<UpdateCarViewModel>(route, car);
    },

    getById: async (id: number) => {
        return await APIService.get<CarViewModel>(route + id);
    },

    getAll: async (id: number) => {
        return await APIService.get<Array<CarViewModel>>(
            route + "by-user/" + id
        );
    },

    getAvatar: async (id: number) => {
        return await APIService.get<string>(route + id + "/photo");
    }
};

export default CarService;
