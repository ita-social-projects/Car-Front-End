import React, { useEffect } from "react";
import AuthProvider from "../auth/AuthProvider";
import ErrorAlert from "../error-alert/ErrorAlert";
import Routes from "./Routes";
import NetInfo from "@react-native-community/netinfo";

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
        <AuthProvider>
            <Routes />
        </AuthProvider>
    );
};

export default Providers;
