import APIService from "../APIService";
import APIRoutes from "../APIRoutes";
import JourneyUserDto from "../../models/journey-user/JourneyUserDto";

const route = APIRoutes.getJourneyUserUrl();

const JourneyUserService = {
    getJourneyUser: async (journeyId:number, userId: number) =>
        APIService.get<JourneyUserDto>(route + journeyId + "/" + userId),

    getHasBaggage: async (journeyId:number, userId: number) =>
        APIService.get<boolean>(route + "has-baggage/" + journeyId + "/" + userId),

    update: async (journeyUser:JourneyUserDto) =>
        APIService.put(route + "update", journeyUser),

    updateWithBaggage: async (journeyId:number, userId: number, withBaggage: boolean) =>
        APIService.put(route + journeyId + "/" + userId, withBaggage)
};

export default JourneyUserService;