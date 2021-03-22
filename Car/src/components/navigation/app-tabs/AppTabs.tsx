import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import React, { useContext, useEffect, useState } from "react";
import Ionicons from "react-native-vector-icons/Ionicons";
import JourneyTabs from "../../../activity/journey/journey-tabs/JourneyTabs";
import MessagesTabs from "../../../activity/messages/messages-tabs/MessagesTabs";
import MyProfileTabs from "../../../activity/my-profile/my-profile-tabs/MyProfileTabs";
import NotificationsTabs from "../../../activity/notifications/notifications-tabs/NotificationsTabs";
import AppTabsStyle from "./AppTabsStyle";
import { getFocusedRouteNameFromRoute } from "@react-navigation/native";
import AuthContext from "../../auth/AuthContext";
import NotificationsService from "../../../../api-service/notifications-service/NotificationsService";
import SignalRHubConnection from "../../../../api-service/SignalRHubConnection";
import { EMPTY_COLLECTION_LENGTH, NOT_EXISTING_ELEMENT_INDEX } from "../../../constants/Constants";
import DM from "../../styles/DM";

const Tabs = createBottomTabNavigator();

const AppTabs = () => {
    const { user } = useContext(AuthContext);
    let [unreadNotificationsNumber, setUnreadNotificationsNumber] = useState(EMPTY_COLLECTION_LENGTH);

    NotificationsService.getUnreadNotificationsNumber(user?.id).then((result) =>
        setUnreadNotificationsNumber(result.data as number)
    );

    useEffect(() => {
        SignalRHubConnection.on(
            "updateUnreadNotificationsNumber",
            setUnreadNotificationsNumber
        );
    });

    const getTabBarVisibility = (route: any) => {
        const routeName = getFocusedRouteNameFromRoute(route)!;
        const hideOnScreens = ["Chat"];

        return hideOnScreens.indexOf(routeName) <= NOT_EXISTING_ELEMENT_INDEX;
    };

    const tabBarBadge = unreadNotificationsNumber > EMPTY_COLLECTION_LENGTH
        ? unreadNotificationsNumber.toString()
        : undefined;

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
                activeTintColor: DM("black"),
                inactiveTintColor: DM("#AAA9AE"),
                keyboardHidesTabBar: true
            }}
        >
            <Tabs.Screen
                name="MessagesTabs"
                component={MessagesTabs}
                options={({ route }) => ({
                    tabBarVisible: getTabBarVisibility(route),
                    tabBarLabel: "Chats"
                })}
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
                    tabBarBadge: tabBarBadge,
                }}
                name="NotificationsTabs"
                component={NotificationsTabs}
            />
        </Tabs.Navigator>
    );
};

export default AppTabs;
