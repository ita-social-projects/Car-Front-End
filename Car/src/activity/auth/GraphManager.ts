import { Client } from "@microsoft/microsoft-graph-client";
import AuthManager from "./AuthManager";

require("isomorphic-fetch");

const GraphAuthProvider = {
    getAccessToken: async () => {
        const token = await AuthManager.getAccessTokenAsync();
        return token || "";
    }
};

const clientOptions = {
    authProvider: GraphAuthProvider
};

const graphClient = Client.initWithMiddleware(clientOptions);

const GraphManager = {
    getUserAsync: async () => {
        return await graphClient
            .api("/me")
            .select(
                "id,displayName,givenName,mail,position,mailboxSettings,userPrincipalName,officeLocation,surname"
            )
            .get();
    }
};

export default GraphManager;
