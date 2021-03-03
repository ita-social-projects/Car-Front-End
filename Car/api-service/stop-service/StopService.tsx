import APIService from "../APIService";
import Stop from "../../models/Stop";

const routePrefix = "journeys/recent/";

const StopService = {

    getRecentJourneyStops(id: number) {
        return APIService.get<Array<Array<Stop>>>(routePrefix + id);
    }
}

export default StopService;
