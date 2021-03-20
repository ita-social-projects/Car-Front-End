import React from "react";
import { Text, View } from "react-native";
import ChatSettingsStyle from "./ChatSettingsStyle";

const ChatSettings = () => {
    return (
        <View style={ChatSettingsStyle.containert}>
            <Text style={ChatSettingsStyle.text}>
                App Settings
            </Text>
        </View>
    );
};

export default ChatSettings;