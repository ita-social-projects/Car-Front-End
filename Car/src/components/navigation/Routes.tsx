import { NavigationContainer, DarkTheme } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import React, { useContext, useEffect, useState } from "react";
import AuthParamList from "../auth/AuthParamList";
import AuthContext from "../auth/AuthContext";
import Login from "../../activity/login/Login";
import AppTabs from "./app-tabs/AppTabs";
import { navigationRef } from "./Navigation";
import Indicator from "../activity-indicator/Indicator";
import AsyncStorage from "@react-native-community/async-storage";
import { MILISECONDS_IN_MONTH } from "../../constants/Constants";
import { StatusBar } from "react-native";
import DM from "../styles/DM";
import changeNavigationBarColor from "react-native-navigation-bar-color";

const Stack = createStackNavigator<AuthParamList>();

export let isDarkMode: boolean;

const Routes = () => {
    const { user, loadStorageUser } = useContext(AuthContext);
    const [isLoading, setLoading] = useState(true);
    const { Root } = require("popup-ui");

    useEffect(() => {
        (async () => {
            const currentLogin = new Date();
            const lastLogin = new Date(
                (await AsyncStorage.getItem("lastLogin")) as string
            );

            if (Math.abs(currentLogin.getTime() - lastLogin.getTime()) > MILISECONDS_IN_MONTH) {
                await AsyncStorage.setItem(
                    "lastLogin",
                    currentLogin.toUTCString()
                );
                await AsyncStorage.removeItem("user");
            }
        })().then(() =>
            (async () => loadStorageUser())().then(() => setLoading(false)));

        AsyncStorage.getItem("isDarkMode").then((res) => {
            changeNavigationBarColor(res === "true" ? "#141414" : "#FFFFFF", false, true);
            isDarkMode = res === "true";
        });

    }, []);

    const navigator = user ? (
        <Stack.Screen
            name="AppTabs"
            component={AppTabs}
            options={{
                headerShown: false
            }}
        />
    ) : (
        <Stack.Screen
            name="Login"
            component={Login}
        />
    );

    return (
        <Root>
            <StatusBar
                animated={true}
                backgroundColor={DM("#121212")}
                barStyle={DM("dark-content") as any}/>
            <NavigationContainer
                theme={isDarkMode ? DarkTheme : undefined}
                ref={navigationRef}>
                {isLoading ? (
                    <Indicator
                        color={DM("#414045")}
                        size="large"
                        text="Loading information..."
                    />
                ) : (
                    <Stack.Navigator screenOptions={{ headerShown: false }}>
                        {navigator}
                    </Stack.Navigator>
                )}
            </NavigationContainer>
        </Root>
    );
};

export default Routes;
