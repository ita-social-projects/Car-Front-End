import React from "react";
import { Text, TouchableOpacity } from "react-native";
import DM from "../../styles/DM";
import NotificationButtonsStyle from "./NotificationButtonsStyle";

const NotificationDeclineButton = (props: { declineText?: string, onDecline: () => void }) => {
    return (
        <TouchableOpacity
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