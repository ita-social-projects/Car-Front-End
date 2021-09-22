import React, { useState } from "react";
import { Text, View, Modal, TouchableOpacity } from "react-native";
import DatePicker from "react-native-date-picker";
import TouchableDateTimePickerStyle from "./TouchableDateTimePickerStyle";
import Ionicons from "react-native-vector-icons/Ionicons";
import moment from "moment";
import { MINUTES_OFFSET } from "../../constants/AnimationConstants";
import DM from "../styles/DM";

const ZERO = 0;

interface TouchableDateTimePickerProps {
    date: Date,
    isConfirmed: boolean,
    setIsConfirmedToTrue?: () => void,
    // eslint-disable-next-line unused-imports/no-unused-vars
    setDate: (date: Date) => void,
    onlyTime: boolean,
}

export const addMinutesToDate = (date: Date, minutes: number) => {
    date.setMinutes(date.getMinutes() + minutes);

    return date;
};

const TouchableDateTimePicker = (props: TouchableDateTimePickerProps) => {
    const [show, setShow] = useState(false);

    const onResetPress = () => {
        props.setDate(addMinutesToDate(new Date(), MINUTES_OFFSET));
        setShow(false);
    };

    const onDonePress = () => {
        setShow(false);
        if(props.setIsConfirmedToTrue)
        {
            props.setIsConfirmedToTrue();
        }
    };

    return (
        <View>
            <TouchableOpacity
                style={[TouchableDateTimePickerStyle.container,
                    {
                        borderColor: DM("black"),
                        backgroundColor: DM("white")
                    }]}
                onPress={() => setShow(true)}>
                <Text style={[TouchableDateTimePickerStyle.descriptionText, { color: DM("#909095") }]}>
                    {"Departure time:"}{" "}
                </Text>
                <Text style={[TouchableDateTimePickerStyle.dateTimeText,
                    { color: props.isConfirmed ? DM("black") : DM("#909095") }]}>
                    {
                        props.onlyTime ?
                            moment(props.date).format("HH:mm") :
                            moment(props.date).format("DD.MM; ddd; HH:mm")
                    }
                </Text>
                <View>
                    <Ionicons
                        style={[
                            TouchableDateTimePickerStyle.barIcon,
                            { transform: [{ rotate: ZERO + "deg" }] }
                        ]}
                        name={"time"}
                        size={25}
                        color={DM("black")}
                    />
                </View>
                <Modal
                    transparent={true}
                    animationType="fade"
                    visible={show}
                    supportedOrientations={["portrait"]}
                    onRequestClose={() => setShow(!show)}
                >
                    <View style={TouchableDateTimePickerStyle.centeredView}>
                        <View style={[TouchableDateTimePickerStyle.modalView, { backgroundColor: DM("white") }]}>
                            <View style={TouchableDateTimePickerStyle.btnContainer}>
                                <TouchableOpacity
                                    onPress={onResetPress}
                                    style={[TouchableDateTimePickerStyle.btnReset,
                                        {
                                            borderColor: DM("black"),
                                            backgroundColor: DM("white")

                                        }]}>
                                    <Text style={[TouchableDateTimePickerStyle.btnResetText, { color: DM("black") }]}>
                                        Reset
                                    </Text>
                                </TouchableOpacity>
                                <TouchableOpacity
                                    onPress={onDonePress}
                                    style={[TouchableDateTimePickerStyle.btnDone, { backgroundColor: DM("black") }]}>
                                    <Text style={[TouchableDateTimePickerStyle.btnDoneText, { color: DM("white") }]}>
                                        Done
                                    </Text>
                                </TouchableOpacity>
                            </View>
                            <View style={TouchableDateTimePickerStyle.datePicker}>
                                <DatePicker
                                    date={props.date}
                                    onDateChange={props.setDate}
                                    minimumDate={addMinutesToDate(new Date(), MINUTES_OFFSET)}
                                    locale={"en"}
                                    is24hourSource={"device"}
                                    textColor={DM("black")}
                                    fadeToColor={DM("white")}
                                    mode={props.onlyTime ? "time" : "datetime"}
                                />
                            </View>
                        </View>
                    </View>
                </Modal>
            </TouchableOpacity>
        </View>
    );
};

export default TouchableDateTimePicker;
