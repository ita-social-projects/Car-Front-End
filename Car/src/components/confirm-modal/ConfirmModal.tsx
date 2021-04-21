import React, { useState } from "react";
import { View, Modal, Text, TouchableWithoutFeedback, TouchableOpacity } from "react-native";
import ConfirmModalProps from "./ConfirmModalProps";
import ConfirmModalStyle from "./ConfirmModalStyle";

const ConfirmModal = (props: ConfirmModalProps) => {
    const [visible, setVisible] = useState(props.visible);

    const disableModal = () => setVisible(false);

    const closeAfterConfirm = !props.dontCloseAfterConfirm ?? true;

    const confirm = () => {
        props.onConfirm();
        if(closeAfterConfirm)
            disableModal();
    };

    return (
        <Modal
            visible={visible}
            transparent={true}
            animationType='fade'
            statusBarTranslucent={true}
        >
            <TouchableWithoutFeedback onPress={disableModal}>
                <View style={ConfirmModalStyle.background}>
                    <TouchableWithoutFeedback>
                        <View style={ConfirmModalStyle.window}>
                            <Text style={ConfirmModalStyle.boldText}>
                                {props.title}
                            </Text>
                            <Text style={ConfirmModalStyle.subtitleText}>
                                {props.subtitle}
                            </Text>
                            <View />
                            <View />
                            <TouchableOpacity
                                style={ConfirmModalStyle.confirmButton}
                                onPress={confirm}
                            >
                                <Text style={(ConfirmModalStyle.boldText, ConfirmModalStyle.white)}>
                                    {props.confirmText}
                                </Text>
                            </TouchableOpacity>

                            <TouchableOpacity onPress={disableModal}>
                                <Text style={ConfirmModalStyle.boldText}>
                                    {props.cancelText}
                                </Text>
                            </TouchableOpacity>
                        </View>
                    </TouchableWithoutFeedback>
                </View>
            </TouchableWithoutFeedback>
        </Modal>
    );
};

export default ConfirmModal;
