import React from "react";
import { Text, TouchableOpacity } from "react-native";
import { useTheme } from "../../theme/ThemeProvider";
import NotificationButtonsStyle from "./NotificationButtonsStyle";

const NotificationDeclineButton = (props: { declineText?: string, onDecline: () => void, disabled?: boolean }) => {
    const { DM } = useTheme();

    return (
        <TouchableOpacity
            disabled={props.disabled ?? false}
            onPress={ props.onDecline }
            style={[NotificationButtonsStyle.button]}
        >
            <Text style={[NotificationButtonsStyle.buttonText, { color: DM("#EC6400") }]}>
                {props.declineText || "Decline"}
            </Text>
        </TouchableOpacity>
    );
};

export default NotificationDeclineButton;
