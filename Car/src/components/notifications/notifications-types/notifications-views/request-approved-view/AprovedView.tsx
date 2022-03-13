import React, { useContext, useEffect, useRef, useState } from "react";
import AuthContext from "../../../../auth/AuthContext";
import Stop from "../../../../../../models/stop/Stop";
import NotificationHeader from "../../../notification-header/NotificationHeader";
import NotificationRideDetails from "../../../notification-ride-details/NotificationRideDetails";
import StopsBlock from "../../../../../activity/journey/journey-activity/journey-page/blocks/stops-block/StopsBlock";
import JourneyService from "../../../../../../api-service/journey-service/JourneyService";
import Journey from "../../../../../../models/journey/Journey";
import { getStopByType, getStopCoordinates } from "../../../../../utils/JourneyHelperFunctions";
import StopType from "../../../../../../models/stop/StopType";
import * as navigation from "../../../../../components/navigation/Navigation";
import { Text, View } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import PassengerWithdrawalViewStyle from "../withdrawn-view/PassengerWithdrawalViewStyle";
import { FIRST_ELEMENT_INDEX, SECOND_ELEMENT_INDEX, THIRD_ELEMENT_INDEX } from "../../../../../constants/GeneralConstants";
import JourneyUserDto from "../../../../../../models/journey-user/JourneyUserDto";
import axios from "axios";
import JourneyNewApplicantViewStyle from "../../../../journey-new-applicant/journey-new-applicant-view/JourneyNewApplicantViewStyle";
import { useTheme } from "../../../../theme/ThemeProvider";
import NotificationHeaderStyle from "../../../notification-header/NotificationHeaderStyle";
import NotificationButtonGroup from "../../../notification-buttons/NotificationButtonGroup";
import NotificationConfirmButton from "../../../notification-buttons/NotificationConfirmButton";

interface InvitationAcceptedViewProps {
    route: {
        params: {
            notification:any
        }
    }
}

const AprovedView = (props: InvitationAcceptedViewProps) => {
    const { colors } = useTheme();
    const user = useContext(AuthContext).user;
    const [stops, setStops] = useState<Stop[]>();
    const [journey, setJourney] = useState<Journey>();
    const [journeyUser, setJourneyUser] = useState<JourneyUserDto>();
    const data = JSON.parse(props.route.params.notification.notification.notificationData);
    const source = useRef(axios.CancelToken.source());
    let name = props.route.params.notification.notification.sender!.name;
    let surname = props.route.params.notification.notification.sender!.surname;

    useEffect(() => {
        JourneyService.getJourneyWithJourneyUser(props.route.params.notification.notification.journeyId,
            props.route.params.notification.journeyUserId,
            false,
            { cancelToken: source.current.token })
            .then(res => {
                setJourney(res.data.item1);
                setJourneyUser(res.data.item2);
                setStops([
                    getStopByType(res.data.item1, StopType.Start)!,
                    data?.applicantStops!.filter((stop: Stop) =>
                        stop!.index === FIRST_ELEMENT_INDEX)[FIRST_ELEMENT_INDEX],
                    data?.applicantStops!.filter((stop: Stop) =>
                        stop!.index === SECOND_ELEMENT_INDEX)[FIRST_ELEMENT_INDEX],
                    getStopByType(res.data.item1, StopType.Finish)!
                ]);
            });

    }, []);

    const onStopPressHandler = (stop: Stop) => {
        navigation.navigate("Stop View", {
            stops: stops,
            journeyPoints: props.route.params.notification.journeyPoints,
            cameraCoordinates: getStopCoordinates(stop),
            notification: props
        });
    };

    return (
        <>
            <View style={[PassengerWithdrawalViewStyle.window, { backgroundColor: colors.white }]}>

                <NotificationHeader
                    sender={props.route.params.notification.notification.sender}
                />

                <ScrollView style = {{ flexGrow: 1 }}>
                    {props.route.params.notification.notificationHeaderMessage !== "" &&
                    <View style={[NotificationHeaderStyle.messageContainer, {
                        borderTopColor: colors.secondaryLight,
                        borderBottomColor: colors.secondaryLight
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
                        IsDepartureTimeVisible={props.route.params.notification.routeIsDepartureTimeVisible}
                        IsDetailsTitleVisible={props.route.params.notification.IsDetailsTitleVisible}
                        IsFeeVisible={props.route.params.notification.IsFeeVisible}
                        journey={journey!}
                        journeyUser={journeyUser!}
                    />

                    <Text style={{ ...JourneyNewApplicantViewStyle.applicantStopsText, color: colors.primary }}>
                        {name} {surname}`s stops in your ride
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

export default AprovedView;
