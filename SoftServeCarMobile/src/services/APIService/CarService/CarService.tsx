import APIService from '../APIService';
import "reflect-metadata";
import { injectable } from 'tsyringe';
import Car from '../../../models/Car';
import { environment } from '../../../environments/environment';

@injectable()
class CarService {
    constructor(private apiService: APIService) { }
    
    routePrefix: string = 'car';

    uploadPhoto(formData: FormData) {
        return fetch(environment.apiUrl + 'car/2/photo',
        {
            method: 'PUT',
            headers: { "Content-Type": "multipart/form-data" },
            body: formData
        })
        .then(res => console.log(res))
        .catch(e => console.log(e));
    }
}

export default CarService;