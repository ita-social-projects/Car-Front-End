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
import { View } from "react-native";
import PassengerWithdrawalViewStyle from "../withdrawn-view/PassengerWithdrawalViewStyle";
import { colors } from "react-native-elements";

interface InvitationViewProps {
    route: {
        params: {
            notification: NotificationProps
        }
    }
}

const InvitationView = (props: InvitationViewProps) => {
    const [notificationModalVisible, setNotificationModalVisible] = useState(props.route.params.notification.visible);
    const [wasOpened, setWasOpened] = useState(false);
    const [confirmationModalVisible, setConfirmationModalVisible] = useState(false);
    const [withdrawModalVisible, setWithdrawModalVisible] = useState(false);
    const [errorModalVisible, setErrorModalVisible] = useState(false);
    const [acceptModalVisible, setAcceptModalVisible] = useState(false);
    const [journey, setJourney] = useState<Journey>();
    const user = useContext(AuthContext).user;
    const [journeyPoints, setJourneyPoints] = useState<JourneyPoint[]>([]);
    const [stops, setStops] = useState<Stop[]>([]);
    let notificationId = props.route.params.notification.notificationId;

    useEffect(() => {
        if (!wasOpened) {
            setWasOpened(true);
            JourneyService.getJourney(props.route.params.notification.journeyId).then(res => {
                setJourney(res.data);
                setJourneyPoints(res.data!.journeyPoints);
                setStops([
                getStopByType(res.data, StopType.Start)!,

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
            notification: props
        });
    };

    const sendInvitationAnswerNotificationToDriver = (notificationType: number, modalToShow: () => void) => {
        NotificationsService.addNotification(
            {
                senderId: user?.id!,
                receiverId: journey!.organizer?.id!,
                journeyId: props.route.params.notification.journeyId,
                type: notificationType,
                jsonData:
                    "{\"title\": \"New Applicant\", \"comments\": \"\", \"hasLuggage\": \"false\"}",
            }
        ).then((res) => {
            if (res.status == HTTP_STATUS_OK) {
                modalToShow();
                NotificationsService.deleteNotification(props.route.params.notification.notificationId);
            }
        });
    };

    const sendDecline = () => {
        JourneyService.updateInvitation(
            {
                id: 0,
                type: InvitationType.Rejected,
                invitedUserId: user!.id,
                journeyId: props.route.params.notification.journeyId,
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
        if (props.route.params.notification.onDelete)
            props.route.params.notification.onDelete(props.route.params.notification.notificationId);
    };

    const acceptInvitation = () => {
        JourneyService.addUser(
            {
                journeyUser: {
                    journeyId: props.route.params.notification.journeyId,
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
                            journeyId: props.route.params.notification.journeyId,
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
                        journeyId: props.route.params.notification.journeyId,
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
            <View style={[PassengerWithdrawalViewStyle.window, { backgroundColor: colors.white }]}>
                <NotificationHeader
                    title="Invitation"
                    message="The driver is inviting you to join a ride!"
                    sender={props.route.params.notification.sender}
                />

                <NotificationRideDetails
                    userId={user!.id}
                    journeyId={props.route.params.notification.journeyId}
                    withSeats={true}
                    journey={journey!}
                    journeyUser={{
                        journeyId: props.route.params.notification.journeyId,
                        userId: user!.id,
                        withBaggage: false,
                        passangersCount: 1
                    }}
                />

                <StopsBlock
                    stops={journey?.stops ?? []}
                    onStopPress={onStopPressHandler}
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
                        disableModal={() => { setAcceptModalVisible(false); setNotificationModalVisible(false); }}
                        onConfirm={() => { setAcceptModalVisible(false); setNotificationModalVisible(false); }}
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
                            if (props.route.params.notification.onDelete)
                                props.route.params.notification.onDelete
                                (notificationId);
                        }}
                    />
                </>
            </View>
        </>
    );
};

export default InvitationView;
