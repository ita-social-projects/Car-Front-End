import { AuthConfiguration } from "react-native-app-auth";

const AuthConfig: AuthConfiguration = {
    clientId: "cb3b5999-b5fc-40c5-9890-15d1c0130b45",
    redirectUrl: "car://auth/",
    scopes: [
        "openid",
        "offline_access",
        "profile",
        "https://ProjectCar.onmicrosoft.com/ProjectCarAPI/ApiAccess"
    ],
    additionalParameters: { prompt: "select_account" },
    serviceConfiguration: {
        authorizationEndpoint:
            "https://ProjectCar.b2clogin.com/ProjectCar.onmicrosoft.com/B2C_1_login/oauth2/v2.0/authorize",
        tokenEndpoint:
            "https://ProjectCar.b2clogin.com/ProjectCar.onmicrosoft.com/B2C_1_login/oauth2/v2.0/token"
    }
};

export default AuthConfig;
