import React from "react";
import { Text, View } from "react-native";
import NotificationSettingsStyle from "./NotificationSettingsStyle";

const NotificationSettings = () => {
    return (
        <View style={NotificationSettingsStyle.containert}>
            <Text style={NotificationSettingsStyle.text}>
                App Settings
            </Text>
        </View>
    );
};

export default NotificationSettings;