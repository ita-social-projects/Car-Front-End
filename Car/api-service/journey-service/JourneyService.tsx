import "reflect-metadata";
import { injectable } from "tsyringe";
import { Journey } from "../../models/Journey";
import APIService from "../APIService";
import { routes } from "../../Environment";

@injectable()
class JourneyService {
    constructor(private apiService: APIService) {}

    routePrefix: string = "journeys/";

    getJourney(journeyId: number) {
        return this.apiService.get<Journey>(this.routePrefix + journeyId);
    }

    getPastJourneys(userId: number) {
        return this.apiService.get<Array<Journey>>(
            this.routePrefix + "/past/" + userId
        );
    }

    getUpcomingJourneys(userId: number) {
        return this.apiService.get<Array<Journey>>(
            this.routePrefix + "/upcoming/" + userId
        );
    }

    getScheduledJourneys(userId: number) {
        return this.apiService.get<Array<Journey>>(
            this.routePrefix + "/scheduled/" + userId
        );
    }

    create(journey: Journey) {
        return this.apiService.post<Journey>(this.routePrefix, journey);
    }

    update(journey: Journey) {
        return this.apiService.put<Journey>(this.routePrefix, journey);
    }

    delete(journey: Journey) {
        return this.apiService.delete<Journey>(this.routePrefix, journey);
    }

    addParticipant(formData: FormData) {
        return this.apiService.post<Journey>(
            routes.apiUrl + this.routePrefix + "/participant",
            {
                method: "POST",
                headers: { "Content-Type": "multipart/form-data" },
                body: formData
            }
        );
    }
}

export default JourneyService;
