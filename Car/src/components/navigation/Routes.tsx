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

const Stack = createStackNavigator<AuthParamList>();

const Routes = () => {
    const { user, loadStorageUser } = useContext(AuthContext);
    const [isLoading, setLoading] = useState(true);

    useEffect(() => {
        (async () => loadStorageUser())().then(() => setLoading(false));
    });

    return (
        <NavigationContainer ref={navigationRef}>
            {isLoading ? (
                <Indicator
                    color="#414045"
                    size="large"
                    text="Loading information..."
                />
            ) : user ? (
                <Stack.Navigator screenOptions={{ headerShown: false }}>
                    <Stack.Screen
                        name="AppTabs"
                        component={AppTabs}
                        options={{ headerShown: false }}
                    />
                    <Stack.Screen name="Exception" component={Exception} />
                </Stack.Navigator>
            ) : (
                <Stack.Navigator screenOptions={{ headerShown: false }}>
                    <Stack.Screen name="Login" component={Login} />
                    <Stack.Screen name="Exception" component={Exception} />
                </Stack.Navigator>
            )}
        </NavigationContainer>
    );
};

export default Routes;
