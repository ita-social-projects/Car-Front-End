import React, { ReactNode } from "react";
import { Modal, StyleProp, View, ViewStyle } from "react-native";
import { useTheme } from "../../theme/ThemeProvider";
import NotificationModalBaseStyle from "./NotificationModalBaseStyle";

const NotificationModalBase = (props: {isVisible: boolean, styles?: StyleProp<ViewStyle>, children?: ReactNode}) => {
    const { colors } = useTheme();

    return (
        <Modal
            visible={props.isVisible}
            animationType="fade"
            transparent
            statusBarTranslucent
        >
            <View style={[NotificationModalBaseStyle.background, { backgroundColor: "rgba(0, 0, 0, 0.5)" }]}>
                <View style={[props.styles, NotificationModalBaseStyle.window, { backgroundColor: colors.white }]}>
                    {props.children}
                </View>
            </View>
        </Modal>
    );
};

export default NotificationModalBase;