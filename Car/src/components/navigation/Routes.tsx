import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import React, { useContext, useEffect, useState } from "react";
import AuthParamList from "../../activity/auth/AuthParamList";
import AuthContext from "../../activity/auth/AuthContext";
import Exception from "../../activity/exception/Exception";
import Login from "../../activity/login/Login";
import AppTabs from "./app-tabs/AppTabs";
import { navigationRef } from "./Navigation";
import Indicator from "../activity-indicator/Indicator";
import AsyncStorage from "@react-native-community/async-storage";

const Stack = createStackNavigator<AuthParamList>();

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
                2629800000
            ) {
                await AsyncStorage.setItem(
                    "lastLogin",
                    currentLogin.toUTCString()
                );
                await AsyncStorage.removeItem("user");
            }
        })().then(() =>
            (async () => loadStorageUser())().then(() => setLoading(false))
        );
    }, []);

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
                    <Stack.Screen name="Exception" component={Exception} />
                </Stack.Navigator>
            )}
        </NavigationContainer>
    );
};

export default Routes;
