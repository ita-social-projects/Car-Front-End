import React, { ReactNode } from "react";
import { Modal, View } from "react-native";
import DM from "../../styles/DM";
import NotificationModalBaseStyle from "./NotificationModalBaseStyle";

const NotificationModalBase = (props: {isVisible: boolean, children?: ReactNode}) => {
    return (
        <Modal
            visible={props.isVisible}
            animationType="fade"
            transparent
            statusBarTranslucent
        >
            <View style={[NotificationModalBaseStyle.background, { backgroundColor: DM("rgba(0, 0, 0, 0.5)") }]}>
                <View style={[NotificationModalBaseStyle.window, { backgroundColor: DM("#FFFFFF") }]}>
                    {props.children}
                </View>
            </View>
        </Modal>
    );
};

export default NotificationModalBase;