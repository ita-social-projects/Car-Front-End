import UserPreferences from "../../models/UserPreferences";
import APIRoutes from "../APIRoutes";
import APIService from "../APIService";

const route = APIRoutes.getPreferencesUrl();

const PreferencesService = {
    getUserPreferences: async (id: number) =>
        APIService.get<UserPreferences>(route + id),

    updateUserPreferences: async (preferences: UserPreferences) =>
        APIService.put<UserPreferences>(route, preferences)
};

export default PreferencesService;
