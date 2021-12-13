import React, { useContext, useEffect, useState } from "react";
import { ActivityIndicator, Text, TouchableOpacity, View } from "react-native";
import AuthManager from "../../components/auth/AuthManager";
import AuthContext from "../../components/auth/AuthContext";
import LoginStyle from "./LoginStyle";
import { REFRESHER_TIMEOUT } from "../../constants/AnimationConstants";
import { useTheme } from "../../components/theme/ThemeProvider";
import LoginProps from "./LoginProps";

const Login = (properties: LoginProps) => {
    const { colors } = useTheme();
    const { login } = useContext(AuthContext);
    const [loading, setLoading] = useState(false);
    const [buttonDisabled, setButtonDisabled] = useState(false);

    const refresher = async (interval: NodeJS.Timer) => {
        const user = await AuthManager.getUser();
        const accessToken = await AuthManager.getAccessTokenAsync();

        if (user) {
            clearInterval(interval);
            loadingProcess(false);
        }
        if (!user && accessToken) {
            loadingProcess(true);
        }
        if (!accessToken) {
            loadingProcess(false);
        }
    };

    const startRefresher = () => {
        var interval = setInterval(async () => {
            await refresher(interval);
        }, REFRESHER_TIMEOUT);
    };

    useEffect(() => {
        return properties.navigation.addListener("focus", startRefresher);
    }, []);

    useEffect(() => {
        if (properties.route.params?.resetIndicator) {
            loadingProcess(false);
        }
    }, [properties]);

    function loadingProcess (value: boolean) {
        setButtonDisabled(value);
        setLoading(value);
    }

    let loader: any;

    if (loading) {
        loader = (
            <ActivityIndicator
                style={LoginStyle.loadingIcon}
                size="large"
                color={colors.primary}
            />
        );
    } else {
        loader = null;
    }

    return (
        <View style={[LoginStyle.pageContainer, { backgroundColor: colors.white }]}>
            <View style={LoginStyle.greetingTextContainer}>
                <Text style={[LoginStyle.greetingText, { color: colors.primary }]}>Welcome to</Text>
            </View>

            <View style={LoginStyle.applicationNameTextContainer}>
                <Text style={[LoginStyle.applicationNameText, { color: colors.primary }]}>
                    Softserve Journeys
                </Text>
            </View>

            <View style={LoginStyle.loginContainer}>
                <View style={LoginStyle.buttonContainer}>
                    {loader}
                    <TouchableOpacity
                        style={[
                            LoginStyle.button,
                            buttonDisabled && { backgroundColor: colors.hover },
                            { backgroundColor: colors.primary }
                        ]}
                        disabled={buttonDisabled}
                        activeOpacity={1}
                        onPress={() => {
                            login();
                            loadingProcess(true);
                        }}
                    >
                        <Text style={[LoginStyle.buttonText, { color: colors.white }]}>Login</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
};

export default Login;
