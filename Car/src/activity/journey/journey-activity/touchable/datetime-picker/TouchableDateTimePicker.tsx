import React, { useState } from "react";
import { Text, View, Modal, TouchableOpacity } from "react-native";
import DatePicker from "react-native-date-picker";
import TouchableDateTimePickerStyle from "./TouchableDateTimePickerStyle";
import Ionicons from "react-native-vector-icons/Ionicons";
import { MINUTES_OFFSET } from "../../../../../constants/Constants";
import moment from "moment";

const ZERO = 0;

interface TouchableDateTimePickerProps {
    date: Date,
    // eslint-disable-next-line unused-imports/no-unused-vars
    setDate: (date: Date) => void,
}

export const addMinutesToDate = (date: Date, minutes: number) => {
    date.setMinutes(date.getMinutes() + minutes);

    return date;
};

function TouchableDateTimePicker (props: TouchableDateTimePickerProps) {
    const [show, setShow] = useState(false);

    const onResetPress = () => {
        props.setDate(addMinutesToDate(new Date(), MINUTES_OFFSET));
        setShow(false);
    };

    const onDonePress = () => {
        setShow(false);
    };

    return (
        <View>
            <TouchableOpacity
                style={TouchableDateTimePickerStyle.container}
                onPress={() => setShow(true)}>
                <Text style={TouchableDateTimePickerStyle.descriptionText}>
                    {"Departure time:"}{" "}
                </Text>
                <Text style={TouchableDateTimePickerStyle.dateTimeText}>
                    {moment(props.date).format("DD.MM; ddd; HH:mm")}
                </Text>
                <View>
                    <Ionicons
                        style={[
                            TouchableDateTimePickerStyle.barIcon,
                            { transform: [{ rotate: ZERO + "deg" }] }
                        ]}
                        name={"time"}
                        size={25}
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
                        <View style={TouchableDateTimePickerStyle.modalView}>
                            <View style={TouchableDateTimePickerStyle.btnContainer}>
                                <TouchableOpacity
                                    onPress={onResetPress}
                                    style={TouchableDateTimePickerStyle.btnReset}>
                                    <Text style={TouchableDateTimePickerStyle.btnResetText}>
                                        Reset
                                    </Text>
                                </TouchableOpacity>
                                <TouchableOpacity
                                    onPress={onDonePress}
                                    style={TouchableDateTimePickerStyle.btnDone}>
                                    <Text style={TouchableDateTimePickerStyle.btnDoneText}>
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
                                />
                            </View>
                        </View>
                    </View>
                </Modal>
            </TouchableOpacity>
        </View>
    );
}

export default TouchableDateTimePicker;
