import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import React, { useContext, useEffect, useState } from "react";
import AuthParamList from "../auth/AuthParamList";
import AuthContext from "../auth/AuthContext";
import Login from "../../activity/login/Login";
import AppTabs from "./app-tabs/AppTabs";
import PrivacyPolicyPage from "../../activity/privacy-policy/PrivacyPolicy";
import { navigationRef } from "./Navigation";
import Indicator from "../activity-indicator/Indicator";
import AsyncStorage from "@react-native-community/async-storage";
import { MILLISECONDS_IN_MONTH } from "../../constants/DimensionConstants";
import { StatusBar } from "react-native";
import { useTheme } from "../theme/ThemeProvider";
import { Root } from "../popup-error/ExportComponents";

const Stack = createStackNavigator<AuthParamList>();

const Routes = () => {
    const { colors, isThemeDark } = useTheme();
    const { user, loadStorageUser } = useContext(AuthContext);
    const [isLoading, setLoading] = useState(true);

    const navigationTheme = {
        dark: true,
        colors: {
            primary: colors.primary,
            background: colors.white,
            card: colors.white,
            text: colors.primary,
            border: colors.secondaryLight,
            notification: colors.accentRed,
        },
    };

    useEffect(() => {
        (async () => {
            const currentLogin = new Date();
            const lastLogin = new Date(
                (await AsyncStorage.getItem("lastLogin")) as string
            );

            if (
                Math.abs(currentLogin.getTime() - lastLogin.getTime()) >
                MILLISECONDS_IN_MONTH
            ) {
                await AsyncStorage.setItem("lastLogin", currentLogin.toUTCString());
                await AsyncStorage.removeItem("user");
            }
        })().then(() =>
            (async () => loadStorageUser())().then(() => setLoading(false))
        );
    }, []);

    const getPrivacyPolicyOrAppTabs = ()=>{
        if (!user?.isPolicyAccepted)
        {
            return(
                <Stack.Screen
                    name="PrivacyPolicy"
                    component={PrivacyPolicyPage}
                    options={{
                        headerShown: false,
                    }}
                />);
        }

        return(
            <Stack.Screen
                name="AppTabs"
                component={AppTabs}
                options={{
                    headerShown: false,
                }}
            />
        );
    };

    const navigator = user ?
        getPrivacyPolicyOrAppTabs():
        <Stack.Screen name="Login" component={Login} />;

    return (
        <Root>
            <StatusBar
                animated={true}
                backgroundColor={colors.white}
                barStyle={!isThemeDark ? "dark-content" : ("light-content" as any)}
            />
            <NavigationContainer
                theme={navigationTheme}
                ref={navigationRef}
            >
                {isLoading ? (
                    <Indicator
                        color={colors.hover}
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
