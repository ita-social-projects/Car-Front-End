import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import React from "react";
import Ionicons from "react-native-vector-icons/Ionicons";
import JourneyTabs from "../../../activity/journey/journey-tabs/JourneyTabs";
import MessagesTabs from "../../../activity/messages/messages-tabs/MessagesTabs";
import MyProfileTabs from "../../../activity/my-profile/my-profile-tabs/MyProfileTabs";
import Notifications from "../../../activity/notifications/Notifications";
import { AppTabsList } from "./AppTabsList";
import AppTabsStyle from "./AppTabsStyle";

interface AppTabsProps {}

const Tabs = createBottomTabNavigator<AppTabsList>();

export const AppTabs: React.FC<AppTabsProps> = () => {
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
                        case "Notifications":
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
            <Tabs.Screen name="Notifications" component={Notifications} />
        </Tabs.Navigator>
    );
};
