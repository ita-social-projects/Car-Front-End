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
import NotificationProps from "../NotificationProps";
import InvitationType from "../../../../models/invitation/InvitationType";
import NotificationsService from "../../../../api-service/notifications-service/NotificationsService";
import Stop from "../../../../models/stop/Stop";
import JourneyPoint from "../../../../models/journey/JourneyPoint";
import { onStopPressHandler } from "./StopNavigationFunction/StopNavigationFunction";
import { ACCEPTED_INVITATION_TYPE, REJECTED_INVITATION_TYPE } from "../../../constants/NotificationConstants";

import StopsBlock from "../../../activity/journey/journey-activity/journey-page/blocks/stops-block/StopsBlock";
import { SECOND_ELEMENT_INDEX, THIRD_ELEMENT_INDEX } from "../../../constants/GeneralConstants";
import StopType from "../../../../models/stop/StopType";

const JourneyInvitation = (props: NotificationProps) => {
    const [notificationModalVisible, setNotificationModalVisible] = useState(props.visible);
    const [wasOpened, setWasOpened] = useState(false);
    const [confirmationModalVisible, setConfirmationModalVisible] = useState(false);
    const [withdrawModalVisible, setWithdrawModalVisible] = useState(false);
    const [errorModalVisible, setErrorModalVisible] = useState(false);
    const [acceptModalVisible, setAcceptModalVisible] = useState(false);
    const [journey, setJourney] = useState<Journey>();
    const user = useContext(AuthContext).user;

    useEffect(()=> {
        if(!wasOpened&&notificationModalVisible)
        {
            setWasOpened(true);
            JourneyService.getJourney(props.journeyId, false).then(res => {
                setJourney(res.data);
            });
        }
    }, [notificationModalVisible]);

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
                journeyId: props.journeyId,
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
                    journeyId: props.journeyId,
                    userId: user!.id,
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
                            journeyId: props.journeyId,
                            userId: user!.id,
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
                        invitedUserId: user!.id,
                        journeyId: props.journeyId,
                    }
                ).then((updatingInvitationResult) => {
                    if (updatingInvitationResult.status == HTTP_STATUS_OK) {
                        sendInvitationAnswerNotificationToDriver(ACCEPTED_INVITATION_TYPE,
                            () => setAcceptModalVisible(true));
                    }
                });
            }
            else{
                setErrorModalVisible(true);
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
                    journey={journey!}
                    journeyUser={{
                        journeyId: props.journeyId,
                        userId: user!.id,
                        withBaggage: false,
                        passangersCount: 1
                    }}
                />

                <StopsBlock
                    stops={journey?.stops ?? []}
                    onStopPress={() => onStopPress}
                    highlightedStops={[SECOND_ELEMENT_INDEX, THIRD_ELEMENT_INDEX]}
                />

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
                        if(props.onDelete)
                            props.onDelete(props.notificationId);
                    }}
                />
            </>
        </>
    );
};

export default JourneyInvitation;
