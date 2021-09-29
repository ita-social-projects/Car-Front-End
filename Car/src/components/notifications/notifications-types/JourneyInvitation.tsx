import React, { useContext, useEffect, useState } from "react";
import JourneyService from "../../../../api-service/journey-service/JourneyService";
import Journey from "../../../../models/journey/Journey";
import { HTTP_STATUS_OK } from "../../../constants/Constants";
import AuthContext from "../../auth/AuthContext";
import ConfirmModal from "../../confirm-modal/ConfirmModal";
import MinimizedNotification from "../../minimized-notification/MinimizedNotification";
import NotificationButtonGroup from "../notification-buttons/NotificationButtonGroup";
import NotificationConfirmButton from "../notification-buttons/NotificationConfirmButton";
import NotificationDeclineButton from "../notification-buttons/NotificationDeclineButton";
import NotificationHeader from "../notification-header/NotificationHeader";
import NotificationModalBase from "../notification-modal-base/NotificationModalBase";
import NotificationRideDetails from "../notification-ride-details/NotificationRideDetails";
import NotificationRideStops from "../notification-ride-stops/NotificationRideStops";
import NotificationProps from "../NotificationProps";
import InvitationType from "../../../../models/invitation/InvitationType";
import NotificationsService from "../../../../api-service/notifications-service/NotificationsService";
import Stop from "../../../../models/stop/Stop";
import JourneyPoint from "../../../../models/journey/JourneyPoint";
import { onStopPressHandler } from "./StopNavigationFunction/StopNavigationFunction";
import { ACCEPTED_INVITATION_TYPE, REJECTED_INVITATION_TYPE } from "../../../constants/NotificationConstants";

const JourneyInvitation = (props: NotificationProps) => {
    const [notificationModalVisible, setNotificationModalVisible] = useState(props.visible);
    const [confirmationModalVisible, setConfirmationModalVisible] = useState(false);
    const [withdrawModalVisible, setWithdrawModalVisible] = useState(false);
    const [acceptModalVisible, setAcceptModalVisible] = useState(false);
    const [journey, setJourney] = useState<Journey>();
    const user = useContext(AuthContext).user;

    useEffect(() => {
        JourneyService.getJourney(props.journeyId, false).then(res => {
            setJourney(res.data);
        });
    }, []);

    const onStopPress = (stop:Stop, stops:Stop[], journeyPoints: JourneyPoint[], notification: NotificationProps) =>
    {
        setNotificationModalVisible(false);
        onStopPressHandler(stop,stops,journeyPoints, notification);
    };

    const sendInvitationAnswerNotificationToDriver = (notificationType: number, modalToShow : () => void) => {
        NotificationsService.addNotification(
            {
                senderId: user?.id!,
                receiverId: journey!.organizer?.id!,
                journeyId: props.journeyId,
                type: notificationType,
                jsonData:
                    "{\"title\": \"New Applicant\", \"comments\": \"\", \"hasLuggage\": \"false\"}",
            }
        ).then((res) => {
            if (res.status == HTTP_STATUS_OK) {
                modalToShow();
                NotificationsService.deleteNotification(props.notificationId);
            }
        });
    };

    const sendDecline = () => {
        JourneyService.updateInvitation(
            {
                id: 0,
                type: InvitationType.Rejected,
                invitedUserId: user!.id,
                journeyId: journey!.id,
            }
        ).then((updatingInvitationResult) => {
            if(updatingInvitationResult.status === HTTP_STATUS_OK) {
                sendInvitationAnswerNotificationToDriver(REJECTED_INVITATION_TYPE, () => setWithdrawModalVisible(true));
            }
        });
    };

    const closeAndDelete = () => {
        setWithdrawModalVisible(false);
        setNotificationModalVisible(false);
        if(props.onDelete)
            props.onDelete(props.notificationId);
    };

    const acceptInvitation = () => {
        JourneyService.addUser(
            {
                journeyUser: {
                    journeyId: journey!.id,
                    userId: user!.id,
                    withBaggage: false,
                    passangersCount: 1
                },
                ApplicantStops: []
            }
        ).then(addingUserResult => {
            if (addingUserResult.status == HTTP_STATUS_OK) {
                JourneyService.updateInvitation(
                    {
                        id: 0,
                        type: InvitationType.Accepted,
                        invitedUserId: user!.id,
                        journeyId: journey!.id,
                    }
                ).then((updatingInvitationResult) => {
                    if (updatingInvitationResult.status == HTTP_STATUS_OK) {
                        sendInvitationAnswerNotificationToDriver(ACCEPTED_INVITATION_TYPE,
                            () => setAcceptModalVisible(true));
                    }
                })
                ;
            }
        });
    };

    return (
        <>
            <MinimizedNotification
                notificationId={props.notificationId}
                user={props.sender}
                notificationTitle={"Journey Invitation"}
                read={props.read}
                date={props.date}
                openModal={() => setNotificationModalVisible(true)}
            />
            <NotificationModalBase isVisible={notificationModalVisible!}>
                <NotificationHeader
                    title="Invitation"
                    message="The driver is inviting you to join a ride!"
                    sender={props.sender}
                    disableModal={() => setNotificationModalVisible(false)}
                />

                <NotificationRideDetails
                    userId={user!.id}
                    journeyId={props.journeyId}
                    withSeats={true}
                />

                <NotificationRideStops
                    title={"Your route"}
                    stopsOwner={user}
                    journeyId={props.journeyId}
                    IsStopsTitleVisible
                    onStopPress = {onStopPress}
                    notification = {props}/>

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
            </NotificationModalBase>
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
                    disableModal={() => {setAcceptModalVisible(false); setNotificationModalVisible(false);}}
                    onConfirm={() => {setAcceptModalVisible(false); setNotificationModalVisible(false);}}
                />
            </>
        </>
    );
};

export default JourneyInvitation;
