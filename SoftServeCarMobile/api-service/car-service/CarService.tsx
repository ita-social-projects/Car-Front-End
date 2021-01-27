import APIService from '../APIService';
import "reflect-metadata";
import { injectable } from 'tsyringe';
import { routes } from '../../environment';
import CarDTO from '../../models/CarDTO';
import Car from '../../models/Car';
import CarInfoDTO from '../../models/CarInfoDTO';

@injectable()
class CarService {
    constructor(private apiService: APIService) { }
    
    routePrefix: string = 'car';

    uploadPhoto(carId: number, formData: FormData) {
        return fetch(routes.apiUrl + this.routePrefix + '/' + carId + '/photo',
        {
            method: 'PUT',
            headers: { "Content-Type": "multipart/form-data" },
            body: formData
        })
    }

    add(car: CarDTO) {
        return this.apiService.post<Car>(this.routePrefix, car);
    }

    getAll(userId: number) {
        return this.apiService.get<Array<CarInfoDTO>>(this.routePrefix + '/byUser/' + userId);
    }

    getAvatar(carId: number) {
        return this.apiService.get<string>(this.routePrefix + '/' + carId + '/photo');
    }
}
export default CarService;