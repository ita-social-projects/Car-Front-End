import { HubConnection, HubConnectionBuilder, LogLevel } from "@microsoft/signalr";
import APIRoutes from "./APIRoutes";
import AuthManager from "../src/components/auth/AuthManager";

let SignalRHubConnection: Promise<HubConnection> = (async () => {
    await AuthManager.refreshAsync();
    let token = await AuthManager.getAccessTokenAsync();
    const SignalRubConnection = new HubConnectionBuilder()
        .configureLogging(LogLevel.None)
        .withUrl(APIRoutes.getSignalRUrl(), {
            accessTokenFactory: () => `${token}`
        })
        .withAutomaticReconnect()
        .build();

    await SignalRubConnection.start();

    return SignalRubConnection;
})();

export default SignalRHubConnection;
