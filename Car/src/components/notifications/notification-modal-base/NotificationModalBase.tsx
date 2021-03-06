import React, { ReactNode } from "react";
import { Modal, StyleProp, View, ViewStyle } from "react-native";
import DM from "../../styles/DM";
import NotificationModalBaseStyle from "./NotificationModalBaseStyle";

const NotificationModalBase = (props: {isVisible: boolean, styles?: StyleProp<ViewStyle>, children?: ReactNode}) => {
    return (
        <Modal
            visible={props.isVisible}
            animationType="fade"
            transparent
            statusBarTranslucent
        >
            <View style={[NotificationModalBaseStyle.background, { backgroundColor: DM("rgba(0, 0, 0, 0.5)") }]}>
                <View style={[props.styles, NotificationModalBaseStyle.window, { backgroundColor: DM("#FFFFFF") }]}>
                    {props.children}
                </View>
            </View>
        </Modal>
    );
};

export default NotificationModalBase;