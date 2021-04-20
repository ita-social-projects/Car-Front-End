import React, { useState } from "react";
import { View, Modal, Text, TouchableWithoutFeedback, TouchableOpacity } from "react-native";
import ConfirmModalProps from "./ConfirmModalProps";
import ConfirmModalStyle from "./ConfirmModalStyle";

const ConfirmModal = (props: ConfirmModalProps) => {
    const [visible, setVisible] = useState(props.visible);
    
    const disableModal = () => setVisible(false);

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
                            <Text style={ConfirmModalStyle.titleText}>
                                {props.title}
                            </Text>
                            <Text style={ConfirmModalStyle.subtitleText}>
                                {props.subtitle}
                            </Text>

                            <View />
                            <View />

                            <TouchableOpacity 
                                style={ConfirmModalStyle.confirmButton}
                                onPress={props.onConfirm}
                            >
                                <Text style={ConfirmModalStyle.confirmButtonText}>
                                    {props.confirmText}    
                                </Text>   
                            </TouchableOpacity>

                            <TouchableOpacity onPress={disableModal}>
                                <Text style={ConfirmModalStyle.cancelButtonText}>
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
