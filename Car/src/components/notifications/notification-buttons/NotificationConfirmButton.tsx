import React from "react";
import { Text, TouchableOpacity } from "react-native";
import DM from "../../styles/DM";
import NotificationButtonsStyle from "./NotificationButtonsStyle";

const NotificationConfirmButton = (props: { confirmText?: string, onConfirm: () => void }) => {
    return (
        <TouchableOpacity
            onPress={ props.onConfirm }
            style={[NotificationButtonsStyle.button, { backgroundColor: DM("black") }]}
        >
            <Text style={[NotificationButtonsStyle.buttonText, { color: DM("white") }]}>
                {props.confirmText || "OK"}
            </Text>
        </TouchableOpacity>
    );
};

export default NotificationConfirmButton;