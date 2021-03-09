import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import HeaderStyle from "../../../../../components/styles/HeaderStyle";
import * as navigation from "../../../../../components/navigation/Navigation";
import AppSettings from "../settings-activity/app-settings/AppSettings";
import NotificationSettings from "../settings-activity/notification-settings/NotificationSettings";
import ChatSettings from "../settings-activity/chat-settings/ChatSettings";
import Settings from "../Settings";
import RNRestart from "react-native-restart";
import AsyncStorage from "@react-native-community/async-storage";

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
                        headerTitleStyle: HeaderStyle.headerTitleStyle,
                        headerLeft: () => (
                            <TouchableOpacity
                                style={HeaderStyle.backButtonOpacity}
                                onPress={() => {
                                    navigation.goBack();
                                }}
                            >
                                <Ionicons
                                    name={"chevron-back-outline"}
                                    size={35}
                                    color={"#02A2CF"}
                                />
                                <View style={HeaderStyle.backButtonTextView}>
                                    <Text style={HeaderStyle.buttonText}>
                                        Back
                                    </Text>
                                </View>
                            </TouchableOpacity>
                        ),
                        headerRight: () => (
                            <TouchableOpacity
                                style={HeaderStyle.requestButton}
                                onPress={() => {
                                    (async () => { await AsyncStorage.removeItem("user"); })().then(() =>
                                        RNRestart.Restart());
                                }}
                            >
                                <Text style={[HeaderStyle.buttonText, HeaderStyle.orangeButtonText]}>
                                    Logout
                                </Text>
                            </TouchableOpacity>
                        )
                    }}
                />
                <StackTabs.Screen
                    name="AppSettings"
                    component={AppSettings}
                    options={{
                        headerTitle: "App Settings",
                        headerTitleAlign: "center",
                        headerTitleStyle: HeaderStyle.headerTitleStyle,
                        headerLeft: () => (
                            <TouchableOpacity
                                style={HeaderStyle.backButtonOpacity}
                                onPress={() => {
                                    navigation.goBack();
                                }}
                            >
                                <Ionicons
                                    name={"chevron-back-outline"}
                                    size={35}
                                    color={"#02A2CF"}
                                />
                                <View
                                    style={
                                        HeaderStyle.backButtonTextView
                                    }
                                >
                                    <Text
                                        style={HeaderStyle.buttonText}
                                    >
                                        Back
                                    </Text>
                                </View>
                            </TouchableOpacity>
                        )
                    }}
                />
                <StackTabs.Screen
                    name="NotificationSettings"
                    component={NotificationSettings}
                    options={{
                        headerTitle: "Notifications Settings",
                        headerTitleAlign: "center",
                        headerTitleStyle: HeaderStyle.headerTitleStyle,
                        headerLeft: () => (
                            <TouchableOpacity
                                style={HeaderStyle.backButtonOpacity}
                                onPress={() => {
                                    navigation.goBack();
                                }}
                            >
                                <Ionicons
                                    name={"chevron-back-outline"}
                                    size={35}
                                    color={"#02A2CF"}
                                />
                                <View
                                    style={
                                        HeaderStyle.backButtonTextView
                                    }
                                >
                                    <Text
                                        style={HeaderStyle.buttonText}
                                    >
                                        Back
                                    </Text>
                                </View>
                            </TouchableOpacity>
                        ),
                        headerRight: () => (
                            <TouchableOpacity onPress={() => {}}>
                                <Ionicons
                                    name={"ellipsis-horizontal"}
                                    size={30}
                                    style={HeaderStyle.moreOptionsIcon}
                                />
                            </TouchableOpacity>
                        )
                    }}
                />
                <StackTabs.Screen
                    name="ChatSettings"
                    component={ChatSettings}
                    options={{
                        headerTitle: "Chats Settings",
                        headerTitleAlign: "center",
                        headerTitleStyle: HeaderStyle.headerTitleStyle,
                        headerLeft: () => (
                            <TouchableOpacity
                                style={HeaderStyle.backButtonOpacity}
                                onPress={() => {
                                    navigation.goBack();
                                }}
                            >
                                <Ionicons
                                    name={"chevron-back-outline"}
                                    size={35}
                                    color={"#02A2CF"}
                                />
                                <View
                                    style={
                                        HeaderStyle.backButtonTextView
                                    }
                                >
                                    <Text
                                        style={HeaderStyle.buttonText}
                                    >
                                        Back
                                    </Text>
                                </View>
                            </TouchableOpacity>
                        ),
                        headerRight: () => (
                            <TouchableOpacity onPress={() => {}}>
                                <Ionicons
                                    name={"ellipsis-horizontal"}
                                    size={30}
                                    style={HeaderStyle.moreOptionsIcon}
                                />
                            </TouchableOpacity>
                        )
                    }}
                />
            </StackTabs.Navigator>
        </View>
    );
};

export default SettingsTabs;