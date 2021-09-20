import React, { useEffect } from "react";
import AuthProvider from "../auth/AuthProvider";
import ErrorAlert from "../error-alert/ErrorAlert";
import Routes from "./Routes";
import NetInfo from "@react-native-community/netinfo";
import { AppearanceProvider } from "react-native-appearance";
import { ThemeProvider } from "../theme/ThemeProvider";

const Providers = () => {
    useEffect(() => {
        const unsubscribe = NetInfo.addEventListener(state => {
            if (!state.isInternetReachable) {
                ErrorAlert("No internet connection");
            }
        });

        return () => {
            unsubscribe();
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
