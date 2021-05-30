import APIRoutes from "../../api-service/APIRoutes";

test("should return correct URL", async () =>
    expect(APIRoutes.getBrandUrl()).toBe("https://car-api-project.azurewebsites.net/api/brands/"));

test("should return correct URL", async () =>
    expect(APIRoutes.getCarUrl()).toBe("https://car-api-project.azurewebsites.net/api/cars/"));

test("should return correct URL", async () =>
    expect(APIRoutes.getChatUrl()).toBe("https://car-api-project.azurewebsites.net/api/user-chats/"));

test("should return correct URL", async () =>
    expect(APIRoutes.getJourneyUrl()).toBe("https://car-api-project.azurewebsites.net/api/journeys/"));

test("should return correct URL", async () =>
    expect(APIRoutes.getLocationTypeUrl()).toBe("https://car-api-project.azurewebsites.net/api/location-types/"));

test("should return correct URL", async () =>
    expect(APIRoutes.getLocationUrl()).toBe("https://car-api-project.azurewebsites.net/api/locations/"));

test("should return correct URL", async () =>
    expect(APIRoutes.getLoginUrl()).toBe("https://car-api-project.azurewebsites.net/api/login/"));

test("should return correct URL", async () =>
    expect(APIRoutes.getModelUrl()).toBe("https://car-api-project.azurewebsites.net/api/models/"));

test("should return correct URL", async () =>
    expect(APIRoutes.getNotificationsUrl()).toBe("https://car-api-project.azurewebsites.net/api/notifications/"));

test("should return correct URL", async () =>
    expect(APIRoutes.getPreferencesUrl()).toBe("https://car-api-project.azurewebsites.net/api/user-preferences/"));

test("should return correct URL", async () =>
    expect(APIRoutes.getSignalRUrl()).toBe("https://car-api-project.azurewebsites.net/signalr/"));

test("should return correct URL", async () =>
    expect(APIRoutes.getUserUrl()).toBe("https://car-api-project.azurewebsites.net/api/users/"));