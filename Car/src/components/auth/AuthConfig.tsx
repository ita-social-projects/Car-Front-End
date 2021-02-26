import { AuthConfiguration } from "react-native-app-auth";

const AuthConfig: AuthConfiguration = {
    clientId: "16cd707a-5326-4c1f-8b79-f2f25597d4df",
    redirectUrl: "car://auth/",
    scopes: [
        "openid",
        "offline_access",
        "profile",
        "User.Read",
        "MailboxSettings.Read",
        "Calendars.ReadWrite"
    ],
    additionalParameters: { prompt: "select_account" },
    serviceConfiguration: {
        authorizationEndpoint:
            "https://login.microsoftonline.com/common/oauth2/v2.0/authorize",
        tokenEndpoint:
            "https://login.microsoftonline.com/common/oauth2/v2.0/token"
    }
};

export default AuthConfig;
