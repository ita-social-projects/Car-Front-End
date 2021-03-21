import React from "react";
import { Text, View } from "react-native";
import DM from "../../../../../../components/styles/DM";
import NotificationSettingsStyle from "./NotificationSettingsStyle";

const NotificationSettings = () => {
    return (
        <View style={[NotificationSettingsStyle.container, { backgroundColor: DM("#FFFFFF") }]}>
            <Text style={{ color: DM("black") }}>
                App Settings
            </Text>
        </View>
    );
};

export default NotificationSettings;