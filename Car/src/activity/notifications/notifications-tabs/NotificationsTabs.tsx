import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import { View } from "react-native";
import DM from "../../../components/styles/DM";
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
                        headerTitleStyle: [HeaderStyle.headerTitleStyle, { color: DM("black") }],
                        headerLeft: () => <View />
                    }}
                />
            </StackTabs.Navigator>
        </View>
    );
};

export default NotificationsTabs;
