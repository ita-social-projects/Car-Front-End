import APIService from '../APIService';
import "reflect-metadata";
import { injectable } from 'tsyringe';
import Model from '../../../models/Model';

@injectable()
class ModelService {
    constructor(private apiService: APIService) { }
    
    routePrefix: string = 'model';

    getModels() {
        return this.apiService.get<Model[]>(this.routePrefix);
    }

    getModelsByBrandId(brandId: number) {
        console.log(brandId);
        return this.apiService.get<Model[]>(this.routePrefix + '/brand/' + brandId);
    }
}

export default ModelService;