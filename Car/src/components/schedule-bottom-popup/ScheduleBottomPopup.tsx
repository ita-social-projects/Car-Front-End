import React, { useEffect, useState } from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { Switch } from "react-native-gesture-handler";
import { JOURNEY_MORE_OPTIONS_POPUP_HEIGHT } from "../../constants/JourneyConstants";
import { MAX_POPUP_POSITION, MIN_POPUP_HEIGHT, MIN_POPUP_POSITION } from "../../constants/StylesConstants";
import BottomPopup from "../bottom-popup/BottomPopup";
import { useTheme } from "../theme/ThemeProvider";
import ScheduleBottomPopupProps from "./ScheduleBottomPopupProps";
import ScheduleBottomPopupStyles from "./ScheduleBottomPopupStyles";
import WeekDay from "./WeekDay";

const ScheduleBottomPopup = (props: ScheduleBottomPopupProps) => {
    const { DM } = useTheme();
    const activeButtonStyle = {
        backgroundColor: DM("black"),
        borderColor: DM("black"),
        color: DM("#FFFFFF"),
    };

    const inactiveButtonStyle = {
        backgroundColor: DM("gray"),
        borderColor: DM("gray"),
        color: DM("#FFFFFF"),
    };

    const weekDay = props.weekDay;

    const getButtonStyleByDay = (day: WeekDay) =>
        getButtonStyle(weekDay.current & day);

    const getButtonStyle = (toggle) =>
        toggle ?
            activeButtonStyle :
            inactiveButtonStyle;

    const isActiveButtonStyle = (style): boolean =>
        style.color === activeButtonStyle.color &&
        style.backgroundColor === activeButtonStyle.backgroundColor &&
        style.borderColor === activeButtonStyle.borderColor;

    const reverseButtonStyle = (buttonStyle) =>
        getButtonStyle(!isActiveButtonStyle(buttonStyle));

    const [mondayButtonStyle, setMondayButtonStyle] = useState(getButtonStyleByDay(WeekDay.Monday));
    const [tuesdayButtonStyle, setTuesdayButtonStyle] = useState(getButtonStyleByDay(WeekDay.Tuesday));
    const [wednesdayButtonStyle, setWednesdayButtonStyle] = useState(getButtonStyleByDay(WeekDay.Wednesday));
    const [thursdayButtonStyle, setThursdayButtonStyle] = useState(getButtonStyleByDay(WeekDay.Thursday));
    const [fridayButtonStyle, setFridayButtonStyle] = useState(getButtonStyleByDay(WeekDay.Friday));
    const [saturdayButtonStyle, setSaturdayButtonStyle] = useState(getButtonStyleByDay(WeekDay.Saturday));
    const [sundayButtonStyle, setSundayButtonStyle] = useState(getButtonStyleByDay(WeekDay.Sunday));
    const [isWeekdays, setIsWeekdays] = useState(false);
    const [isEdited, setEdited] = useState(false);

    const getWeekdays = (): WeekDay => {
        let weekDays: WeekDay = WeekDay.None;

        if (isActiveButtonStyle(mondayButtonStyle))
            weekDays |= WeekDay.Monday;
        if (isActiveButtonStyle(tuesdayButtonStyle))
            weekDays |= WeekDay.Tuesday;
        if (isActiveButtonStyle(wednesdayButtonStyle))
            weekDays |= WeekDay.Wednesday;
        if (isActiveButtonStyle(thursdayButtonStyle))
            weekDays |= WeekDay.Thursday;
        if (isActiveButtonStyle(fridayButtonStyle))
            weekDays |= WeekDay.Friday;
        if (isActiveButtonStyle(saturdayButtonStyle))
            weekDays |= WeekDay.Saturday;
        if (isActiveButtonStyle(sundayButtonStyle))
            weekDays |= WeekDay.Sunday;

        return weekDays;
    };

    const schedule = () => {
        weekDay.current = getWeekdays();
        if (props.refForChild.current && props.isOpened.current)
            props.refForChild.current.snapTo(MIN_POPUP_POSITION);
    };

    const setWeekdays = (toggle: boolean) => {
        setMondayButtonStyle(getButtonStyle(toggle));
        setTuesdayButtonStyle(getButtonStyle(toggle));
        setWednesdayButtonStyle(getButtonStyle(toggle));
        setThursdayButtonStyle(getButtonStyle(toggle));
        setFridayButtonStyle(getButtonStyle(toggle));
        setSaturdayButtonStyle(getButtonStyle(false));
        setSundayButtonStyle(getButtonStyle(false));
    };

    useEffect(() => {
        if (weekDay.current === getWeekdays())
            setEdited(false);
        else
            setEdited(true);
    }, [mondayButtonStyle,
        tuesdayButtonStyle,
        wednesdayButtonStyle,
        thursdayButtonStyle,
        fridayButtonStyle,
        saturdayButtonStyle,
        sundayButtonStyle,
        props]);

    useEffect(() => {
        setMondayButtonStyle(getButtonStyleByDay(WeekDay.Monday));
        setTuesdayButtonStyle(getButtonStyleByDay(WeekDay.Tuesday));
        setWednesdayButtonStyle(getButtonStyleByDay(WeekDay.Wednesday));
        setThursdayButtonStyle(getButtonStyleByDay(WeekDay.Thursday));
        setFridayButtonStyle(getButtonStyleByDay(WeekDay.Friday));
        setSaturdayButtonStyle(getButtonStyleByDay(WeekDay.Saturday));
        setSundayButtonStyle(getButtonStyleByDay(WeekDay.Sunday));
    }, [props]);

    useEffect(() => {
        if (isActiveButtonStyle(mondayButtonStyle) &&
            isActiveButtonStyle(tuesdayButtonStyle) &&
            isActiveButtonStyle(wednesdayButtonStyle) &&
            isActiveButtonStyle(thursdayButtonStyle) &&
            isActiveButtonStyle(fridayButtonStyle) &&
            !isActiveButtonStyle(saturdayButtonStyle) &&
            !isActiveButtonStyle(sundayButtonStyle))
            setIsWeekdays(true);
        else
            setIsWeekdays(false);

        if (props.refForChild.current && props.isOpened.current)
            props.refForChild.current.snapTo(MAX_POPUP_POSITION);
    }, [mondayButtonStyle,
        tuesdayButtonStyle,
        wednesdayButtonStyle,
        thursdayButtonStyle,
        fridayButtonStyle,
        saturdayButtonStyle,
        sundayButtonStyle]);

    return (
        <BottomPopup
            refForChild={ref => (props.refForChild.current = ref)}
            snapPoints={[JOURNEY_MORE_OPTIONS_POPUP_HEIGHT, MIN_POPUP_HEIGHT]}
            initialSnap={MIN_POPUP_POSITION}
            renderHeader={
                <View style={{ backgroundColor: DM("#FFFFFF") }}>
                    <Text style={[ScheduleBottomPopupStyles.header, { color: DM("black") }]}>
                        Schedule a ride
                    </Text>
                </View>
            }
            enabledInnerScrolling={false}
            renderContent={
                <View style={[ScheduleBottomPopupStyles.panel, { backgroundColor: DM("#FFFFFF") }]}>
                    <View style={ScheduleBottomPopupStyles.weekDayContainer}>
                        <TouchableOpacity
                            activeOpacity={1}
                            style={[ScheduleBottomPopupStyles.button, mondayButtonStyle]}
                            onPress={() => setMondayButtonStyle(reverseButtonStyle(mondayButtonStyle))}
                        >
                            <Text style={[ScheduleBottomPopupStyles.buttonText, mondayButtonStyle]}>M</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            activeOpacity={1}
                            style={[ScheduleBottomPopupStyles.button, tuesdayButtonStyle]}
                            onPress={() => setTuesdayButtonStyle(reverseButtonStyle(tuesdayButtonStyle))}
                        >
                            <Text style={[ScheduleBottomPopupStyles.buttonText, tuesdayButtonStyle]}>T</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            activeOpacity={1}
                            style={[ScheduleBottomPopupStyles.button, wednesdayButtonStyle]}
                            onPress={() => setWednesdayButtonStyle(reverseButtonStyle(wednesdayButtonStyle))}
                        >
                            <Text style={[ScheduleBottomPopupStyles.buttonText, wednesdayButtonStyle]}>W</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            activeOpacity={1}
                            style={[ScheduleBottomPopupStyles.button, thursdayButtonStyle]}
                            onPress={() => setThursdayButtonStyle(reverseButtonStyle(thursdayButtonStyle))}
                        >
                            <Text style={[ScheduleBottomPopupStyles.buttonText, thursdayButtonStyle]}>T</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            activeOpacity={1}
                            style={[ScheduleBottomPopupStyles.button, fridayButtonStyle]}
                            onPress={() => setFridayButtonStyle(reverseButtonStyle(fridayButtonStyle))}
                        >
                            <Text style={[ScheduleBottomPopupStyles.buttonText, fridayButtonStyle]}>F</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            activeOpacity={1}
                            style={[ScheduleBottomPopupStyles.button, saturdayButtonStyle]}
                            onPress={() => setSaturdayButtonStyle(reverseButtonStyle(saturdayButtonStyle))}
                        >
                            <Text style={[ScheduleBottomPopupStyles.buttonText, saturdayButtonStyle]}>S</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            activeOpacity={1}
                            style={[ScheduleBottomPopupStyles.button, sundayButtonStyle]}
                            onPress={() => setSundayButtonStyle(reverseButtonStyle(sundayButtonStyle))}
                        >
                            <Text style={[ScheduleBottomPopupStyles.buttonText, sundayButtonStyle]}>S</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={ScheduleBottomPopupStyles.checkboxContainer}>
                        <Switch
                            trackColor={{ false: DM("gray"), true: DM("#414045") }}
                            thumbColor={DM("white")}
                            value={isWeekdays}
                            style={ScheduleBottomPopupStyles.switch}
                            onValueChange={(value) => { setWeekdays(value); setIsWeekdays(value); }}
                        />
                        <Text style={{ color: DM("black"), paddingLeft: 11, fontSize: 13 }}>Repeat every workday</Text>
                    </View>
                    <View style={ScheduleBottomPopupStyles.scheduleButtonBlock}>
                        <TouchableOpacity
                            style={[ScheduleBottomPopupStyles.scheduleButton, {
                                backgroundColor: DM("white"),
                                borderColor: isEdited ? DM("black") : DM("gray")
                            }]}
                            onPress={schedule}
                            disabled={!isEdited}
                        >
                            <Text
                                style={[ScheduleBottomPopupStyles.scheduleButtonText, {
                                    color: isEdited ? DM("black") : DM("gray") }]}>
                                Schedule
                            </Text>
                        </TouchableOpacity>
                    </View>
                </View>
            }
            onCloseEnd={() => props.onCloseEnd()}
        />
    );
};

export default ScheduleBottomPopup;