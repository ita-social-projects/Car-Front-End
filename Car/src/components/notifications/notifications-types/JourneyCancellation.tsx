import React, { useContext, useState } from "react";
import MinimizedNotification from "../../minimized-notification/MinimizedNotification";
import NotificationRideDetails from "../notification-ride-details/NotificationRideDetails";
import NotificationButtonGroup from "../notification-buttons/NotificationButtonGroup";
import NotificationHeader from "../notification-header/NotificationHeader";
import NotificationModalBase from "../notification-modal-base/NotificationModalBase";
import NotificationProps from "../NotificationProps";
import NotificationConfirmButton from "../notification-buttons/NotificationConfirmButton";
import NotificationRideStops from "../notification-ride-stops/NotificationRideStops";
import AuthContext from "../../auth/AuthContext";

const JourneyCancellation = (props: NotificationProps) => {
    const [modalVisible, setModalVisible] = useState(props.visible);
    const user = useContext(AuthContext).user;

    return (
        <>
            <MinimizedNotification
                notificationId={props.notificationId}
                user={props.sender}
                notificationTitle={"Ride is canceled"}
                read={props.read}
                date={props.date}
                openModal={() => setModalVisible(true)}
            />
            <NotificationModalBase isVisible={modalVisible!}>
                <NotificationHeader
                    title="RIDE IS CANCELED"
                    message={"The driver has canceled \nyour ride!"}
                    sender={props.sender}
                    disableModal={() => setModalVisible(false)}
                />

                <NotificationRideDetails
                    journeyId={props.journeyId!}
                    IsBaggageVisible
                    IsAvailableSeatsVisible
                    IsFeeVisible
                    IsDepartureTimeVisible
                    IsDetailsTitleVisible
                />

                <NotificationRideStops
                    title={ `${props.sender?.name}'s route`}
                    stopsOwner={user}
                    journeyId={props.journeyId!}
                    IsStopsTitleVisible/>

                <NotificationButtonGroup>
                    <NotificationConfirmButton onConfirm={() => setModalVisible(false)} />
                </NotificationButtonGroup>
            </NotificationModalBase>
        </>
    );
};

export default JourneyCancellation;