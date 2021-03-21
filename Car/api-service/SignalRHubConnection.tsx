import { HubConnection, HubConnectionBuilder, LogLevel } from "@microsoft/signalr";
import APIConfig from "./APIConfig";

let SignalRHubConnection: HubConnection;

(() => {
    const SignalRubConnectionFunc = new HubConnectionBuilder()
        .configureLogging(LogLevel.None)
        .withUrl(APIConfig.URL + "signalr/")
        .withAutomaticReconnect()
        .build();

    SignalRubConnectionFunc.start();
    SignalRHubConnection = SignalRubConnectionFunc;
})();

export default SignalRHubConnection;
