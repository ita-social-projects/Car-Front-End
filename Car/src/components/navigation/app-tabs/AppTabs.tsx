import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import React, { useContext, useEffect, useState } from "react";
import Ionicons from "react-native-vector-icons/Ionicons";
import JourneyTabs from "../../../activity/journey/journey-tabs/JourneyTabs";
import MessagesTabs from "../../../activity/messages/messages-tabs/MessagesTabs";
import MyProfileTabs from "../../../activity/my-profile/my-profile-tabs/MyProfileTabs";
import NotificationsTabs from "../../../activity/notifications/notifications-tabs/NotificationsTabs";
import AppTabsStyle from "./AppTabsStyle";
import AuthContext from "../../auth/AuthContext";
import NotificationsService from "../../../../api-service/notifications-service/NotificationsService";
import SignalRHubConnection from "../../../../api-service/SignalRHubConnection";
import { EMPTY_COLLECTION_LENGTH } from "../../../constants/GeneralConstants";
import DM from "../../styles/DM";
import updateLocale from "../../styles/DTFormat";
import { TouchableOpacity } from "react-native-gesture-handler";
import { TAB_WIDTH } from "../../../constants/StylesConstants";

const Tabs = createBottomTabNavigator();

const CustomTabButton = (props: any) => (
    <TouchableOpacity
        {...props}
        style={
            props.accessibilityState.selected
                ? [
                    props.style,
                    {
                        borderTopColor: DM("black"),
                        borderTopWidth: 2,
                        width: TAB_WIDTH,
                    },
                ]
                : [props.style, { width: TAB_WIDTH }]
        }
    />
);

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
        updateLocale();
    });

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
            }}
        >
            <Tabs.Screen
                name="MessagesTabs"
                component={MessagesTabs}
                options={() => ({
                    tabBarLabel: "Chats",
                    tabBarButton: CustomTabButton
                })}
            />
            <Tabs.Screen
                options={() => ({
                    tabBarLabel: "My Profile",
                    tabBarButton: CustomTabButton
                })}
                name="MyProfileTabs"
                component={MyProfileTabs}
            />
            <Tabs.Screen
                options={() => ({
                    tabBarLabel: "Ride",
                    tabBarButton: CustomTabButton
                })}
                name="JourneyTabs"
                component={JourneyTabs}
            />
            <Tabs.Screen
                options={{
                    tabBarLabel: "Notifications",
                    tabBarBadge: tabBarBadge,
                    tabBarButton: CustomTabButton,
                }}
                name="NotificationsTabs"
                component={NotificationsTabs}
            />
        </Tabs.Navigator>
    );
};

export default AppTabs;
