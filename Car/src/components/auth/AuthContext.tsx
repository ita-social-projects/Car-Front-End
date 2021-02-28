import React from "react";
import User from "../../../models/User";
import * as signalR from "@microsoft/signalr";
import APIConfig from "../../../api-service/APIConfig";

const returnType: any = {};

const AuthContext = React.createContext({
    user: null as User,
    login: () => returnType,
    logout: () => returnType,
    loadStorageUser: () => returnType,
});
export const SignalRHubConnection = new signalR.HubConnectionBuilder()
    .withUrl(APIConfig.URL + "Notification/")
    //.withUrl(APIConfig.URL + "Chat/")
    .build()


export default AuthContext;
