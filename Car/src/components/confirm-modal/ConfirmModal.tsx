import React from "react";
import { View, Modal, Text, TouchableWithoutFeedback, TouchableOpacity } from "react-native";
import ConfirmModalProps from "./ConfirmModalProps";
import ConfirmModalStyle from "./ConfirmModalStyle";

const ConfirmModal = ((props: ConfirmModalProps) => {
    const confirmStyle = props.confirmColor == null ?
        ConfirmModalStyle.confirmButton :
        [ConfirmModalStyle.confirmButton, { backgroundColor: props.confirmColor }];

    return (
        <Modal
            visible={props.visible}
            transparent={true}
            animationType='fade'
            statusBarTranslucent={true}
        >
            <TouchableWithoutFeedback onPress={props.disableModal}>
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
                                style={confirmStyle}
                                onPress={props.onConfirm}
                            >
                                <Text style={[ConfirmModalStyle.boldText, ConfirmModalStyle.white]}>
                                    {props.confirmText}
                                </Text>
                            </TouchableOpacity>

                            {!props.hideCancelButton && (
                                <TouchableOpacity onPress={props.disableModal}>
                                    <Text style={ConfirmModalStyle.boldText}>
                                        {props.cancelText}
                                    </Text>
                                </TouchableOpacity>
                            )}

                        </View>
                    </TouchableWithoutFeedback>
                </View>
            </TouchableWithoutFeedback>
        </Modal>
    );
});

export default ConfirmModal;
