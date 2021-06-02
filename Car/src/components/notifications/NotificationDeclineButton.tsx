import React from "react";
import { Text, TouchableOpacity } from "react-native";
import DM from "../styles/DM";
import NotificationComponentsStyle from "./NotificationComponentsStyle";

const NotificationDeclineButton = (props: { declineText?: string, onDecline: () => void }) => {
    return (
        <TouchableOpacity
            onPress={ props.onDecline }
            style={[NotificationComponentsStyle.button]}
        >
            <Text style={[NotificationComponentsStyle.buttonText, { color: DM("#EC6400") }]}>
                {props.declineText || "Decline"}
            </Text>
        </TouchableOpacity>
    );
};

export default NotificationDeclineButton;