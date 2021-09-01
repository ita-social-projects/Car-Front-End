import React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import AvatarLogoTitle from "../../avatar-logo-title/AvatarLogoTitle";
import DM from "../../styles/DM";
import NotificationHeaderProps from "./NotificationHeaderProps";
import NotificationHeaderStyle from "./NotificationHeaderStyle";

const NotificationHeader = (props: NotificationHeaderProps) => {
    return (
        <View>
            <View style={NotificationHeaderStyle.headerContainer}>
                <View style={NotificationHeaderStyle.row}>
                    <View>
                        <Text style={[NotificationHeaderStyle.header,
                            { color: DM("#000000") }]}
                        >
                            {props.title}
                        </Text>
                    </View>
                    {props.withSnooze &&
                        <TouchableOpacity
                            onPress={props.disableModal}
                        >
                            <Text style={[NotificationHeaderStyle.snooze,
                                { color: DM("#02A2CF") }]} >
                                Snooze
                            </Text>
                        </TouchableOpacity>
                    }
                </View>
                <View style={NotificationHeaderStyle.avatarLogo}>
                    <AvatarLogoTitle userToDisplay={props.sender} />
                </View>
            </View>
            {!props.withoutMessage &&
            <View style={[NotificationHeaderStyle.messageContainer, {
                borderTopColor: DM("#C1C1C5"),
                borderBottomColor: DM("#C1C1C5")
            }]}>
                <Text style={[NotificationHeaderStyle.message, { color: DM("black") }]}>
                    {props.message}
                </Text>
            </View>
            }
        </View>
    );
};

export default NotificationHeader;