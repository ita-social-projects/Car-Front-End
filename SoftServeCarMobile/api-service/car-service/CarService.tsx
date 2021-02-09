import "reflect-metadata";
import { injectable } from "tsyringe";
import { routes } from "../../Environment";
import Car from "../../models/Car";
import CarDTO from "../../models/CarDTO";
import CarInfoDTO from "../../models/CarInfoDTO";
import APIService from "../APIService";

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

    add(car: CarDTO) {
        return this.apiService.post<Car>(this.routePrefix, car);
    }

    update(id: CarDTO) {
        return this.apiService.put<Car>(this.routePrefix + '/' + id);
    }

    getById(id: number) {
        return this.apiService.get<Car>(this.routePrefix + '/' + id);
    }

    getAll(id: number) {
        return this.apiService.get<Array<CarInfoDTO>>(
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
