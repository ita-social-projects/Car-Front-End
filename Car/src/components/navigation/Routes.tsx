import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import React, { useContext, useEffect, useState } from "react";
import AuthParamList from "../auth/AuthParamList";
import AuthContext from "../auth/AuthContext";
import Login from "../../activity/login/Login";
import AppTabs from "./app-tabs/AppTabs";
import { navigationRef } from "./Navigation";
import Indicator from "../activity-indicator/Indicator";
import AsyncStorage from "@react-native-community/async-storage";
import { HubConnection, HubConnectionBuilder } from "@microsoft/signalr";
import APIConfig from "../../../api-service/APIConfig";

const Stack = createStackNavigator<AuthParamList>();
const MILISECONDS_IN_MONTH = 2629800000;

export let hubConnection = (null as unknown) as HubConnection;

const Routes = () => {
    const { user, loadStorageUser } = useContext(AuthContext);
    const [isLoading, setLoading] = useState(true);

    useEffect(() => {
        (async () => {
            const currentLogin = new Date();
            const lastLogin = new Date(
                (await AsyncStorage.getItem("lastLogin")) as string
            );
            if (
                Math.abs(currentLogin.getTime() - lastLogin.getTime()) >
                MILISECONDS_IN_MONTH
            ) {
                await AsyncStorage.setItem(
                    "lastLogin",
                    currentLogin.toUTCString()
                );
                await AsyncStorage.removeItem("user");
            }
        })()
            .then(() =>
                (async () => loadStorageUser())().then(() => setLoading(false))
            )
            .then(() => {
                if (user) {
                    const hubConnectionFunc = new HubConnectionBuilder()
                        .withUrl(APIConfig.URL + "Chat/")
                        .build();
                    hubConnectionFunc
                        ?.start()
                        .then(() => "Connection started!");
                    hubConnection = hubConnectionFunc;
                }
            });
    }, [0]);

    const navigator = user ? (
        <Stack.Screen
            name="AppTabs"
            component={AppTabs}
            options={{ headerShown: false }}
        />
    ) : (
        <Stack.Screen name="Login" component={Login} />
    );

    return (
        <NavigationContainer ref={navigationRef}>
            {isLoading ? (
                <Indicator
                    color="#414045"
                    size="large"
                    text="Loading information..."
                />
            ) : (
                <Stack.Navigator screenOptions={{ headerShown: false }}>
                    {navigator}
                </Stack.Navigator>
            )}
        </NavigationContainer>
    );
};

export default Routes;
