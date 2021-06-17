import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import { View } from "react-native";
import DM from "../../../components/styles/DM";
import HeaderStyle from "../../../components/styles/HeaderStyle";
import Notifications from "../Notifications";
import RouteView from "../../../components/journey-new-applicant/RouteView/RouteView";
import HeaderBackButton from "../../../components/header-back-button/HeaderBackButton";

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
                <StackTabs.Screen
                    name="Route View"
                    component={RouteView}
                    options={{
                        headerTitle: "View Stops",
                        headerTitleAlign: "center",
                        headerTitleStyle: [HeaderStyle.headerTitleStyle, { color: DM("black") }],
                        headerLeft: HeaderBackButton
                    }}
                />
            </StackTabs.Navigator>
        </View>
    );
};

export default NotificationsTabs;
