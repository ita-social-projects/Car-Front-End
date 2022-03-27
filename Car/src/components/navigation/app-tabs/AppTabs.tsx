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
import { Image } from "react-native";
import CheckAchiev from "../../check-achievements/CheckAchiev";

const Tabs = createBottomTabNavigator();
const AppTabs = () => {
    const { colors } = useTheme();
    const isThemeDark = useTheme().isThemeDark;
    let [unreadNotificationsNumber, setUnreadNotificationsNumber] = useState(EMPTY_COLLECTION_LENGTH);
    let [unreadMessagesNumber, setUnreadMessagesNumber] = useState(EMPTY_COLLECTION_LENGTH);

    NotificationsService.getUnreadNotificationsNumber().then((result) =>
        setUnreadNotificationsNumber(result.data)
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
        <CheckAchiev>
            <Tabs.Navigator
                initialRouteName="JourneyTabs"
                sceneContainerStyle={AppTabsStyle.navigator}
                screenOptions={({ route }) => ({
                    tabBarIcon: ({ color, size }) => {
                        let iconName: string;

                        switch (route.name) {
                            case "MessagesTabs":
                                iconName = "useImage";
                                break;
                            case "MyProfileTabs":
                                iconName = "person";
                                break;
                            case "JourneyTabs":
                                iconName = "useImage";
                                break;
                            case "NotificationsTabs":
                                iconName = "notifications";
                                break;
                        }

                        return (
                            route.name == "MessagesTabs" || route.name == "JourneyTabs"?
                                <Image
                                    style={{ width: 30, height: 30,
                                        borderRadius:0,
                                        resizeMode: "contain" }}
                                    source = {
                                        route.name == "MessagesTabs"?
                                            isThemeDark?
                                                color == colors.weekdaysInactive?
                                                    require("../../../../assets/images/icons/lightComments.png"):
                                                    require("../../../../assets/images/icons/darkComments.png"):
                                                color == colors.white?
                                                    require("../../../../assets/images/icons/lightComments.png"):
                                                    require("../../../../assets/images/icons/grayComments.png"):
                                            isThemeDark?
                                                color == colors.weekdaysInactive?
                                                    require("../../../../assets/images/icons/lightCar.png"):
                                                    require("../../../../assets/images/icons/darkCar.png"):
                                                color == colors.white?
                                                    require("../../../../assets/images/icons/lightCar.png"):
                                                    require("../../../../assets/images/icons/grayCar.png")

                                    }
                                />:
                                <Ionicons name={iconName!} size={size} color={color} />
                        );
                    }
                })}
                tabBarOptions={{
                    labelStyle: AppTabsStyle.labelStyle,
                    activeTintColor: colors.white,
                    inactiveTintColor: colors.weekdaysInactive,
                    activeBackgroundColor: colors.hover,
                    inactiveBackgroundColor: colors.white,
                }}
            >
                <Tabs.Screen
                    name="MessagesTabs"
                    component={MessagesTabs}
                    options={() => ({
                        tabBarLabel: "Chats",
                        tabBarBadge : tabBarUnreadMessages,
                        tabBarBadgeStyle: { backgroundColor: "#EC6400", color: colors.white, fontSize:8 }
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
                        tabBarBadgeStyle: { backgroundColor: "#EC6400", color: colors.white, fontSize:8 }
                    }}
                    name="NotificationsTabs"
                    component={NotificationsTabs}
                />
            </Tabs.Navigator>
        </CheckAchiev>
    );
};

export default AppTabs;
