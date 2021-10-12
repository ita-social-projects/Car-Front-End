import React, { useEffect, useState } from "react";
import { Text, View, Modal, TouchableOpacity } from "react-native";
import DatePicker from "react-native-date-picker";
import TouchableDateTimePickerStyle from "./TouchableDateTimePickerStyle";
import Ionicons from "react-native-vector-icons/Ionicons";
import moment from "moment";
import { MINUTES_OFFSET } from "../../constants/AnimationConstants";
import { useTheme } from "../theme/ThemeProvider";

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
    const { colors } = useTheme();
    const [show, setShow] = useState(false);
    const [date, setDate] = useState(props.date);

    useEffect(() => {
        setDate(props.date);
    }, [props.onlyTime]);

    const onResetPress = () => {
        props.setDate(date);
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
                        borderColor: colors.primary,
                        backgroundColor: colors.white
                    }]}
                onPress={() => setShow(true)}>
                <Text style={[TouchableDateTimePickerStyle.descriptionText, { color: colors.secondaryDark }]}>
                    {"Departure time:"}{" "}
                </Text>
                <Text style={[TouchableDateTimePickerStyle.dateTimeText,
                    { color: props.isConfirmed ? colors.primary : colors.secondaryDark }]}>
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
                        color={colors.primary}
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
                        <View style={[TouchableDateTimePickerStyle.modalView, { backgroundColor: colors.white }]}>
                            <View style={TouchableDateTimePickerStyle.btnContainer}>
                                <TouchableOpacity
                                    onPress={onResetPress}
                                    style={[TouchableDateTimePickerStyle.btnReset,
                                        {
                                            borderColor: colors.primary,
                                            backgroundColor: colors.white

                                        }]}>
                                    <Text style={[TouchableDateTimePickerStyle.btnResetText, { color: colors.primary }]}>
                                        Reset
                                    </Text>
                                </TouchableOpacity>
                                <TouchableOpacity
                                    onPress={onDonePress}
                                    style={[TouchableDateTimePickerStyle.btnDone, { backgroundColor: colors.primary }]}>
                                    <Text style={[TouchableDateTimePickerStyle.btnDoneText, { color: colors.white }]}>
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
                                    textColor={colors.primary}
                                    fadeToColor={colors.white}
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
