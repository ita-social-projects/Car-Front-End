import { Modal, Text, TextInput, TouchableOpacity, TouchableWithoutFeedback, View } from "react-native";
import React, { useState } from "react";
import DM from "../../../../../../components/styles/DM";
import ChooseOption from "../../../../../../components/choose-opton/ChooseOption";
import SendRequestModalStyle from "./SendRequestModalStyle";
import SendRequestModalProps from "./SendRequestModalProps";
import Ionicons from "react-native-vector-icons/Ionicons";
import JourneyCreationDropDownPicker from "../../../../../../components/dropdown-picker/JourneyCreationDropDownPicker";

const SendRequestModal = (props: SendRequestModalProps) => {
    const userQuantity :{ id: number, name: string }[] = [
        { id: 1, name: "1" }, { id: 2, name: "2" }, { id: 3, name: "3" }, { id: 4, name: "4" }];
    const [isVisibleQuantityDropDown, setIsVisibleQuantityDropDown] = useState(false);
    const [selectedQuantity, setSelectedQuantity] =
        useState({ id: props.passangersCount, name: props.passangersCount.toString() });

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
                            <View style ={SendRequestModalStyle.dropDownContainer}>
                                <View style ={SendRequestModalStyle.dropDown}>
                                    <JourneyCreationDropDownPicker
                                        items={userQuantity.map((car) => ({
                                            label: car.name,
                                            value: car.id
                                        }))}
                                        paddingLeft={100}
                                        searchable={false}
                                        placeholder="Passengers:"
                                        isVisible={isVisibleQuantityDropDown}
                                        onOpen={() => setIsVisibleQuantityDropDown(true)}
                                        onChangeItem={(item) => {
                                            setSelectedQuantity({ id: item.value, name: item.label });
                                            props.onPassangersCountChange(item.value);
                                            setIsVisibleQuantityDropDown(false);
                                        }}
                                        valueId={selectedQuantity.id}
                                    />
                                </View>
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