import React, { useContext, useEffect, useState } from "react";
import NotificationProps from "../../../NotificationProps";
import AuthContext from "../../../../auth/AuthContext";
import Stop from "../../../../../../models/stop/Stop";
import JourneyPoint from "../../../../../../models/journey/JourneyPoint";
import NotificationHeader from "../../../notification-header/NotificationHeader";
import NotificationRideDetails from "../../../notification-ride-details/NotificationRideDetails";
import StopsBlock from "../../../../../activity/journey/journey-activity/journey-page/blocks/stops-block/StopsBlock";
import JourneyService from "../../../../../../api-service/journey-service/JourneyService";
import Journey from "../../../../../../models/journey/Journey";
import { getStopByType, getStopCoordinates } from "../../../../../utils/JourneyHelperFunctions";
import StopType from "../../../../../../models/stop/StopType";
import * as navigation from "../../../../../components/navigation/Navigation";
import NotificationsService from "../../../../../../api-service/notifications-service/NotificationsService";
import { HTTP_STATUS_OK } from "../../../../../constants/Constants";
import InvitationType from "../../../../../../models/invitation/InvitationType";
import { ACCEPTED_INVITATION_TYPE, REJECTED_INVITATION_TYPE } from "../../../../../constants/NotificationConstants";
import NotificationButtonGroup from "../../../notification-buttons/NotificationButtonGroup";
import NotificationConfirmButton from "../../../notification-buttons/NotificationConfirmButton";
import NotificationDeclineButton from "../../../notification-buttons/NotificationDeclineButton";
import ConfirmModal from "../../../../confirm-modal/ConfirmModal";
import { Text, View } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import PassengerWithdrawalViewStyle from "../withdrawn-view/PassengerWithdrawalViewStyle";
import { useTheme } from "../../../../theme/ThemeProvider";
import NotificationHeaderStyle from "../../../notification-header/NotificationHeaderStyle";

interface InvitationViewProps {
    route: {
        params: {
            notification: NotificationProps
        }
    }
}

const InvitationView = (props: InvitationViewProps) => {
    const { colors } = useTheme();
    const params = props.route.params.notification;
    const [notificationModalVisible, setNotificationModalVisible] = useState(params.visible);
    const [wasOpened, setWasOpened] = useState(false);
    const [confirmationModalVisible, setConfirmationModalVisible] = useState(false);
    const [withdrawModalVisible, setWithdrawModalVisible] = useState(false);
    const [errorModalVisible, setErrorModalVisible] = useState(false);
    const [acceptModalVisible, setAcceptModalVisible] = useState(false);
    const [journey, setJourney] = useState<Journey>();
    const user = useContext(AuthContext).user;
    const [journeyPoints, setJourneyPoints] = useState<JourneyPoint[]>([]);
    const [stops, setStops] = useState<Stop[]>([]);
    let notificationId = params.notificationId;
    const [withLuggage] = useState(false);
    const [requestComments] = useState("");
    const jsonData = JSON.stringify({
        comments: requestComments,
        hasLuggage: withLuggage,
        applicantStops: stops,
    });

    useEffect(() => {
        if (!wasOpened) {
            setWasOpened(true);
            JourneyService.getJourney(params.journeyId).then(res => {
                setJourney(res.data);
                setJourneyPoints(res.data!.journeyPoints);
                setStops([
                    getStopByType(res.data, StopType.Start)!,
                    getStopByType(res.data, StopType.Intermediate)!,
                    getStopByType(res.data, StopType.Finish)!
                ]);
            });
        }
    }, [notificationModalVisible]);

    const onStopPressHandler = (stop: Stop) => {
        navigation.navigate("Stop View", {
            stops: stops,
            journeyPoints: journeyPoints,
            cameraCoordinates: getStopCoordinates(stop),
            notification: props.route.params.notification,
            currentStop: Number(stops?.findIndex(stp=>stp?.address?.name == stop?.address?.name)),
            user: props.route.params.notification.sender
        });
    };

    const sendInvitationAnswerNotificationToDriver = (notificationType: number, modalToShow: () => void) => {
        NotificationsService.addNotification(
            {
                senderId: user?.id!,
                receiverId: params.sender?.id!,
                journeyId: params.journeyId,
                type: notificationType,
                jsonData: jsonData,
            }
        ).then((res) => {
            if (res.status == HTTP_STATUS_OK) {
                modalToShow();
                NotificationsService.deleteNotification(notificationId);
            }
        });
    };

    const sendDecline = () => {
        JourneyService.updateInvitation(
            {
                id: 0,
                type: InvitationType.Rejected,
                invitedUserId: params.receiver!.id,
                journeyId: params.journeyId,
            }
        ).then((updatingInvitationResult) => {
            if (updatingInvitationResult.status === HTTP_STATUS_OK) {
                sendInvitationAnswerNotificationToDriver(REJECTED_INVITATION_TYPE, () => setWithdrawModalVisible(true));
            }
        });
    };

    const closeAndDelete = () => {
        setWithdrawModalVisible(false);
        setNotificationModalVisible(false);
        if (params.onDelete)
            params.onDelete(notificationId);
    };

    const deleteNotification = () => {
        if (params.onDelete) {
            params.onDelete(notificationId);
        }
        NotificationsService.deleteNotification(notificationId);
    };

    const acceptInvitation = () => {
        JourneyService.addUser(
            {
                journeyUser: {
                    journeyId: params.journeyId,
                    userId: params.receiver!.id,
                    withBaggage: false,
                    passangersCount: 1
                },
                ApplicantStops: (journey?.stops.
                    map((stop, index) => {
                        return {
                            address: {
                                id: 0,
                                latitude: stop!.address!.latitude,
                                longitude: stop!.address!.longitude,
                                name: stop!.address!.name
                            },
                            index: index,
                            type: StopType.Intermediate,
                            id: 0,
                            journeyId: params.journeyId,
                            userId: params.receiver!.id,
                            isCancelled: false,
                        };
                    })) ?? []
            }
        ).then(addingUserResult => {
            if (addingUserResult.status == HTTP_STATUS_OK && addingUserResult.data) {
                JourneyService.updateInvitation(
                    {
                        id: 0,
                        type: InvitationType.Accepted,
                        invitedUserId: params.receiver!.id,
                        journeyId: params.journeyId,
                    }
                ).then((updatingInvitationResult) => {
                    if (updatingInvitationResult.status == HTTP_STATUS_OK) {
                        sendInvitationAnswerNotificationToDriver(ACCEPTED_INVITATION_TYPE,
                            () => setAcceptModalVisible(true));
                    }
                });
            }
            else {
                setErrorModalVisible(true);
            }
        });
    };

    return (
        <>
            <View style={[
                PassengerWithdrawalViewStyle.window,
                { color: colors.primary }]}
            >
                <NotificationHeader
                    sender={params.sender}
                />

                <ScrollView style = {{ flexGrow: 1 }}>

                    <View style={[NotificationHeaderStyle.messageContainer, {
                        borderTopColor: colors.disableBack,
                        borderBottomColor: colors.disableBack }]}>

                        <Text style={[NotificationHeaderStyle.message, { color: colors.primary }]}>
                            The driver is inviting you to join a ride!
                        </Text>
                    </View>

                    <NotificationRideDetails
                        userId={params.sender!.id}
                        journeyId={params.journeyId}
                        withSeats={true}
                        journey={journey!}
                        journeyUser={{
                            journeyId: params.journeyId,
                            userId: params.sender!.id,
                            withBaggage: false,
                            passangersCount: 1 }}
                    />

                    <StopsBlock
                        stops={journey?.stops ?? []}
                        onStopPress={onStopPressHandler}
                    />

                </ScrollView>

                <NotificationButtonGroup>
                    <NotificationConfirmButton
                        confirmText={"Ok"}
                        onConfirm={() => {
                            acceptInvitation();
                        }} />
                    <NotificationDeclineButton
                        declineText={"Decline"}
                        onDecline={() => {
                            setConfirmationModalVisible(true);
                        }}
                    />
                </NotificationButtonGroup>
                <>

                    <ConfirmModal
                        visible={confirmationModalVisible}
                        title="ARE YOU SURE?"
                        subtitle="Are you sure you want to decline the invite?"
                        confirmText="Yes, decline"
                        cancelText="No, keep it"
                        disableModal={() => setConfirmationModalVisible(false)}
                        onConfirm={() => {
                            setConfirmationModalVisible(false);
                            sendDecline();
                        }}
                    />

                    <ConfirmModal
                        visible={withdrawModalVisible}
                        title="Invitation is rejected"
                        subtitle="Your refusal was successfully sent to the driver"
                        confirmText="Ok"
                        hideCancelButton={true}
                        disableModal={closeAndDelete}
                        onConfirm={closeAndDelete}
                    />

                    <ConfirmModal
                        visible={acceptModalVisible}
                        title="Invitation is accepted!"
                        subtitle="You were successfully added to the ride!"
                        confirmText="Ok"
                        hideCancelButton={true}
                        disableModal={() => {
                            setAcceptModalVisible(false);
                            setNotificationModalVisible(false);
                        }}
                        onConfirm={() => {
                            setAcceptModalVisible(false);
                            setNotificationModalVisible(false);
                            deleteNotification();
                        }}
                    />

                    <ConfirmModal
                        visible={errorModalVisible}
                        title="Error"
                        subtitle="Failed to accept the invitation!"
                        confirmText="Ok"
                        hideCancelButton={true}
                        disableModal={() => {
                            setErrorModalVisible(false);
                        }}
                        onConfirm={() => {
                            setErrorModalVisible(false);
                            setNotificationModalVisible(false);
                            if(props.route.params.notification.onDelete)
                                props.route.params.notification.onDelete(notificationId);
                        }}
                    />
                </>

            </View>
        </>
    );
};

export default InvitationView;
