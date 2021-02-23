import Journey from "../../models/Journey";
import APIService from "../APIService";
import APIRoutes from "../APIRoutes";
import APIConfig from "../APIConfig";

const route = APIRoutes.getJourneyUrl();

const JourneyService = {
    getJourney: async (journeyId: number) => {
        return await APIService.get<Journey>(route + journeyId);
    },

    getPastJourneys: async (userId: number) => {
        return await APIService.get<Array<Journey>>(route + "past/" + userId);
    },

    getUpcomingJourneys: async (userId: number) => {
        return await APIService.get<Array<Journey>>(
            route + "upcoming/" + userId
        );
    },

    getScheduledJourneys: async (userId: number) => {
        return await APIService.get<Array<Journey>>(
            route + "scheduled/" + userId
        );
    },

    create: async (journey: Journey) => {
        return await APIService.post<Journey>(route, journey);
    },

    update: async (journey: Journey) => {
        return await APIService.put<Journey>(route, journey);
    },

    delete: async (journey: Journey) => {
        return await APIService.delete<Journey>(route, journey);
    },

    addParticipant: async (formData: FormData) => {
        return await APIService.post<Journey>(route + "participant", {
            method: "POST",
            headers: { "Content-Type": "multipart/form-data" },
            body: formData
        });
    }
};

export default JourneyService;
