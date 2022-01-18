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
import Language from "../settings-activity/app-settings/app-settings-activity/Language";
import Payment from "../settings-activity/app-settings/app-settings-activity/Payment";
import HelpCenter from "../settings-activity/app-settings/app-settings-activity/HelpCenter";
import { useTheme } from "../../../../../components/theme/ThemeProvider";

const StackTabs = createStackNavigator();

const SettingsTabs = () => {
    const { colors, isThemeDark } = useTheme();

    return (
        <View style={{ flex: 1, alignSelf: "stretch" }}>
            <StackTabs.Navigator>
                <StackTabs.Screen
                    name="Settings"
                    component={Settings}
                    options={{
                        headerTitle: "Settings",
                        headerTitleAlign: "center",
                        headerStyle: [HeaderStyle.border,
                            { borderBottomColor: !isThemeDark ? colors.secondaryLight : colors.neutralLight }],
                        headerTitleStyle: [HeaderStyle.headerTitleStyle, { color: colors.primary }],
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
                        headerTitleStyle: [HeaderStyle.headerTitleStyle, { color: colors.primary }],
                        headerLeft: HeaderBackButton
                    }}
                />
                <StackTabs.Screen
                    name="NotificationSettings"
                    component={NotificationSettings}
                    options={{
                        headerTitle: "Notifications Settings",
                        headerTitleAlign: "center",
                        headerTitleStyle: [HeaderStyle.headerTitleStyle, { color: colors.primary }],
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
                        headerTitleStyle: [HeaderStyle.headerTitleStyle, { color: colors.primary }],
                        headerLeft: HeaderBackButton,
                        headerRight: HeaderEllipsis
                    }}
                />
                <StackTabs.Screen
                    name="Language"
                    component={Language}
                    options={{
                        headerTitle: "Language",
                        headerTitleAlign: "center",
                        headerTitleStyle: [HeaderStyle.headerTitleStyle, { color: colors.primary }],
                        headerLeft: HeaderBackButton,
                        headerRight: HeaderEllipsis
                    }}
                />
                <StackTabs.Screen
                    name="Payment"
                    component={Payment}
                    options={{
                        headerTitle: "Payment",
                        headerTitleAlign: "center",
                        headerTitleStyle: [HeaderStyle.headerTitleStyle, { color: colors.primary }],
                        headerLeft: HeaderBackButton,
                        headerRight: HeaderEllipsis
                    }}
                />
                <StackTabs.Screen
                    name="HelpCenter"
                    component={HelpCenter}
                    options={{
                        headerTitle: "Help Center",
                        headerTitleAlign: "center",
                        headerTitleStyle: [HeaderStyle.headerTitleStyle, { color: colors.primary }],
                        headerLeft: HeaderBackButton,
                        headerRight: HeaderEllipsis
                    }}
                />
            </StackTabs.Navigator>
        </View>
    );
};

export default SettingsTabs;
