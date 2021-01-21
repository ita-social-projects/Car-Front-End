import APIService from '../APIService';
import "reflect-metadata";
import { injectable } from 'tsyringe';
import {Journey} from '../../models/Journey';

@injectable()
class JourneyService {
    constructor(private apiService: APIService) { }

    routePrefix: string = 'journey';

    getJourney(journeyId: number) {
        return this.apiService.get<Journey>(this.routePrefix + journeyId);
    }

    create(journey: Journey) {
        return this.apiService.post<Journey>(this.routePrefix, journey);
    }

    update(journey: Journey) {
        return this.apiService.put<Journey>(this.routePrefix, journey);
    }

    delete(journey: Journey) {
        return this.apiService.delete<Journey>(this.routePrefix, journey)
    }
}

export default JourneyService;
