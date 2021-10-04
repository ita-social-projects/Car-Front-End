import React from "react";
import { Text, View } from "react-native";
import { useTheme } from "../../../../../../components/theme/ThemeProvider";
import ChatSettingsStyle from "./ChatSettingsStyle";

const ChatSettings = () => {
    const { DM } = useTheme();

    return (
        <View style={[ChatSettingsStyle.container, { backgroundColor: DM("#FFFFFF") }]}>
            <Text style={{ color: DM("black") }}>
                App Settings
            </Text>
        </View>
    );
};

export default ChatSettings;