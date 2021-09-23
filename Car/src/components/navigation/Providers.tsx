import React, { useEffect } from "react";
import AuthProvider from "../auth/AuthProvider";
import ErrorAlert from "../error-alert/ErrorAlert";
import Routes from "./Routes";
import NetInfo from "@react-native-community/netinfo";
import { AppearanceProvider } from "react-native-appearance";
import { ThemeProvider } from "../theme/ThemeProvider";

const Providers = () => {
    async function GetConnection () {
        const connection = await NetInfo.fetch();

        if (connection.isInternetReachable === null)
            setTimeout(GetConnection);
        else if (!connection.isInternetReachable)
            ErrorAlert("No internet connection");
    }

    useEffect(() => {
        // const unsubscribe = NetInfo.addEventListener(state => {
        //     if (!state.isInternetReachable) {
        //         ErrorAlert("No internet connection");
        //     }
        // });
        GetConnection();

        return () => {
            GetConnection();
        };
    });

    return (
        <AppearanceProvider>
            <ThemeProvider>
                <AuthProvider>
                    <Routes />
                </AuthProvider>
            </ThemeProvider>
        </AppearanceProvider>
    );
};

export default Providers;
