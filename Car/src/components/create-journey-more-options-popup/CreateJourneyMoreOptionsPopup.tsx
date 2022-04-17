import React from "react";
import { Text, View } from "react-native";
import JourneyPageStyle from "../../activity/journey/journey-activity/journey-page/JourneyPageStyle";
import { CREATE_JOURNEY_MORE_OPTIONS_POPUP_HEIGHT, JOURNEY_MORE_OPTIONS_POPUP_HEIGHT } from "../../constants/JourneyConstants";
import { MAX_POPUP_POSITION, MIN_POPUP_HEIGHT } from "../../constants/StylesConstants";
import BottomPopup from "../bottom-popup/BottomPopup";
import MenuButton from "../menu-button/MenuButton";
import ScheduleBottomPopup from "../schedule-bottom-popup/ScheduleBottomPopup";
import { useTheme } from "../theme/ThemeProvider";
import CreateJourneyMoreOptionsPopupProps from "./CreateJourneyMoreOptionsPopupProps";

const CreateJourneyMoreOptionsPopup = (props: CreateJourneyMoreOptionsPopupProps) => {
    const { colors } = useTheme();

    return (
        <>
            <BottomPopup
                refForChild={ref => (props.createRideMoreOptionsRef.current = ref)}
                snapPoints={[MIN_POPUP_HEIGHT,
                    props.showAddStop ?
                        JOURNEY_MORE_OPTIONS_POPUP_HEIGHT :
                        CREATE_JOURNEY_MORE_OPTIONS_POPUP_HEIGHT]}
                enabledInnerScrolling={false}
                onCloseEnd={props.closeHandle}
                initialSnap={0}
                renderHeader={
                    <View style={[JourneyPageStyle.headerTitleStyle,
                        { backgroundColor: colors.white }
                    ]}>
                        <Text style={[JourneyPageStyle.headerTextStyle, { color: colors.primary }]}>
                            MORE OPTIONS
                        </Text>
                    </View>
                }
                renderContent={
                    <View style={[JourneyPageStyle.panel, { backgroundColor: colors.white }]}>
                        <MenuButton
                            text="Schedule This Ride"
                            isIcon={true}
                            onPress={() => {
                                props.scheduleMoreOptionsRef.current?.snapTo(MAX_POPUP_POSITION);
                                props.isScheduleOpened.current = true;
                            }}
                        />
                        <MenuButton
                            text="Change Preferences"
                            isIcon={true}
                            onPress={() => props.navigation.navigate("Preferences")}
                        />
                    </View>
                }
            />
            <ScheduleBottomPopup
                weekDay={props.weekDayRef}
                refForChild={props.scheduleMoreOptionsRef}
                isOpened={props.isScheduleOpened}
                onCloseEnd={() => {
                    props.isScheduleOpened.current = false;
                    props.closeMoreOptionPopup(props.createRideMoreOptionsRef);
                }}
            />
        </>
    );
};

export default CreateJourneyMoreOptionsPopup;
