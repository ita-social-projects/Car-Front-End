import React from "react";
import { Text, View } from "react-native";
import { useTheme } from "../../../../../../components/theme/ThemeProvider";
import ChatSettingsStyle from "./ChatSettingsStyle";

const ChatSettings = () => {
    const { colors } = useTheme();

    return (
        <View style={[ChatSettingsStyle.container, { backgroundColor: colors.white }]}>
            <Text style={{ color: colors.primary }}>
                App Settings
            </Text>
        </View>
    );
};

export default ChatSettings;