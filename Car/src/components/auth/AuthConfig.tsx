import { AuthConfiguration } from "react-native-app-auth";
import CredentialsManager from "../../../credentials/credentials.json";

const AuthConfig: AuthConfiguration = {
    clientId: CredentialsManager.clientId,
    redirectUrl: CredentialsManager.redirectUrl,
    scopes: CredentialsManager.scopes,
    additionalParameters: { prompt: "select_account" },
    serviceConfiguration: {
        authorizationEndpoint:
            `https://login.microsoftonline.com/${CredentialsManager.tenantId}/oauth2/v2.0/authorize`,
        tokenEndpoint:
            `https://login.microsoftonline.com/${CredentialsManager.tenantId}/oauth2/v2.0/token`
    }
};

export default AuthConfig;
