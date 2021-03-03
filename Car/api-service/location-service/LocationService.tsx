import APIService from "../APIService";
import Location from "../../models/Location";

const routePrefix = "locations";

const LocationService = {

    add(location: Location) {
        return APIService.post<Location>(routePrefix, location);
    },

    update(location: Location) {
        return APIService.put<Location>(routePrefix, location);
    },

    getById(id: number) {
        return APIService.get<Location>(routePrefix + "/" + id);
    },

    getAll(id: number) {
        return APIService.get<Array<Location>>(
            routePrefix + "/by-user/" + id
        );
    },
}

export default LocationService;
