import AuthConfig from "../../src/components/auth/AuthConfig";

test("should be correct", async () => expect(AuthConfig.clientId).toBe("dacb6e55-b975-4995-b61d-de033c1b71a7"));
test("should be correct", async () => expect(AuthConfig.redirectUrl).toBe("car://auth/"));
test("should be correct", async () => expect(JSON.stringify(AuthConfig.scopes)).toBe(JSON.stringify([
    "openid",
    "offline_access",
    "profile",
    "api://SoftserveCarProjectApi/ApiAccess"
])));
test("should be correct", async () => expect(AuthConfig.additionalParameters?.prompt).toBe("select_account"));
test("should be correct", async () =>
    expect(AuthConfig.serviceConfiguration?.authorizationEndpoint)
        .toBe("https://login.microsoftonline.com/1440b6da-86d7-42c3-b09a-d06191de2220/oauth2/v2.0/authorize"));
test("should be correct", async () =>
    expect(AuthConfig.serviceConfiguration?.tokenEndpoint)
        .toBe("https://login.microsoftonline.com/1440b6da-86d7-42c3-b09a-d06191de2220/oauth2/v2.0/token"));