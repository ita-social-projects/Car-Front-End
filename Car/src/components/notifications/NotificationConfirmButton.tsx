import React from "react";
import { Text, TouchableOpacity } from "react-native";
import DM from "../styles/DM";
import NotificationComponentsStyle from "./NotificationComponentsStyle";

const NotificationConfirmButton = (props: { confirmText?: string, onConfirm: () => void }) => {
    return (
        <TouchableOpacity
            onPress={ props.onConfirm }
            style={[NotificationComponentsStyle.button, { backgroundColor: DM("black") }]}
        >
            <Text style={[NotificationComponentsStyle.buttonText, { color: DM("white") }]}>
                {props.confirmText || "OK"}
            </Text>
        </TouchableOpacity>
    );
};

export default NotificationConfirmButton;