import APIRoutes from "../../api-service/APIRoutes";

test("should return correct URL", () =>
    expect(APIRoutes.getBrandUrl()).toBe("https://car-project.azurewebsites.net/api/brands/"));

test("should return correct URL", () =>
    expect(APIRoutes.getCarUrl()).toBe("https://car-project.azurewebsites.net/api/cars/"));

test("should return correct URL", () =>
    expect(APIRoutes.getChatUrl()).toBe("https://car-project.azurewebsites.net/api/user-chats/"));

test("should return correct URL", () =>
    expect(APIRoutes.getJourneyUrl()).toBe("https://car-project.azurewebsites.net/api/journeys/"));

test("should return correct URL", () =>
    expect(APIRoutes.getLocationTypeUrl()).toBe("https://car-project.azurewebsites.net/api/location-types/"));

test("should return correct URL", () =>
    expect(APIRoutes.getLocationUrl()).toBe("https://car-project.azurewebsites.net/api/locations/"));

test("should return correct URL", () =>
    expect(APIRoutes.getLoginUrl()).toBe("https://car-project.azurewebsites.net/api/login/"));

test("should return correct URL", () =>
    expect(APIRoutes.getModelUrl()).toBe("https://car-project.azurewebsites.net/api/models/"));

test("should return correct URL", () =>
    expect(APIRoutes.getNotificationsUrl()).toBe("https://car-project.azurewebsites.net/api/Notification/"));

test("should return correct URL", () =>
    expect(APIRoutes.getPreferencesUrl()).toBe("https://car-project.azurewebsites.net/api/user-preferences/"));

test("should return correct URL", () =>
    expect(APIRoutes.getSignalRUrl()).toBe("https://car-project.azurewebsites.net/signalr/"));

test("should return correct URL", () =>
    expect(APIRoutes.getUserUrl()).toBe("https://car-project.azurewebsites.net/api/users/"));