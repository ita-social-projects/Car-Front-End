import React from "react";
import { Text, TouchableOpacity } from "react-native";
import { useTheme } from "../../theme/ThemeProvider";
import NotificationButtonsStyle from "./NotificationButtonsStyle";

const NotificationConfirmButton = (props: { confirmText?: string, onConfirm: () => void, disabled?: boolean }) => {
    const { colors } = useTheme();

    return (
        <TouchableOpacity
            disabled={props.disabled ?? false}
            onPress={ props.onConfirm }
            style={[NotificationButtonsStyle.button, { backgroundColor: colors.primary }]}
        >
            <Text style={[NotificationButtonsStyle.buttonText, { color: colors.white }]}>
                {props.confirmText || "OK"}
            </Text>
        </TouchableOpacity>
    );
};

export default NotificationConfirmButton;
