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

const ApplicationApproval = (props: NotificationProps) => {
    const [modalVisible, setModalVisible] = useState(props.visible);
    const userId = useContext(AuthContext).user!.id;
    const data = JSON.parse(props.notificationData);

    return (
        <>
            <MinimizedNotification
                notificationId={props.notificationId}
                user={props.sender}
                notificationTitle={"Driver approved your request!"}
                read={props.read}
                date={props.date}
                openModal={() => setModalVisible(true)}
            />
            <NotificationModalBase isVisible={modalVisible!} styles={[{ height: "85%" }]}>
                <NotificationHeader
                    title="REQUEST APPROVEMENT"
                    message="The driver has approved your request!"
                    sender={props.sender}
                    withoutSnooze
                    disableModal={() => setModalVisible(false)}
                />

                <NotificationRideDetails
                    departureTime={data.departureTime}
                    isFree={data.isFree}
                    withBaggage={data.withBaggage}
                />

                <NotificationRideStops
                    title={"Your route"}
                    journeyId={props.journeyId!}
                />

                <NotificationButtonGroup>
                    <NotificationConfirmButton onConfirm={() => setModalVisible(false)} />
                    <NotificationDeclineButton
                        declineText={"Withdrawal"}
                        onDecline={() => {
                            JourneyService.deleteUser(props.journeyId!, userId);
                            setModalVisible(false);
                        }}
                    />
                </NotificationButtonGroup>
            </NotificationModalBase>
        </>
    );
};

export default ApplicationApproval;