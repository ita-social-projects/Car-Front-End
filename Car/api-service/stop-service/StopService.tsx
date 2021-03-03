import APIService from "../APIService";
import Stop from "../../models/Stop";
import APIRoutes from "../APIRoutes";

const route = APIRoutes.getJourneyUrl();

const StopService = {

    getRecentJourneyStops(id: number) {
        return APIService.get<Array<Array<Stop>>>(route + "recent/" + id);
    }
};

export default StopService;
