import React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import AvatarLogoTitle from "../../avatar-logo-title/AvatarLogoTitle";
import { useTheme } from "../../theme/ThemeProvider";
import NotificationHeaderProps from "./NotificationHeaderProps";
import NotificationHeaderStyle from "./NotificationHeaderStyle";

const NotificationHeader = (props: NotificationHeaderProps) => {
    const { colors } = useTheme();

    return (
        <View>
            <View style={NotificationHeaderStyle.headerContainer}>
                <View style={NotificationHeaderStyle.row}>
                    {props.withSnooze &&
                        <TouchableOpacity
                            onPress={props.disableModal}
                        >
                            <Text style={[NotificationHeaderStyle.snooze,
                                { color: colors.accentBlue }]} >
                                Snooze
                            </Text>
                        </TouchableOpacity>
                    }
                </View>
                <View style={NotificationHeaderStyle.avatarLogo}>
                    <AvatarLogoTitle userToDisplay={props.sender} />
                </View>
            </View>
        </View>
    );
};

export default NotificationHeader;