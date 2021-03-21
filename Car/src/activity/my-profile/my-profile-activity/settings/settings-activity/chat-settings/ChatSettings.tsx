import React from "react";
import { Text, View } from "react-native";
import DM from "../../../../../../components/styles/DM";
import ChatSettingsStyle from "./ChatSettingsStyle";

const ChatSettings = () => {
    return (
        <View style={[ChatSettingsStyle.container, { backgroundColor: DM("#FFFFFF") }]}>
            <Text style={{ color: DM("black") }}>
                App Settings
            </Text>
        </View>
    );
};

export default ChatSettings;