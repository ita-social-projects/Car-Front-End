import { HubConnection, HubConnectionBuilder, LogLevel } from "@microsoft/signalr";
import APIRoutes from "./APIRoutes";

let SignalRHubConnection: HubConnection;

(() => {
    const SignalRubConnectionFunc = new HubConnectionBuilder()
        .configureLogging(LogLevel.None)
        .withUrl(APIRoutes.getSignalRUrl())
        .withAutomaticReconnect()
        .build();

    SignalRubConnectionFunc.start();
    SignalRHubConnection = SignalRubConnectionFunc;
})();

export default SignalRHubConnection;
