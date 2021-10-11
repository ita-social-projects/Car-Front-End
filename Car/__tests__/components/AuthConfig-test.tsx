import AuthConfig from "../../src/components/auth/AuthConfig";

test("should be correct", async () => expect(AuthConfig.clientId).toBe("cb3b5999-b5fc-40c5-9890-15d1c0130b45"));
test("should be correct", async () => expect(AuthConfig.redirectUrl).toBe("car://auth/"));
test("should be correct", async () => expect(JSON.stringify(AuthConfig.scopes)).toBe(JSON.stringify([
    "openid",
    "offline_access",
    "profile",
    "https://ProjectCar.onmicrosoft.com/ProjectCarAPI/ApiAccess"
])));
test("should be correct", async () => expect(AuthConfig.additionalParameters?.prompt).toBe("select_account"));
test("should be correct", async () =>
    expect(AuthConfig.serviceConfiguration?.authorizationEndpoint)
        .toBe("https://ProjectCar.b2clogin.com/ProjectCar.onmicrosoft.com/B2C_1_login/oauth2/v2.0/authorize"));
test("should be correct", async () =>
    expect(AuthConfig.serviceConfiguration?.tokenEndpoint)
        .toBe("https://ProjectCar.b2clogin.com/ProjectCar.onmicrosoft.com/B2C_1_login/oauth2/v2.0/token"));