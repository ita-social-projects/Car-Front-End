import React from "react";
import { Text, TouchableOpacity } from "react-native";
import { useTheme } from "../../theme/ThemeProvider";
import NotificationButtonsStyle from "./NotificationButtonsStyle";

const NotificationConfirmButton = (props: { confirmText?: string, onConfirm: () => void, disabled?: boolean }) => {
    const { DM } = useTheme();

    return (
        <TouchableOpacity
            disabled={props.disabled ?? false}
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
