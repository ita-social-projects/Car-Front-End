import { HubConnection, HubConnectionBuilder } from "@microsoft/signalr";
import APIConfig from "./APIConfig";

let SignalRHubConnection: HubConnection;

(() => {
    const SignalRubConnectionFunc = new HubConnectionBuilder()
        .withUrl(APIConfig.URL + "signalr/")
        .withAutomaticReconnect()
        .build();

    SignalRubConnectionFunc.serverTimeoutInMilliseconds = 900000;
    SignalRubConnectionFunc!.start();
    SignalRHubConnection = SignalRubConnectionFunc;
})();

export default SignalRHubConnection;
