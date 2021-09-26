import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import React, { useEffect, useState } from "react";
import Ionicons from "react-native-vector-icons/Ionicons";
import JourneyTabs from "../../../activity/journey/journey-tabs/JourneyTabs";
import MessagesTabs from "../../../activity/messages/messages-tabs/MessagesTabs";
import MyProfileTabs from "../../../activity/my-profile/my-profile-tabs/MyProfileTabs";
import NotificationsTabs from "../../../activity/notifications/notifications-tabs/NotificationsTabs";
import AppTabsStyle from "./AppTabsStyle";
import NotificationsService from "../../../../api-service/notifications-service/NotificationsService";
import SignalRHubConnection from "../../../../api-service/SignalRHubConnection";
import ReceivedMessagesService from "../../../../api-service/received-messages-service/ReceivedMessagesService";
import { EMPTY_COLLECTION_LENGTH } from "../../../constants/GeneralConstants";
import updateLocale from "../../styles/DTFormat";
import { useTheme } from "../../theme/ThemeProvider";

const Tabs = createBottomTabNavigator();

const AppTabs = () => {
    const { DM } = useTheme();
    let [unreadNotificationsNumber, setUnreadNotificationsNumber] = useState(EMPTY_COLLECTION_LENGTH);
    let [unreadMessagesNumber, setUnreadMessagesNumber] = useState(EMPTY_COLLECTION_LENGTH);

    NotificationsService.getUnreadNotificationsNumber().then((result) =>
        setUnreadNotificationsNumber(result.data as number)
    );

    ReceivedMessagesService.getAllUnreadMessagesNumber().then((result) =>
        setUnreadMessagesNumber(result.data as number)
    );

    useEffect(() => {
        SignalRHubConnection.on(
            "updateUnreadNotificationsNumber",
            setUnreadNotificationsNumber
        );

        SignalRHubConnection.on(
            "updateUnreadMessagesNumber",
            setUnreadMessagesNumber
        );

        updateLocale();
    });

    const tabBarBadge = unreadNotificationsNumber > EMPTY_COLLECTION_LENGTH
        ? unreadNotificationsNumber.toString()
        : undefined;

    const tabBarUnreadMessages = unreadMessagesNumber > EMPTY_COLLECTION_LENGTH
        ? unreadMessagesNumber.toString()
        :undefined;

    return (
        <Tabs.Navigator
            initialRouteName="JourneyTabs"
            sceneContainerStyle={AppTabsStyle.navigator}
            screenOptions={({ route }) => ({
                tabBarIcon: ({ color, size }) => {
                    let iconName: string;

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
                        <Ionicons name={iconName!} size={size} color={color} />
                    );
                }
            })}
            tabBarOptions={{
                labelStyle: AppTabsStyle.labelStyle,
                activeTintColor: DM("#FFFFFF"),
                inactiveTintColor: DM("#414045"),
                activeBackgroundColor: DM("#414045"),
                inactiveBackgroundColor: DM("#FFFFFF"),
            }}
        >
            <Tabs.Screen
                name="MessagesTabs"
                component={MessagesTabs}
                options={() => ({
                    tabBarLabel: "Chats",
                    tabBarBadge : tabBarUnreadMessages,
                    tabBarBadgeStyle: { backgroundColor: "#fcba03", color: "#ffffff" }
                })}
            />
            <Tabs.Screen
                options={() => ({
                    tabBarLabel: "My Profile",
                })}
                name="MyProfileTabs"
                component={MyProfileTabs}
            />
            <Tabs.Screen
                options={() => ({
                    tabBarLabel: "Ride",
                })}
                name="JourneyTabs"
                component={JourneyTabs}
            />
            <Tabs.Screen
                options={{
                    tabBarLabel: "Notifications",
                    tabBarBadge: tabBarBadge,
                    tabBarBadgeStyle: { backgroundColor: "#EC6400", color: "#ffffff" }
                }}
                name="NotificationsTabs"
                component={NotificationsTabs}
            />
        </Tabs.Navigator>
    );
};

export default AppTabs;
