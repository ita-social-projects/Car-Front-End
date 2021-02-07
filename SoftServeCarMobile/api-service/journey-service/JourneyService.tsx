import "reflect-metadata";
import { injectable } from 'tsyringe';
import { Journey } from '../../models/Journey';
import APIService from '../APIService';

@injectable()
class JourneyService {
    constructor(private apiService: APIService) { }

    routePrefix: string = 'journeys/';

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
