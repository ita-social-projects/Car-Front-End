import React from "react";
import { Text, View } from "react-native";
import { useTheme } from "../../../../../../components/theme/ThemeProvider";
import NotificationSettingsStyle from "./NotificationSettingsStyle";

const NotificationSettings = () => {
    const { DM } = useTheme();

    return (
        <View style={[NotificationSettingsStyle.container, { backgroundColor: DM("#FFFFFF") }]}>
            <Text style={{ color: DM("black") }}>
                App Settings
            </Text>
        </View>
    );
};

export default NotificationSettings;