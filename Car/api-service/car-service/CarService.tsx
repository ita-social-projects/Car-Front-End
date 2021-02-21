import "reflect-metadata";
import { injectable } from "tsyringe";
import CreateCarViewModel from "../../models/car/CreateCarViewModel";
import routes from "../EnvironmentRoutes";
import CarViewModel from "../../models/car/CarViewModel";
import APIService from "../APIService";
import UpdateCarViewModel from "../../models/car/UpdateCarViewModel";

@injectable()
class CarService {
    constructor(private apiService: APIService) {}

    routePrefix: string = "cars";

    uploadPhoto(id: number, formData: FormData) {
        return fetch(routes.apiUrl + this.routePrefix + "/" + id + "/photo", {
            method: "PUT",
            headers: { "Content-Type": "multipart/form-data" },
            body: formData
        });
    }

    add(car: CreateCarViewModel) {
        return this.apiService.post<CreateCarViewModel>(this.routePrefix, car);
    }

    update(car: UpdateCarViewModel) {
        return this.apiService.put<UpdateCarViewModel>(this.routePrefix, car);
    }

    getById(id: number) {
        return this.apiService.get<CarViewModel>(this.routePrefix + "/" + id);
    }

    getAll(id: number) {
        return this.apiService.get<Array<CarViewModel>>(
            this.routePrefix + "/by-user/" + id
        );
    }

    getAvatar(id: number) {
        return this.apiService.get<string>(
            this.routePrefix + "/" + id + "/photo"
        );
    }
}
export default CarService;
