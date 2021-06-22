import { Modal, Text, TextInput, TouchableOpacity, TouchableWithoutFeedback, View } from "react-native";
import React from "react";
import DM from "../../../../../../components/styles/DM";
import ChooseOption from "../../../../../../components/choose-opton/ChooseOption";
import SendRequestModalStyle from "./SendRequestModalStyle";
import SendRequestModalProps from "./SendRequestModalProps";
import Ionicons from "react-native-vector-icons/Ionicons";

const SendRequestModal = (props: SendRequestModalProps) => {
    return (
        <Modal
            visible={props.visible}
            transparent={true}
            animationType='fade'
            statusBarTranslucent={true}
        >
            <TouchableWithoutFeedback onPress={props.disableNodal}>
                <View style={SendRequestModalStyle.background}>
                    <TouchableWithoutFeedback>
                        <View style={SendRequestModalStyle.window}>

                            <View style={SendRequestModalStyle.closeButtonContainer}>
                                <TouchableOpacity
                                    style={SendRequestModalStyle.closeButton}
                                    onPress={props.disableNodal}
                                >
                                    <Ionicons name={"close"} size={30} color={"black"}/>
                                </TouchableOpacity>
                            </View>

                            <Text style={SendRequestModalStyle.title}>
                                Send request to driver
                            </Text>

                            <View style={SendRequestModalStyle.commentsContainer}>
                                <Text style={[SendRequestModalStyle.commentsText, { color: DM("#414045") }]}>
                                    Comments
                                </Text>
                                <TextInput
                                    style={[SendRequestModalStyle.textInput,
                                        { borderColor: DM("black"), color: DM("#000000") }]}
                                    multiline={true}
                                    maxLength={100}
                                    numberOfLines={10}
                                    value={props.comments}
                                    placeholder={"Any comments?"}
                                    placeholderTextColor={DM("#888888")}
                                    onChangeText={props.onCommentsChange}
                                />
                                <Text style={[SendRequestModalStyle.hintText, { color: DM("#000000") }]}>
                                    Up to 100 symbols
                                </Text>
                            </View>

                            <View style={SendRequestModalStyle.chooseOptionContainer}>
                                <ChooseOption
                                    text={"Have you got any luggage with you?"}
                                    value={props.withLuggage}
                                    onValueChanged={props.onWithLuggageChange}
                                />
                            </View>

                            <View style={{ alignItems: "flex-end" }}>
                                <TouchableOpacity
                                    style={[
                                        SendRequestModalStyle.confirmButton,
                                        {
                                            backgroundColor: DM("white"),
                                            borderColor: DM("black")
                                        }]}
                                    onPress={props.onConfirmPress}
                                >
                                    <Text style={[SendRequestModalStyle.confirmButtonText, { color: DM("black") }]}>
                                    Confirm
                                    </Text>
                                </TouchableOpacity>

                            </View>
                        </View>
                    </TouchableWithoutFeedback>
                </View>
            </TouchableWithoutFeedback>
        </Modal>
    );
};

export default SendRequestModal;