import React, { useEffect, useRef, useState } from "react";
import NotificationProps from "../../../NotificationProps";
import Stop from "../../../../../../models/stop/Stop";
import JourneyPoint from "../../../../../../models/journey/JourneyPoint";
import NotificationHeader from "../../../notification-header/NotificationHeader";
import NotificationRideDetails from "../../../notification-ride-details/NotificationRideDetails";
import { ScrollView, Text, View, } from "react-native";
import StopsBlock from "../../../../../activity/journey/journey-activity/journey-page/blocks/stops-block/StopsBlock";
import { FIRST_ELEMENT_INDEX, SECOND_ELEMENT_INDEX, THIRD_ELEMENT_INDEX } from "../../../../../constants/GeneralConstants";
import JourneyService from "../../../../../../api-service/journey-service/JourneyService";
import axios from "axios";
import Journey from "../../../../../../models/journey/Journey";
import JourneyUserDto from "../../../../../../models/journey-user/JourneyUserDto";
import { getStopByType, getStopCoordinates } from "../../../../../utils/JourneyHelperFunctions";
import StopType from "../../../../../../models/stop/StopType";
import * as navigation from "../../../../navigation/Navigation";
import { useTheme } from "../../../../theme/ThemeProvider";
import PassengerWithdrawalViewStyle from "./PassengerWithdrawalViewStyle";
import JourneyNewApplicantViewStyle from "../../../../journey-new-applicant/journey-new-applicant-view/JourneyNewApplicantViewStyle";
import NotificationHeaderStyle from "../../../notification-header/NotificationHeaderStyle";
import NotificationButtonGroup from "../../../notification-buttons/NotificationButtonGroup";
import NotificationConfirmButton from "../../../notification-buttons/NotificationConfirmButton";

interface PassengerWithdrawalViewProps {
    route: {
        params: {
            notification: NotificationProps
        }
    }
}

const PassengerWithdrawalView = (props: PassengerWithdrawalViewProps) => {
    const { colors } = useTheme();
    const data = JSON.parse(props.route.params.notification.notificationData);
    const [stops, setStops] = useState<Stop[]>();
    const [journey, setJourney] = useState<Journey>();
    const [journeyUser, setJourneyUser] = useState<JourneyUserDto>();
    const source = useRef(axios.CancelToken.source());
    const [isStopsSet, setIsStopsSet] = useState(false);
    const journeyPoints = useState<JourneyPoint[]>([]);
    let name = props.route.params.notification.sender!.name;
    let surname =props.route.params.notification.sender!.surname;

    useEffect(() => {
        JourneyService.getJourney(props.route.params.notification.journeyId, false,
            { cancelToken: source.current.token })
            .then(res => {
                setJourney(res.data);
                setJourneyUser(data.journeyUser);

                setStops([
                    getStopByType(res.data, StopType.Start)!,
                    res.data!.stops.filter((stop: Stop) =>
                        stop!.index === FIRST_ELEMENT_INDEX && stop!.userId ===
                        props.route.params.notification.sender?.id)[FIRST_ELEMENT_INDEX],
                    res.data!.stops.filter((stop: Stop) =>
                        stop!.index === SECOND_ELEMENT_INDEX && stop!.userId ===
                        props.route.params.notification.sender?.id)[FIRST_ELEMENT_INDEX],
                    getStopByType(res.data, StopType.Finish)!
                ]);
            });
    }, []);

    useEffect(() => {
        if (!isStopsSet && stops) {
            setIsStopsSet(true);
            var tempStops = stops;

            console.log(tempStops);
            tempStops?.filter((stop) =>
                stop?.type === StopType.Intermediate)
                .forEach((stop) => (stop!.alias =
                    `${name} ${surname}'s ${stop!.index === FIRST_ELEMENT_INDEX ?
                        "Start" :
                        "Finish"}`));
            console.log(tempStops);
            setStops(tempStops);
        }
    }, [stops]);

    const onStopPressHandler = (stop: Stop) => {
        navigation.navigate("Stop View", {
            stops: stops,
            journeyPoints: journeyPoints,
            cameraCoordinates: getStopCoordinates(stop),
            notification: props
        });
    };

    return (
        <>
            <View style={[PassengerWithdrawalViewStyle.window, { backgroundColor: colors.white }]}>
                <NotificationHeader
                    sender={props.route.params.notification.sender}
                />
                <ScrollView style={{ flexGrow: 1 }}>
                    <View style={[NotificationHeaderStyle.messageContainer, {
                        borderTopColor: colors.secondaryLight,
                        borderBottomColor: colors.secondaryLight
                    }]}>
                        <Text style={[NotificationHeaderStyle.message, { color: colors.primary }]}>
                                The passenger has withdrawn your ride!
                        </Text>
                    </View>

                    <NotificationRideDetails
                        journeyId={props.route.params.notification.journeyId}
                        userId={props.route.params.notification.sender?.id!}
                        journeyUser={journeyUser!}
                        journey={journey!}
                    />
                    <Text style={{ ...JourneyNewApplicantViewStyle.applicantStopsText, color: colors.primary }}>
                        {props.route.params.notification.sender?.name}
                        {props.route.params.notification.sender?.surname}`s stops
                    </Text>
                    <View>
                        <StopsBlock
                            stops={stops ? stops : []}
                            onStopPress={onStopPressHandler}
                            highlightedStops={[SECOND_ELEMENT_INDEX, THIRD_ELEMENT_INDEX]}
                        />
                    </View>
                </ScrollView>
                <NotificationButtonGroup>
                    <NotificationConfirmButton
                        confirmText={"Ok"}
                        onConfirm={() => {
                            navigation.goBack();
                        }} />
                </NotificationButtonGroup>
            </View>
        </>
    );
};

export default PassengerWithdrawalView;
