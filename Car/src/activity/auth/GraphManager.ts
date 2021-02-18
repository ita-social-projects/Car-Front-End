import { Client } from "@microsoft/microsoft-graph-client";
import AuthManager from "./AuthManager";

require("isomorphic-fetch");

class GraphAuthProvider {
    getAccessToken = async () => {
        const token = await AuthManager.getAccessTokenAsync();
        return token || "";
    };
}

const clientOptions = {
    authProvider: new GraphAuthProvider()
};

const graphClient = Client.initWithMiddleware(clientOptions);

class GraphManager {
    static getUserAsync = async () => {
        return graphClient
            .api("/me")
            .select(
                "id,displayName,givenName,mail,position,mailboxSettings,userPrincipalName,officeLocation,surname"
            )
            .get();
    };
}

export default GraphManager;
