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
import NotificationDeclineButton from "../../../notification-buttons/NotificationDeclineButton";
import { HTTP_STATUS_OK } from "../../../../../constants/Constants";
import ConfirmModal from "../../../../confirm-modal/ConfirmModal";
import NotificationsService from "../../../../../../api-service/notifications-service/NotificationsService";
import { ApplicationAnswerProps } from "../../ApplicationAnswer";
import JourneyPoint from "../../../../../../models/journey/JourneyPoint";

interface InvitationAcceptedViewProps {
  route: {
    params: {
      notification: ApplicationAnswerProps;
    };
  };
}

const ApprovedPassengerView = (props: InvitationAcceptedViewProps) => {
    const { colors } = useTheme();
    const user = useContext(AuthContext).user;
    const [journey, setJourney] = useState<Journey>();
    const [journeyUser, setJourneyUser] = useState<JourneyUserDto>();
    const [journeyPoints, setJourneyPoints] = useState<JourneyPoint[]>([]);
    const [LeaveRideModalIsVisible, setLeaveRideModalIsVisible] = useState(false);
    const [LeaveRideSuccessModalIsVisible, setLeaveRideSuccessModalIsVisible] = useState(false);
    const data = JSON.parse(props.route.params.notification.notification.notificationData);
    const stops: Stop[] = data.stopsRepresentation;
    const source = useRef(axios.CancelToken.source());
    let name = props.route.params.notification.notification.sender!.name;
    let surname = props.route.params.notification.notification.sender!.surname;

    useEffect(() => {
        JourneyService.getJourneyWithJourneyUser(
            props.route.params.notification.notification.journeyId,
            props.route.params.notification.journeyUserId,
            false,
            { cancelToken: source.current.token })
            .then(res => {
                setJourney(res.data.item1);
                setJourneyUser(res.data.item2);
                setJourneyPoints(res.data.item1!.journeyPoints);
            });
    }, []);

    const onStopPressHandler = (stop: Stop) => {
        navigation.navigate("Route View", {
            stops: stops,
            journeyPoints: journeyPoints,
            cameraCoordinates: getStopCoordinates(stop),
            notification: props.route.params.notification.notification,
        });
    };

    const deleteNotification = (id: number) => {
        NotificationsService.deleteNotification(id);
    };

    return (
        <>
            <ScrollView style={{ flexGrow: 1 }}>
                <View style={[PassengerWithdrawalViewStyle.window, { backgroundColor: colors.white }]}>
                    <NotificationHeader sender={user} />

                    {props.route.params.notification.notificationHeaderMessage !== "" && (
                        <View
                            style={[
                                NotificationHeaderStyle.messageContainer,
                                {
                                    borderTopColor: colors.disableBack,
                                    borderBottomColor: colors.disableBack,
                                },
                            ]}
                        >
                            <Text style={[NotificationHeaderStyle.message, { color: colors.primary }]}>
                                {props.route.params.notification.notificationHeaderMessage}
                            </Text>
                        </View>
                    )}

                    <NotificationRideDetails
                        journeyId={props.route.params.notification.notification.journeyId}
                        userId={user?.id!}
                        passangersCount={data?.passangersCount}
                        IsAvailableSeatsVisible={props.route.params.notification.IsAvailableSeatsVisible}
                        IsBaggageVisible={props.route.params.notification.IsBaggageVisible}
                        IsDepartureTimeVisible={props.route.params.notification.IsDepartureTimeVisible}
                        IsDetailsTitleVisible={props.route.params.notification.IsDetailsTitleVisible}
                        IsFeeVisible={props.route.params.notification.IsFeeVisible}
                        journey={journey!}
                        journeyUser={journeyUser!}
                    />
                    <Text
                        style={{ ...JourneyNewApplicantViewStyle.applicantStopsText, color: colors.primary }}
                    >
                        {name} {surname}`s stops in your ride
                    </Text>
                    <View>
                        <StopsBlock
                            stops={stops ?? []}
                            onStopPress={onStopPressHandler}
                            highlightedStops={getHighlightedStops(stops, user!.id)}
                        />
                    </View>

                    <NotificationButtonGroup>
                        <NotificationConfirmButton
                            confirmText={"Ok"}
                            onConfirm={() => {
                                deleteNotification(props.route.params.notification.notification.notificationId);
                                navigation.goBack();
                            }}
                        />
                        <NotificationDeclineButton
                            declineText={"Withdraw"}
                            onDecline={() => {
                                setLeaveRideModalIsVisible(true);
                                deleteNotification(props.route.params.notification.notification.notificationId);
                            }}
                        />
                    </NotificationButtonGroup>
                </View>
            </ScrollView>

            <ConfirmModal
                visible={LeaveRideModalIsVisible}
                title={"ARE YOU SURE?"}
                confirmText={"Yes, leave"}
                cancelText={"No, stay"}
                onConfirm={() => {
                    setLeaveRideModalIsVisible(false);
                    JourneyService.deleteUser(
                        props.route.params.notification.notification.journeyId,
            user?.id!
                    ).then((res) => {
                        if (res.status === HTTP_STATUS_OK) {
                            setLeaveRideSuccessModalIsVisible(true);
                        }
                    });
                }}
                disableModal={() => setLeaveRideModalIsVisible(false)}
                subtitle={"Do you really want to leave the journey?"}
            />

            <ConfirmModal
                visible={LeaveRideSuccessModalIsVisible}
                title={"Ride leaving"}
                confirmText={"Ok"}
                hideCancelButton={true}
                onConfirm={() => {
                    setLeaveRideModalIsVisible(false);
                    navigation.navigate("Journey");
                }}
                disableModal={() => {
                    setLeaveRideModalIsVisible(false);
                    navigation.navigate("Journey");
                }}
                subtitle={"Ride was successfully left"}
            />
        </>
    );
};

export default ApprovedPassengerView;
