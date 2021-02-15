const AuthConfig = {
    clientId: "16cd707a-5326-4c1f-8b79-f2f25597d4df",
    appScopes: [
        "openid",
        "offline_access",
        "profile",
        "User.Read",
        "MailboxSettings.Read",
        "Calendars.ReadWrite"
    ],
    redirectUrl: "car://auth/",
    serviceConfiguration: {
        authorizationEndpoint:
            "https://login.microsoftonline.com/common/oauth2/v2.0/authorize",
        tokenEndpoint:
            "https://login.microsoftonline.com/common/oauth2/v2.0/token"
    },
    additionalParameters: { prompt: "select_account" }
};

export default AuthConfig;
