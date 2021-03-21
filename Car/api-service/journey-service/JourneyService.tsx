import Journey from "../../models/Journey";
import APIService from "../APIService";
import APIRoutes from "../APIRoutes";
import Stop from "../../models/stop/Stop";

const route = APIRoutes.getJourneyUrl();

const JourneyService = {
    getJourney: async (journeyId: number) =>
        APIService.get<Journey>(route + journeyId),

    getPastJourneys: async (userId: number) =>
        APIService.get<Array<Journey>>(route + "past/" + userId),

    getUpcomingJourneys: async (userId: number) =>
        APIService.get<Array<Journey>>(route + "upcoming/" + userId),

    getScheduledJourneys: async (userId: number) =>
        APIService.get<Array<Journey>>(route + "scheduled/" + userId),

    getRecentJourneyStops: async (id: number) =>
        APIService.get<Array<Array<Stop>>>(route + "recent/" + id),
};

export default JourneyService;
