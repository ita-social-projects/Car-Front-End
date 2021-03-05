import React from "react";
import { Text, View } from "react-native";
import SettingsStyle from "./SettingsStyle";
import TouchableNavigationCard from "../touchable-navigation-card/TouchableNavigationCard";
import { TouchableOpacity } from "react-native-gesture-handler";

const Settings = (props: any) => {
    return (
        <View style={SettingsStyle.container}>
            <TouchableOpacity style={SettingsStyle.profileInfo} ></TouchableOpacity>
            <TouchableNavigationCard
                navigation={props.navigation}
                navigationName="AppSettings"
                cardName="App Settings"
                angle="0"
            >
                <Text style={SettingsStyle.cardText}>
                    App Settings
                </Text>
            </TouchableNavigationCard>
            <TouchableNavigationCard
                navigation={props.navigation}
                navigationName="NotificationSettings"
                cardName="Notifications Settings"
                angle="0"
            >
                <Text style={SettingsStyle.cardText}>
                    Notifications Settings
                </Text>
            </TouchableNavigationCard>
            <TouchableNavigationCard
                navigation={props.navigation}
                navigationName="ChatSettings"
                cardName="Chats Settings"
                angle="0"
            >
                <Text style={SettingsStyle.cardText}>
                    Chats Settings
                </Text>
            </TouchableNavigationCard>
        </View>
    );
};

export default Settings;
