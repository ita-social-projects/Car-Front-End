import { Keyboard, Modal, Text, TouchableOpacity, TouchableWithoutFeedback, View } from "react-native";
import React, { useState } from "react";
import { useTheme } from "../../../../../../components/theme/ThemeProvider";
import ChooseOption from "../../../../../../components/choose-opton/ChooseOption";
import SendRequestModalStyle from "./SendRequestModalStyle";
import SendRequestModalProps from "./SendRequestModalProps";
import Ionicons from "react-native-vector-icons/Ionicons";
import JourneyCreationDropDownPicker from "../../../../../../components/dropdown-picker/JourneyCreationDropDownPicker";
import CommentBlock from "../../../../../../components/commentBlock/CommentBlock";

const SendRequestModal = (props: SendRequestModalProps) => {
    const { colors } = useTheme();
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
                        <View style={{ ...SendRequestModalStyle.window, backgroundColor: colors.white }}>

                            <View style={SendRequestModalStyle.closeButtonContainer}>
                                <TouchableOpacity
                                    style={SendRequestModalStyle.closeButton}
                                    onPress={props.disableNodal}
                                >
                                    <Ionicons name={"close"} size={30} color={colors.primary}/>
                                </TouchableOpacity>
                            </View>

                            <Text style={{ ...SendRequestModalStyle.title, color: colors.primary }}>
                                Send request to driver
                            </Text>

                            <CommentBlock
                                initialComment=""
                                commentHeader="Comments"
                                setComments={()=>""}
                            />
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
                                            backgroundColor: colors.white,
                                            borderColor: colors.primary
                                        }]}
                                    onPress={props.onConfirmPress}
                                >
                                    <Text style={[SendRequestModalStyle.confirmButtonText, { color: colors.primary }]}>
                                    Confirm
                                    </Text>
                                </TouchableOpacity>

                            </View>
                        </View>
                </View>
            </TouchableWithoutFeedback>
        </Modal>
    );
};

export default SendRequestModal;
