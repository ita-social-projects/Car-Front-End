import React, { useContext, useEffect, useRef, useState } from "react";
import AuthContext from "../../../../auth/AuthContext";
import Stop from "../../../../../../models/stop/Stop";
import NotificationHeader from "../../../notification-header/NotificationHeader";
import NotificationRideDetails from "../../../notification-ride-details/NotificationRideDetails";
import StopsBlock from "../../../../../activity/journey/journey-activity/journey-page/blocks/stops-block/StopsBlock";
import JourneyService from "../../../../../../api-service/journey-service/JourneyService";
import Journey from "../../../../../../models/journey/Journey";
import { getHighlightedStops, getStopCoordinates } from "../../../../../utils/JourneyHelperFunctions";
import * as navigation from "../../../../../components/navigation/Navigation";
import { Text, View } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import PassengerWithdrawalViewStyle from "../withdrawn-view/PassengerWithdrawalViewStyle";
import JourneyUserDto from "../../../../../../models/journey-user/JourneyUserDto";
import axios from "axios";
import JourneyNewApplicantViewStyle from "../../../../journey-new-applicant/journey-new-applicant-view/JourneyNewApplicantViewStyle";
import { useTheme } from "../../../../theme/ThemeProvider";
import NotificationHeaderStyle from "../../../notification-header/NotificationHeaderStyle";
import NotificationButtonGroup from "../../../notification-buttons/NotificationButtonGroup";
import NotificationConfirmButton from "../../../notification-buttons/NotificationConfirmButton";
import { ApplicationAnswerProps } from "../../ApplicationAnswer";
import JourneyPoint from "../../../../../../models/journey/JourneyPoint";

interface InvitationAcceptedViewProps {
    route: {
        params: {
            notification: ApplicationAnswerProps
        }
    }
}

const ApprovedView = (props: InvitationAcceptedViewProps) => {
    const { colors } = useTheme();
    const user = useContext(AuthContext).user;
    const [stops, setStops] = useState<Stop[]>([]);
    const [journey, setJourney] = useState<Journey>();
    const [journeyUser, setJourneyUser] = useState<JourneyUserDto>();
    const [journeyPoints, setJourneyPoints] = useState<JourneyPoint[]>([]);
    const source = useRef(axios.CancelToken.source());
    const sender = props.route.params.notification.notification.sender!;
    const name = sender.name;
    const surname = sender.surname;

    useEffect(() => {
        JourneyService.getJourneyWithJourneyUser(props.route.params.notification.notification.journeyId,
            props.route.params.notification.journeyUserId,
            false,
            { cancelToken: source.current.token })
            .then(res => {
                setJourney(res.data.item1);
                setJourneyUser(res.data.item2);
                setStops(res.data.item1!.stops);
                setJourneyPoints(res.data.item1!.journeyPoints);
            });
    }, []);

    const onStopPressHandler = (stop: Stop) => {
        navigation.navigate("Stop View", {
            stops: stops,
            journeyPoints: journeyPoints,
            cameraCoordinates: getStopCoordinates(stop),
            notification: props.route.params.notification,
        });
    };

    return (
        <>
            <ScrollView style = {{ flexGrow: 1 }}>

                <View style={[PassengerWithdrawalViewStyle.window, { backgroundColor: colors.white }]}>

                    <NotificationHeader
                        sender={props.route.params.notification.notification.sender}
                    />

                    {props.route.params.notification.notificationHeaderMessage !== "" &&
                    <View style={[NotificationHeaderStyle.messageContainer, {
                        borderTopColor: colors.disableBack,
                        borderBottomColor: colors.disableBack
                    }]}>
                        <Text style={[NotificationHeaderStyle.message, { color: colors.primary }]}>
                            {props.route.params.notification.notificationHeaderMessage}
                        </Text>
                    </View>}

                    <NotificationRideDetails
                        journeyId={props.route.params.notification.notification.journeyId}
                        userId={user?.id!}
                        IsAvailableSeatsVisible={props.route.params.notification.IsAvailableSeatsVisible}
                        IsBaggageVisible={props.route.params.notification.IsBaggageVisible}
                        IsDepartureTimeVisible={props.route.params.notification.IsDepartureTimeVisible}
                        IsDetailsTitleVisible={props.route.params.notification.IsDetailsTitleVisible}
                        IsFeeVisible={props.route.params.notification.IsFeeVisible}
                        journey={journey!}
                        journeyUser={journeyUser!}
                    />

                    <Text style={{ ...JourneyNewApplicantViewStyle.applicantStopsText, color: colors.primary }}>
                        {name} {surname}`s stops in your rideee
                    </Text>

                    <View>
                        <StopsBlock
                            stops={stops ?? []}
                            onStopPress={onStopPressHandler}
                            highlightedStops={getHighlightedStops(stops, sender.id)}
                        />
                    </View>

                    <NotificationButtonGroup>
                        <NotificationConfirmButton
                            confirmText={"Ok"}
                            onConfirm={() => {
                                navigation.goBack();
                            }} />
                    </NotificationButtonGroup>

                </View>

            </ScrollView>
        </>
    );
};

export default ApprovedView;
