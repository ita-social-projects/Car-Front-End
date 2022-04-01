import React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import AvatarLogoTitle from "../../avatar-logo-title/AvatarLogoTitle";
import { useTheme } from "../../theme/ThemeProvider";
import NotificationHeaderProps from "./NotificationHeaderProps";
import NotificationHeaderStyle from "./NotificationHeaderStyle";
import * as navigation from "../../../components/navigation/Navigation";

const NotificationHeader = (props: NotificationHeaderProps) => {
    const { colors } = useTheme();

    return (
        <View>
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
            <TouchableOpacity
                onPress={() =>
                    navigation.navigate("Applicant Page", {
                        userId: props.sender?.id }
                    )}
            >
                <AvatarLogoTitle userToDisplay={props.sender} />
            </TouchableOpacity>
        </View>
    );
};

export default NotificationHeader;