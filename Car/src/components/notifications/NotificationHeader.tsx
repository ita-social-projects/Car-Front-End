import React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import AvatarLogoTitle from "../avatar-logo-title/AvatarLogoTitle";
import DM from "../styles/DM";
import NotificationComponentsStyle from "./NotificationComponentsStyle";

const NotificationHeader = (props: { title: string, message: string, disableModal: () => void}) => {
    return (
        <View>
            <View style={NotificationComponentsStyle.headerContainer}>
                <View style={NotificationComponentsStyle.row}>
                    <View>
                        <Text style={[NotificationComponentsStyle.header,
                            { color: DM("#000000") }]}
                        >
                            {props.title}
                        </Text>
                    </View>
                    <TouchableOpacity
                        onPress={props.disableModal}
                    >
                        <Text style={[NotificationComponentsStyle.snooze,
                            { color: DM("#02A2CF") }]} >
                            Snooze
                        </Text>
                    </TouchableOpacity>
                </View>
                <View style={NotificationComponentsStyle.avatarLogo}>
                    <AvatarLogoTitle />
                </View>
            </View>
            <View style={[NotificationComponentsStyle.messageContainer, {
                borderTopColor: DM("#C1C1C5"),
                borderBottomColor: DM("#C1C1C5")
            }]}>
                <Text style={[NotificationComponentsStyle.message, { color: DM("black") }]}>
                    {props.message}
                </Text>
            </View>
        </View>
    );
};

export default NotificationHeader;