import Journey from "../../models/journey/Journey";
import APIService from "../APIService";
import APIRoutes from "../APIRoutes";
import Stop from "../../models/stop/Stop";
import JourneyDto from "../../models/journey/JourneyDto";
import FilterJourneyModel from "../../models/journey/FilterJourneyModel";

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

    add: async (journey: JourneyDto) =>
        APIService.post<JourneyDto>(route, journey),

    getFilteredJourneys: async (filter: FilterJourneyModel) =>
        APIService.get<Array<Journey>>(route + "filter/", { params: filter }),

    delete: async (id: number) =>
        APIService.delete(route + id),

    cancel: async (id: number) =>
        APIService.put(route + "cancel/" + id),

    isJourneyCanceled: async (id: number) =>
        APIService.get<boolean>(route + "is-canceled/" + id),

    updateRoute: async (journey: JourneyDto) =>
        APIService.put(route + "update-route/", journey),

    updateDetails: async (journey: JourneyDto) =>
        APIService.put(route + "update-details/", journey)
};

export default JourneyService;
