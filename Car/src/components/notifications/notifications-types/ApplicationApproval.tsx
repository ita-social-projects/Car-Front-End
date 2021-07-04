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

const ApplicationApproval = (props: NotificationProps) => {
    const [notificationModalVisible, setNotificationModalVisible] = useState(props.visible);
    const [confirmationModalVisible, setConfirmationModalVisible] = useState(false);

    const user = useContext(AuthContext).user;

    return (
        <>
            <MinimizedNotification
                notificationId={props.notificationId}
                user={props.sender}
                notificationTitle={"Driver approved your request!"}
                read={props.read}
                date={props.date}
                openModal={() => setNotificationModalVisible(true)}
            />

            <NotificationModalBase isVisible={notificationModalVisible!} styles={[{ height: "85%" }]}>
                <NotificationHeader
                    title="REQUEST APPROVEMENT"
                    message="The driver has approved your request!"
                    sender={props.sender}
                    withoutSnooze
                    disableModal={() => setNotificationModalVisible(false)}
                />

                <NotificationRideDetails
                    journeyId={props.journeyId!}
                />

                <NotificationRideStops
                    title={"Your route"}
                    stopsOwner={user}
                    journeyId={props.journeyId!}
                />

                <NotificationButtonGroup>
                    <NotificationConfirmButton onConfirm={() => setNotificationModalVisible(false)} />

                    <NotificationDeclineButton
                        declineText={"Withdraw"}
                        onDecline={() => setConfirmationModalVisible(true)}
                    />
                </NotificationButtonGroup>
            </NotificationModalBase>

            <ConfirmModal
                visible={confirmationModalVisible}
                title="ARE YOU SURE?"
                subtitle="Are you sure you want to withdraw the appoved request?"
                confirmText="Yes, withdraw"
                cancelText="No, keep it"
                disableModal={() => setConfirmationModalVisible(false)}
                onConfirm={() => {
                    JourneyService.deleteUser(props.journeyId!, user?.id!);
                    setConfirmationModalVisible(false);
                    setNotificationModalVisible(false);
                }}
            />
        </>
    );
};

export default ApplicationApproval;