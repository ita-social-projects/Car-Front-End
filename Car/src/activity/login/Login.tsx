import React, { useContext, useEffect, useState } from "react";
import { ActivityIndicator, Text, TouchableOpacity, View } from "react-native";
import AuthManager from "../auth/AuthManager";
import AuthContext from "../auth/AuthContext";
import LoginStyle from "./LoginStyle";

const Login = (props: any) => {
    const { login } = useContext(AuthContext);
    const [loading, setLoading] = useState(false);
    const [buttonDisabled, setButtonDisabled] = useState(false);

    const refresher = async (props: any) => {
        const apiToken = await AuthManager.getAPIToken();
        const accessToken = await AuthManager.getAccessTokenAsync();
        if (apiToken) {
            clearInterval(props);
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
        var intervalId = setInterval(() => {
            refresher(intervalId);
        }, 500);
    };

    useEffect(() => {
        props.navigation.addListener("focus", startRefresher);
        return () => {
            props.navigation.removeListener("focus", startRefresher);
        };
    }, []);

    function loadingProcess(value: boolean) {
        setButtonDisabled(value);
        setLoading(value);
    }

    let loader: any;

    if (loading) {
        loader = (
            <ActivityIndicator
                style={LoginStyle.loadingIcon}
                size="large"
                color="black"
            />
        );
    } else {
        loader = null;
    }

    return (
        <View style={LoginStyle.pageContainer}>
            <View style={LoginStyle.greetingTextContainer}>
                <Text style={LoginStyle.greetingText}>Welcome to</Text>
            </View>

            <View style={LoginStyle.applicationNameTextContainer}>
                <Text style={LoginStyle.applicationNameText}>
                    Softserve Journeys
                </Text>
            </View>

            <View style={LoginStyle.loginContainer}>
                <View style={LoginStyle.buttonContainer}>
                    {loader}
                    <TouchableOpacity
                        style={[
                            LoginStyle.button,
                            buttonDisabled && LoginStyle.pressedButton
                        ]}
                        disabled={buttonDisabled}
                        activeOpacity={1}
                        onPress={() => {
                            login();
                            loadingProcess(true);
                            setButtonDisabled(true);
                        }}
                    >
                        <Text style={LoginStyle.buttonText}>Login</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
};

export default Login;
