import React, { useState } from "react";
import { Text, View, Modal, TouchableOpacity } from "react-native";
import DatePicker from "react-native-date-picker";
import TouchableDateTimePickerStyle from "./TouchableDateTimePickerStyle";
import Ionicons from "react-native-vector-icons/Ionicons";

function TouchableDateTimePicker (props: { iconName: string}) {
    const [date, setDate] = useState(new Date());
    const [show, setShow] = useState(false);
    const MINUS_TWO = -2;
    const ONE = 1;
    const ZERO = 0;
    const days = ["sun", "mon", "tue", "wed", "thu", "fri", "sat"];
    const onCancelPress = () => {
        setDate(new Date());
        setShow(false);
    };

    const onDonePress = () => {
        setShow(false);
    };

    function formatDate (dateUTC: any) {
        let dayOfTheMonth = dateUTC.getDate();

        dayOfTheMonth = ("0" + dayOfTheMonth).slice(MINUS_TWO);
        let month = dateUTC.getMonth();

        let Month = parseInt(month) + ONE;

        month = ("0" + Month).slice(MINUS_TWO);
        let dayIndex = dateUTC.getDay();

        let dayName = days[dayIndex];

        let hours = dateUTC.getHours();

        hours = ("0" + hours).slice(MINUS_TWO);
        let minutes = dateUTC.getMinutes();

        minutes = ("0" + minutes).slice(MINUS_TWO);

        return dayOfTheMonth + "/" + month + "; " + dayName + "; " + hours + ":" + minutes;
    }

    return (
        <View>
            <TouchableOpacity
                style={TouchableDateTimePickerStyle.container}
                onPress={() => setShow(true)}>
                <Text style={TouchableDateTimePickerStyle.descriptionText}>
                    {"Departure time:"}{" "}
                </Text>
                <Text style={TouchableDateTimePickerStyle.dateTimeText}>
                    {formatDate(date)}
                </Text>
                <View>
                    <Ionicons
                        style={[
                            TouchableDateTimePickerStyle.barIcon,
                            { transform: [{ rotate: ZERO + "deg" }] }
                        ]}
                        name={props?.iconName}
                        size={25}
                    />
                </View>
                <Modal
                    transparent={true}
                    animationType="fade"
                    visible={show}
                    supportedOrientations={["portrait"]}
                    onRequestClose={() => setShow(!show)}>
                    <View style={TouchableDateTimePickerStyle.centeredView}>
                        <View style={TouchableDateTimePickerStyle.modalView}>
                            <View style={TouchableDateTimePickerStyle.btnContainer}>
                                <TouchableOpacity
                                    onPress={onCancelPress}
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
                                    date={date}
                                    onDateChange={setDate}

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
