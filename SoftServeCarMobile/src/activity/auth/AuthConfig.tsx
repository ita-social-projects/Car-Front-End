const AuthConfig = {
    clientId: "6d6543bc-f0a6-4312-a919-53f757516d63",
    appScopes: [
        "openid",
        "offline_access",
        "profile",
        "User.Read",
        "MailboxSettings.Read",
        "Calendars.ReadWrite"
    ],
    redirectUrl: "softserve-car://react-native-auth/",
    serviceConfiguration: {
        authorizationEndpoint:
            "https://login.microsoftonline.com/common/oauth2/v2.0/authorize",
        tokenEndpoint:
            "https://login.microsoftonline.com/common/oauth2/v2.0/token"
    },
    additionalParameters: { prompt: "select_account" }
};

export default AuthConfig;
