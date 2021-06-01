import React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import AvatarLogoTitle from "../avatar-logo-title/AvatarLogoTitle";
import DM from "../styles/DM";
import NotificationComponentsStyle from "./NotificationComponentsStyle";

const NotificationHeader = (props: { title: string, disableModal: () => void}) => {
    return (
        <View>
            <View style={NotificationComponentsStyle.row}>
                <View style={NotificationComponentsStyle.headerContainer}>
                    <Text style={[NotificationComponentsStyle.header,
                        { color: DM("#000000") }]}
                    >
                        {props.title}
                    </Text>
                </View>
                <View style={NotificationComponentsStyle.headerContainer}>
                    <TouchableOpacity
                        onPress={props.disableModal}
                    >
                        <Text style={[NotificationComponentsStyle.snooze,
                            { color: DM("#02A2CF") }]} >
                            Snooze
                        </Text>
                    </TouchableOpacity>
                </View>
            </View>
            <AvatarLogoTitle />
        </View>
    );
};

export default NotificationHeader;