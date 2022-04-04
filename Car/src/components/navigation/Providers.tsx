import React from "react";
import AuthProvider from "../auth/AuthProvider";
import Routes from "./Routes";
import { AppearanceProvider } from "react-native-appearance";
import { ThemeProvider } from "../theme/ThemeProvider";
import ErrorHandler from "../error-handler/ErrorHandler";
import CheckAchieve from "../check-achievements/CheckAchieve";

const Providers = () => {
    return (
        <AppearanceProvider>
            <ErrorHandler>
                <ThemeProvider>
                    <AuthProvider>
                        <CheckAchieve>
                            <Routes />
                        </CheckAchieve>
                    </AuthProvider>
                </ThemeProvider>
            </ErrorHandler>
        </AppearanceProvider>
    );
};

export default Providers;
