import { injectable } from "tsyringe";
import UserPreferences from "../../models/UserPreferences";
import APIService from "../APIService";

@injectable()
class PreferencesService {
    constructor(private apiService: APIService) {}

    routePrefix: string = "user-preferences";

    getUserPreferences(id: number) {
        return this.apiService.get<UserPreferences>(
            this.routePrefix + "/" + id
        );
    }

    updateUserPreferences(preferences: UserPreferences) {
        return this.apiService.put<UserPreferences>(
            this.routePrefix,
            preferences
        );
    }
}
export default PreferencesService;
