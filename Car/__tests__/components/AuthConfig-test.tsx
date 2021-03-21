import AuthConfig from "../../src/components/auth/AuthConfig";

test("should be correct", async () => expect(AuthConfig.clientId).toBe("16cd707a-5326-4c1f-8b79-f2f25597d4df"));
test("should be correct", async () => expect(AuthConfig.redirectUrl).toBe("car://auth/"));
test("should be correct", async () => expect(JSON.stringify(AuthConfig.scopes)).toBe(JSON.stringify([
    "openid",
    "offline_access",
    "profile",
    "User.Read",
    "MailboxSettings.Read",
    "Calendars.ReadWrite"
])));
test("should be correct", async () => expect(AuthConfig.additionalParameters?.prompt).toBe("select_account"));
test("should be correct", async () =>
    expect(AuthConfig.serviceConfiguration?.authorizationEndpoint)
        .toBe("https://login.microsoftonline.com/common/oauth2/v2.0/authorize"));
test("should be correct", async () =>
    expect(AuthConfig.serviceConfiguration?.tokenEndpoint)
        .toBe("https://login.microsoftonline.com/common/oauth2/v2.0/token"));