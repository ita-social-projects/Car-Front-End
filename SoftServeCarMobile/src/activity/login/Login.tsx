import React, { useContext, useEffect, useState } from 'react';
import { ActivityIndicator, Button, Text, View } from 'react-native';
import { AuthManager } from '../auth/AuthManager';
import { AuthContext } from "../auth/AuthProvider";
import LoginStyle from './LoginStyle';

export function Login(props: any) {
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
    }

    const startRefresher = () => {
        var intervalId = setInterval(
            () => { refresher(intervalId) }
            , 500);
    }

    useEffect(() => {
        props.navigation.addListener('focus', startRefresher);
        return () => {
            props.navigation.removeListener('focus', startRefresher)
        }
    }, []);

    function loadingProcess(value: boolean) {
        setButtonDisabled(value);
        setLoading(value);
    }

    let loader: any;

    if (loading) {
        loader = <ActivityIndicator style={LoginStyle.loadingIcon} size="large" color="black" />
    }
    else {
        loader = null;
    }

    return (
        <View style={{ flex: 1, justifyContent: "space-around", alignItems: "center" }}>
            <View style={LoginStyle.container}>
                <Text style={LoginStyle.loginPageTextGreeting}>Welcome to</Text>
                <Text style={LoginStyle.loginPageTextName}>Softserve Journeys</Text>
            </View>
            <View style={LoginStyle.loginButton} >
                {loader}
                <Button color="black" title="Login" disabled={buttonDisabled}
                    onPress={() => {
                        login();
                        loadingProcess(true);
                    }} />
            </View>
        </View>
    )
}
