import React from "react";
import AuthProvider from "../auth/AuthProvider";
import Routes from "./Routes";
import { AppearanceProvider } from "react-native-appearance";
import { ThemeProvider } from "../theme/ThemeProvider";
import ErrorHandler from "../error-handler/ErrorHandler";

const Providers = () => {

    return (

        <AppearanceProvider>
            <ErrorHandler>
                <ThemeProvider>
                    <AuthProvider>
                        <Routes />
                    </AuthProvider>
                </ThemeProvider>
            </ErrorHandler>
        </AppearanceProvider>
    );
};

export default Providers;