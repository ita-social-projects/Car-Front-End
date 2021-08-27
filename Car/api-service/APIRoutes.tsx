import APIConfig from "./APIConfig";

const APIRoutes = {
    getBrandUrl: () => APIConfig.URL + "api/brands/",

    getCarUrl: () => APIConfig.URL + "api/cars/",

    getChatUrl: () => APIConfig.URL + "api/user-chats/",

    getJourneyUrl: () => APIConfig.URL + "api/journeys/",

    getLoginUrl: () => APIConfig.URL + "api/login/",

    getModelUrl: () => APIConfig.URL + "api/models/",

    getNotificationsUrl: () => APIConfig.URL + "api/notifications/",

    getPreferencesUrl: () => APIConfig.URL + "api/user-preferences/",

    getUserUrl: () => APIConfig.URL + "api/users/",

    getLocationUrl: () => APIConfig.URL + "api/locations/",

    getLocationTypeUrl: () => APIConfig.URL + "api/location-types/",

    getRequestUrl: () => APIConfig.URL + "api/requests/",

    getSignalRUrl: () => APIConfig.URL + "signalr/",

    getJourneyUserUrl: () => APIConfig.URL + "api/journeyusers/"
};

export default APIRoutes;
