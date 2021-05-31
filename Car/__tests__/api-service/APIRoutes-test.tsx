import APIRoutes from "../../api-service/APIRoutes";

const expectedApiUrl = "https://car-api-project.azurewebsites.net/";

test("should return correct URL", async () =>
    expect(APIRoutes.getBrandUrl()).toBe(expectedApiUrl + "api/brands/"));

test("should return correct URL", async () =>
    expect(APIRoutes.getCarUrl()).toBe(expectedApiUrl + "api/cars/"));

test("should return correct URL", async () =>
    expect(APIRoutes.getChatUrl()).toBe(expectedApiUrl + "api/user-chats/"));

test("should return correct URL", async () =>
    expect(APIRoutes.getJourneyUrl()).toBe(expectedApiUrl + "api/journeys/"));

test("should return correct URL", async () =>
    expect(APIRoutes.getLocationTypeUrl()).toBe(expectedApiUrl + "api/location-types/"));

test("should return correct URL", async () =>
    expect(APIRoutes.getLocationUrl()).toBe(expectedApiUrl + "api/locations/"));

test("should return correct URL", async () =>
    expect(APIRoutes.getLoginUrl()).toBe(expectedApiUrl + "api/login/"));

test("should return correct URL", async () =>
    expect(APIRoutes.getModelUrl()).toBe(expectedApiUrl + "api/models/"));

test("should return correct URL", async () =>
    expect(APIRoutes.getNotificationsUrl()).toBe(expectedApiUrl + "api/notifications/"));

test("should return correct URL", async () =>
    expect(APIRoutes.getPreferencesUrl()).toBe(expectedApiUrl + "api/user-preferences/"));

test("should return correct URL", async () =>
    expect(APIRoutes.getSignalRUrl()).toBe(expectedApiUrl + "signalr/"));

test("should return correct URL", async () =>
    expect(APIRoutes.getUserUrl()).toBe(expectedApiUrl + "api/users/"));