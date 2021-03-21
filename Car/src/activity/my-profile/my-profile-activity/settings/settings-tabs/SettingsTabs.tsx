import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import { View } from "react-native";
import HeaderStyle from "../../../../../components/styles/HeaderStyle";
import AppSettings from "../settings-activity/app-settings/AppSettings";
import NotificationSettings from "../settings-activity/notification-settings/NotificationSettings";
import ChatSettings from "../settings-activity/chat-settings/ChatSettings";
import Settings from "../Settings";
import HeaderBackButton from "../../../../../components/header-back-button/HeaderBackButton";
import HeaderEllipsis from "../../../../../components/header-ellipsis/HeaderEllipsis";
import HeaderLogoutButton from "../../../../../components/header-logout-button/HeaderLogoutButton";
import DM from "../../../../../components/styles/DM";

const StackTabs = createStackNavigator();

const SettingsTabs = () => {
    return (
        <View style={{ flex: 1, alignSelf: "stretch" }}>
            <StackTabs.Navigator>
                <StackTabs.Screen
                    name="Settings"
                    component={Settings}
                    options={{
                        headerTitle: "Settings",
                        headerTitleAlign: "center",
                        headerTitleStyle: [HeaderStyle.headerTitleStyle, { color: DM("black") }],
                        headerLeft: HeaderBackButton,
                        headerRight: HeaderLogoutButton
                    }}
                />
                <StackTabs.Screen
                    name="AppSettings"
                    component={AppSettings}
                    options={{
                        headerTitle: "App Settings",
                        headerTitleAlign: "center",
                        headerTitleStyle: [HeaderStyle.headerTitleStyle, { color: DM("black") }],
                        headerLeft: HeaderBackButton
                    }}
                />
                <StackTabs.Screen
                    name="NotificationSettings"
                    component={NotificationSettings}
                    options={{
                        headerTitle: "Notifications Settings",
                        headerTitleAlign: "center",
                        headerTitleStyle: [HeaderStyle.headerTitleStyle, { color: DM("black") }],
                        headerLeft: HeaderBackButton,
                        headerRight: HeaderEllipsis
                    }}
                />
                <StackTabs.Screen
                    name="ChatSettings"
                    component={ChatSettings}
                    options={{
                        headerTitle: "Chats Settings",
                        headerTitleAlign: "center",
                        headerTitleStyle: [HeaderStyle.headerTitleStyle, { color: DM("black") }],
                        headerLeft: HeaderBackButton,
                        headerRight: HeaderEllipsis
                    }}
                />
            </StackTabs.Navigator>
        </View>
    );
};

export default SettingsTabs;