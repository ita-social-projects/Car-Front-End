import Journey from "../../models/journey/Journey";
import APIService from "../APIService";
import APIRoutes from "../APIRoutes";
import Stop from "../../models/stop/Stop";
import JourneyDto from "../../models/journey/JourneyDto";
import FilterJourneyModel from "../../models/journey/FilterJourneyModel";
import AcceptedInvitationModel from "../../models/journey-user/AcceptedInvitationModel";
import JourneyWithUserModel from "../../models/journey-user/JourneyWithUserModel";
import Invitation from "../../models/invitation/Invitation";
import { AxiosRequestConfig } from "axios";
import JourneyTimeModel from "../../models/journey/JoruneyTimeModel";
import Request from "../../models/request/Request";
import ScheduleDto from "../../models/journey/ScheduleDto";
import ScheduleTimeModel from "../../models/journey/ScheduleTimeModel";
import { FilteredJourneys } from "../../models/journey/FilteredJourneys";

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

    getRequestedJourneys: async () =>
        APIService.get<Array<Request>>(route + "requested"),

    getCanceledJourneys: async () =>
        APIService.get<Array<Journey>>(route + "canceled"),

    getRecentJourneyStops: async () =>
        APIService.get<Array<Array<Stop>>>(route + "recent"),

    add: async (journey: JourneyDto) =>
        APIService.post<JourneyTimeModel>(route, journey),

    addSchedule: async (journey: JourneyDto) =>
        APIService.post<ScheduleTimeModel>(route + "schedule", journey),

    addScheduledJourney: async (schedule: ScheduleDto) =>
        APIService.post<JourneyTimeModel>(route + "scheduled-journey", schedule),

    getFilteredJourneys: async (filter: FilterJourneyModel) =>
        APIService.get<FilteredJourneys>(route + "filter/", { params: filter }),

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

    addUser: async (acceptedInvitation: AcceptedInvitationModel) => {
        return APIService.put(route + "add-user/", acceptedInvitation);
    },

    getJourneyWithJourneyUser: async (journeyId:number,
        userId: number,
        withCancelledStops: boolean = false,
        config: AxiosRequestConfig = {}) =>
        APIService.get<JourneyWithUserModel>(route + "journey-user/"
        + journeyId + "/" + userId + "/" + withCancelledStops, config)
};

export default JourneyService;
