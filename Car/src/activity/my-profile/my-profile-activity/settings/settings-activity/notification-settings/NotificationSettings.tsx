import React from "react";
import { Text, View } from "react-native";
import { useTheme } from "../../../../../../components/theme/ThemeProvider";
import NotificationSettingsStyle from "./NotificationSettingsStyle";

const NotificationSettings = () => {
    const { colors } = useTheme();

    return (
        <View style={[NotificationSettingsStyle.container, { backgroundColor: colors.white }]}>
            <Text style={{ color: colors.primary }}>
                App Settings
            </Text>
        </View>
    );
};

export default NotificationSettings;