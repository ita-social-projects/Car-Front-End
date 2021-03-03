import APIService from "../APIService";
import Location from "../../models/Location";
import APIRoutes from "../APIRoutes";

const route = APIRoutes.getLocationUrl();

const LocationService = {

    add: (location: Location) => APIService.post<Location>(route, location),

    update: async (location: Location) => APIService.put<Location>(route, location),

    getById: async (id: number) => APIService.get<Location>(route + id),

    getAll: async (id: number) => APIService.get<Array<Location>>(route + "by-user/" + id),
};

export default LocationService;
