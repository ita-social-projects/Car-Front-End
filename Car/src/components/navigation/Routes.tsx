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
import CheckAchiev from "../check-achievements/CheckAchiev";

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

    const navigator = user ? (
        !user?.isPolicyAccepted ?
            <Stack.Screen
                name="PrivacyPolicy"
                component={PrivacyPolicyPage}
                options={{
                    headerShown: false,
                }}
            /> :
            <Stack.Screen
                name="AppTabs"
                component={AppTabs}
                options={{
                    headerShown: false,
                }}
            />
    ) : (
        <Stack.Screen name="Login" component={Login} />
    );

    return (
        <Root>
            <CheckAchiev>
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
            </CheckAchiev>
        </Root>
    );
};

export default Routes;
