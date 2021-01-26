import APIService from '../APIService';
import "reflect-metadata";
import { injectable } from 'tsyringe';
import Brand from '../../../models/Brand';

@injectable()
class BrandService {
    constructor(private apiService: APIService) { }
    
    routePrefix: string = 'brands';

    getBrands() {
        return this.apiService.get<Brand[]>(this.routePrefix);
    }
}

export default BrandService;