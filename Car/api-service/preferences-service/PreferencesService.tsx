import UserPreferences from "../../models/UserPreferences";
import APIRoutes from "../APIRoutes";
import APIService from "../APIService";

const route = APIRoutes.getPreferencesUrl();

const PreferencesService = {
    getUserPreferences: async (id: number) => {
        return APIService.get<UserPreferences>(route + id);
    },

    updateUserPreferences: async (preferences: UserPreferences) => {
        return APIService.put<UserPreferences>(route, preferences);
    }
};

export default PreferencesService;
