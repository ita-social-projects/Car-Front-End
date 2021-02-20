import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import React, { useEffect, useState } from "react";
import Ionicons from "react-native-vector-icons/Ionicons";
import JourneyTabs from "../../../activity/journey/journey-tabs/JourneyTabs";
import MessagesTabs from "../../../activity/messages/messages-tabs/MessagesTabs";
import MyProfileTabs from "../../../activity/my-profile/my-profile-tabs/MyProfileTabs";
import NotificationsTabs from "../../../activity/notifications/notifications-tabs/NotificationsTabs";
import AppTabsList from "./AppTabsList";
import AppTabsStyle from "./AppTabsStyle";
import * as signalR from "@microsoft/signalr";
import routes from "../../../../api-service/EnvironmentRoutes";

interface AppTabsProps {}

const Tabs = createBottomTabNavigator<AppTabsList>();

const AppTabs: React.FC<AppTabsProps> = () => {
    let [unreadNotificationsNumber, setUnreadNotificationsNumber] = useState(0);
    const hubConnection = new signalR.HubConnectionBuilder()
        .withUrl(routes.notificationUrl)
        .build();
    hubConnection.start();

    useEffect(() => {
        hubConnection.on(
            "updateUnreadNotificationsNumber",
            setUnreadNotificationsNumber
        );
    });
    return (
        <Tabs.Navigator
            initialRouteName="JourneyTabs"
            sceneContainerStyle={AppTabsStyle.navigator}
            screenOptions={({ route }) => ({
                tabBarIcon: ({ color, size }) => {
                    let iconName;
                    switch (route.name) {
                        case "MessagesTabs":
                            iconName = "chatbubbles";
                            break;
                        case "MyProfileTabs":
                            iconName = "person";
                            break;
                        case "JourneyTabs":
                            iconName = "car";
                            break;
                        case "NotificationsTabs":
                            iconName = "notifications";
                            break;
                    }

                    return (
                        <Ionicons name={iconName} size={size} color={color} />
                    );
                }
            })}
            tabBarOptions={{
                labelStyle: AppTabsStyle.labelStyle,
                activeTintColor: "black",
                inactiveTintColor: "#AAA9AE"
            }}
        >
            <Tabs.Screen
                name="MessagesTabs"
                component={MessagesTabs}
                options={{ tabBarLabel: "Messages" }}
            />
            <Tabs.Screen
                options={{ tabBarLabel: "My Profile" }}
                name="MyProfileTabs"
                component={MyProfileTabs}
            />
            <Tabs.Screen
                options={{
                    tabBarLabel: "Journey"
                }}
                name="JourneyTabs"
                component={JourneyTabs}
            />
            <Tabs.Screen
                options={{
                    tabBarLabel: "Notifications",
                    tabBarBadge:
                        unreadNotificationsNumber > 0
                            ? unreadNotificationsNumber.toString()
                            : undefined
                }}
                name="NotificationsTabs"
                component={NotificationsTabs}
            />
        </Tabs.Navigator>
    );
};

export default AppTabs;
