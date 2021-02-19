import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import React, { useContext, useEffect } from "react";
import AuthParamList from "../../activity/auth/AuthParamList";
import AuthContext from "../../activity/auth/AuthContext";
import Exception from "../../activity/exception/Exception";
import Login from "../../activity/login/Login";
import AppTabs from "./app-tabs/AppTabs";
import { navigationRef } from "./Navigation";

interface RoutesProps {}

const Stack = createStackNavigator<AuthParamList>();

const Routes: React.FC<RoutesProps> = () => {
    const { user, loadStorageUser } = useContext(AuthContext);

    useEffect(() => {
        loadStorageUser();
    }, []);

    return (
        <NavigationContainer ref={navigationRef}>
            {user == null ? (
                <Stack.Navigator screenOptions={{ headerShown: false }}>
                    <Stack.Screen name="Login" component={Login} />
                    <Stack.Screen name="Exception" component={Exception} />
                </Stack.Navigator>
            ) : (
                <Stack.Navigator screenOptions={{ headerShown: false }}>
                    <Stack.Screen
                        name="AppTabs"
                        component={AppTabs}
                        options={{ headerShown: false }}
                    />
                    <Stack.Screen name="Exception" component={Exception} />
                </Stack.Navigator>
            )}
        </NavigationContainer>
    );
};

export default Routes;
