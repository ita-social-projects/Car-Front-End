import "reflect-metadata";
import { injectable } from "tsyringe";
import APIService from "../APIService";
import Location from "../../models/Location";

@injectable()
class LocationService {
    constructor(private apiService: APIService) {}

    routePrefix: string = "locations";

    add(location: Location) {
        return this.apiService.post<Location>(this.routePrefix, location);
    }

    update(location: Location) {
        return this.apiService.put<Location>(this.routePrefix, location);
    }

    getById(id: number) {
        return this.apiService.get<Location>(this.routePrefix + "/" + id);
    }

    getAll(id: number) {
        return this.apiService.get<Array<Location>>(
            this.routePrefix + "/by-user/" + id
        );
    }
}
export default LocationService;
