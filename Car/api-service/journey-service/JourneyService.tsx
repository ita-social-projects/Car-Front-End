import Journey from "../../models/Journey";
import APIService from "../APIService";
import APIRoutes from "../APIRoutes";

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

    create: async (journey: Journey) =>
        APIService.post<Journey>(route, journey),

    update: async (journey: Journey) => APIService.put<Journey>(route, journey),

    delete: async (journey: Journey) =>
        APIService.delete<Journey>(route, journey),

    addParticipant: async (formData: FormData) =>
        APIService.post<Journey>(route + "participant", formData)
};

export default JourneyService;
