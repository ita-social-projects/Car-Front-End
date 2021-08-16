import React, { useContext, useState } from "react";
import MinimizedNotification from "../../minimized-notification/MinimizedNotification";
import NotificationRideDetails from "../notification-ride-details/NotificationRideDetails";
import NotificationButtonGroup from "../notification-buttons/NotificationButtonGroup";
import NotificationHeader from "../notification-header/NotificationHeader";
import NotificationModalBase from "../notification-modal-base/NotificationModalBase";
import NotificationProps from "../NotificationProps";
import NotificationConfirmButton from "../notification-buttons/NotificationConfirmButton";
import NotificationDeclineButton from "../notification-buttons/NotificationDeclineButton";
import NotificationRideStops from "../notification-ride-stops/NotificationRideStops";
import JourneyService from "../../../../api-service/journey-service/JourneyService";
import AuthContext from "../../auth/AuthContext";
import ConfirmModal from "../../confirm-modal/ConfirmModal";

interface ApplicationAnswerProps {
    notification: NotificationProps,
    notificationTittle: string,
    notificationHeaderTittle: string,
    notificationHeaderMessage: string,
    withWithdraw?: boolean,
    IsDetailsTitleVisible: boolean,
    IsDepartureTimeVisible: boolean,
    IsFeeVisible: boolean,
    IsAvailableSeatsVisible: boolean,
    IsBaggageVisible: boolean,
    IsStopsTitleVisible: boolean,
}

const ApplicationAnswer = (props: ApplicationAnswerProps) => {
    const [notificationModalVisible, setNotificationModalVisible] = useState(props.notification.visible);
    const [confirmationModalVisible, setConfirmationModalVisible] = useState(false);

    const user = useContext(AuthContext).user;

    return (
        <>
            <MinimizedNotification
                notificationId={props.notification.notificationId}
                user={props.notification.sender}
                notificationTitle={props.notificationTittle}
                read={props.notification.read}
                date={props.notification.date}
                openModal={() => setNotificationModalVisible(true)}
            />

            <NotificationModalBase isVisible={notificationModalVisible!}>
                <NotificationHeader
                    title={props.notificationHeaderTittle}
                    message={props.notificationHeaderMessage}
                    sender={props.notification.sender}
                    withoutSnooze
                    disableModal={() => setNotificationModalVisible(false)}
                />

                <NotificationRideDetails
                    journeyId={props.notification.journeyId!}
                    IsDetailsTitleVisible={props.IsDetailsTitleVisible}
                    IsDepartureTimeVisible={props.IsDepartureTimeVisible}
                    IsFeeVisible={props.IsFeeVisible}
                    IsAvailableSeatsVisible={props.IsAvailableSeatsVisible}
                    IsBaggageVisible={props.IsBaggageVisible}
                />

                <NotificationRideStops
                    title={"Your route"}
                    stopsOwner={user}
                    journeyId={props.notification.journeyId!}
                    IsStopsTitleVisible={props.IsStopsTitleVisible}
                />

                <NotificationButtonGroup>
                    <NotificationConfirmButton onConfirm={() => setNotificationModalVisible(false)} />
                    {props.withWithdraw &&
                    <NotificationDeclineButton
                        declineText={"Withdraw"}
                        onDecline={() => setConfirmationModalVisible(true)}
                    />
                    }
                </NotificationButtonGroup>
            </NotificationModalBase>
            {props.withWithdraw &&
                <ConfirmModal
                    visible={confirmationModalVisible}
                    title="ARE YOU SURE?"
                    subtitle="Are you sure you want to withdraw the appoved request?"
                    confirmText="Yes, withdraw"
                    cancelText="No, keep it"
                    disableModal={() => setConfirmationModalVisible(false)}
                    onConfirm={() => {
                        JourneyService.deleteUser(props.notification.journeyId!, user?.id!);
                        setConfirmationModalVisible(false);
                        setNotificationModalVisible(false);
                    }}
                />
            }
        </>
    );
};

export default ApplicationAnswer;
