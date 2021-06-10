import APIService from "../APIService";
import Location from "../../models/location/Location";
import APIRoutes from "../APIRoutes";
import CreateLocationModel from "../../models/location/CreateLocationModel";
import UpdateLocationModel from "../../models/location/UpdateLocationModel";

const route = APIRoutes.getLocationUrl();

const LocationService = {

    add: async (location: CreateLocationModel) => APIService.post<CreateLocationModel>(route, location),

    update: async (location: UpdateLocationModel) => APIService.put<UpdateLocationModel>(route, location),

    getById: async (id: number) => APIService.get<Location>(route + id),

    getAll: async (id: number) => APIService.get<Array<Location>>(route + "by-user/" + id),

    delete: async (id: number) => APIService.delete(route + id)
};

export default LocationService;
