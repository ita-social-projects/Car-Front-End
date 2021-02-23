import APIConfig from "./APIConfig";

const APIRoutes = {
    getBrandUrl: () => {
        return APIConfig.URL + "api/brands/";
    },

    getCarUrl: () => {
        return APIConfig.URL + "api/cars/";
    },

    getChatUrl: () => {
        return APIConfig.URL + "api/user-chats/";
    },

    getJourneyUrl: () => {
        return APIConfig.URL + "api/journeys/";
    },

    getLogindUrl: () => {
        return APIConfig.URL + "api/login/";
    },

    getModelUrl: () => {
        return APIConfig.URL + "api/models/";
    },

    getNotificationsUrl: () => {
        return APIConfig.URL + "api/Notification/";
    },

    getPreferencesUrl: () => {
        return APIConfig.URL + "api/user-preferences/";
    },

    getUserUrl: () => {
        return APIConfig.URL + "api/users/";
    }
};

export default APIRoutes;
