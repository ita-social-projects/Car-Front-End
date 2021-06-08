import React, { useContext, useEffect, useState } from "react";
import { ActivityIndicator, Text, TouchableOpacity, View } from "react-native";
import AuthManager from "../../components/auth/AuthManager";
import AuthContext from "../../components/auth/AuthContext";
import LoginStyle from "./LoginStyle";
import { REFRESHER_TIMEOUT } from "../../constants/AnimationConstants";
import DM from "../../components/styles/DM";
import LoginProps from "./LoginProps";

const Login = (properties: LoginProps) => {
    const { login } = useContext(AuthContext);
    const [loading, setLoading] = useState(false);
    const [buttonDisabled, setButtonDisabled] = useState(false);

    const refresher = async (intervalId: number) => {
        const apiToken = await AuthManager.getAPIToken();
        const accessToken = await AuthManager.getAccessTokenAsync();

        if (apiToken) {
            clearInterval(intervalId);
            loadingProcess(false);
        }
        if (!apiToken && accessToken) {
            loadingProcess(true);
        }
        if (!accessToken) {
            loadingProcess(false);
        }
    };

    const startRefresher = () => {
        var intervalId = setInterval(async () => {
            await refresher(intervalId);
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
                color={DM("black")}
            />
        );
    } else {
        loader = null;
    }

    return (
        <View style={[LoginStyle.pageContainer, { backgroundColor: DM("#FFFFFF") }]}>
            <View style={LoginStyle.greetingTextContainer}>
                <Text style={[LoginStyle.greetingText, { color: DM("black") }]}>Welcome to</Text>
            </View>

            <View style={LoginStyle.applicationNameTextContainer}>
                <Text style={[LoginStyle.applicationNameText, { color: DM("black") }]}>
                    Softserve Journeys
                </Text>
            </View>

            <View style={LoginStyle.loginContainer}>
                <View style={LoginStyle.buttonContainer}>
                    {loader}
                    <TouchableOpacity
                        style={[
                            LoginStyle.button,
                            buttonDisabled && { backgroundColor: DM("#888888") },
                            { backgroundColor: DM("#000000") }
                        ]}
                        disabled={buttonDisabled}
                        activeOpacity={1}
                        onPress={() => {
                            login();
                            loadingProcess(true);
                        }}
                    >
                        <Text style={[LoginStyle.buttonText, { color: DM("white") }]}>Login</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
};

export default Login;
