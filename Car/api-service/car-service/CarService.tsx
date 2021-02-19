import "reflect-metadata";
import { injectable } from "tsyringe";
import { CarDto } from "../../dto/CarDto";
import { routes } from "../../Environment";
import Car from "../../models/Car";
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

    add(car: CarDto) {
        return this.apiService.post<CarDto>(this.routePrefix, car);
    }

    update(car: CarDto) {
        return this.apiService.put<CarDto>(this.routePrefix, car);
    }

    getById(id: number) {
        return this.apiService.get<Car>(this.routePrefix + "/" + id);
    }

    getAll(id: number) {
        return this.apiService.get<Array<Car>>(
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
