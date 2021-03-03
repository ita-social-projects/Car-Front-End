import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import { View } from "react-native";
import HeaderStyle from "../../../components/styles/HeaderStyle";
import Notifications from "../Notifications";

const StackTabs = createStackNavigator();

const NotificationsTabs = () => {
    return (
        <View style={HeaderStyle.container}>
            <StackTabs.Navigator>
                <StackTabs.Screen
                    name="Notifications"
                    component={Notifications}
                    options={{
                        headerTitle: "Notifications",
                        headerTitleAlign: "center",
                        headerTitleStyle: HeaderStyle.headerTitleStyle,
                        headerLeft: () => <View />
                    }}
                />
            </StackTabs.Navigator>
        </View>
    );
};

export default NotificationsTabs;
