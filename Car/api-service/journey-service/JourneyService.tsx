import Journey from "../../models/journey/Journey";
import APIService from "../APIService";
import APIRoutes from "../APIRoutes";
import Stop from "../../models/stop/Stop";
import JourneyDto from "../../models/journey/JourneyDto";
import FilterJourneyModel from "../../models/journey/FilterJourneyModel";
import JourneyApplyModel from "../../models/journey-user/JourneyApplyModel";
import JourneyWithUserModel from "../../models/journey-user/JourneyWithUserModel";
import Invitation from "../../models/invitation/Invitation";
import { AxiosRequestConfig } from "axios";

const route = APIRoutes.getJourneyUrl();

const JourneyService = {
    getJourney: async (journeyId: number, withCancelledStops: boolean = false, config: AxiosRequestConfig = {}) =>
        APIService.get<Journey>(route + journeyId + "/" + withCancelledStops, config),

    getPastJourneys: async () =>
        APIService.get<Array<Journey>>(route + "past"),

    getUpcomingJourneys: async () =>
        APIService.get<Array<Journey>>(route + "upcoming"),

    getScheduledJourneys: async () =>
        APIService.get<Array<Journey>>(route + "scheduled"),

    getRecentJourneyStops: async () =>
        APIService.get<Array<Array<Stop>>>(route + "recent"),

    add: async (journey: JourneyDto) =>
        APIService.post<[JourneyDto, boolean]>(route, journey),

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
        APIService.put(route + "update-details/", journey),

    updateInvitation: async (invitation: Invitation) =>
        APIService.put(route + "update-invitation/", invitation),

    deleteUser: async (journeyId: number, userId: number) =>
        APIService.delete(route + "delete-user/" + journeyId + "/" + userId),

    addUser: async (journeyApplyModel: JourneyApplyModel) =>
        APIService.put(route + "add-user/", journeyApplyModel),

    getJourneyWithJourneyUser: async (journeyId:number, userId: number, withCancelledStops: boolean = false) =>
        APIService.get<JourneyWithUserModel>(route + "journey-user/"
        + journeyId + "/" + userId + "/" + withCancelledStops)
};

export default JourneyService;
