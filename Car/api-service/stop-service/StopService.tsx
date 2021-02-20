import APIService from "../APIService";
import "reflect-metadata";
import { injectable } from "tsyringe";
import Stop  from "../../models/Stop";

@injectable()
class StopService {
    constructor(private apiService: APIService) {}

    routePrefix: string = "journeys/recent/";

    getRecentJourneyStops(id: number) {
        return this.apiService.get<Array<Array<Stop>>>(this.routePrefix + id);
    }
}

export default StopService;
