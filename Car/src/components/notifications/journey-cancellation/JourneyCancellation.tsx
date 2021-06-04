import React, { useState } from "react";
import NewNotification from "../../new-notification/NewNotification";
import NotificationRideDetails from "../notification-ride-details/NotificationRideDetails";
import NotificationButtonGroup from "../NotificationButtonGroup";
import NotificationConfirmButton from "../NotificationConfirmButton";
import NotificationHeader from "../NotificationHeader";
import NotificationModalBase from "../NotificationModalBase";
import NotificationProps from "../NotificationProps";

const JourneyCancellation = (props: NotificationProps) => {
    const [modalVisible, setModalVisible] = useState(props.visible);
    const data = JSON.parse(props.notificationData);

    return (
        <>
            <NewNotification
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
                    message="The driver has canceled your ride!"
                    sender={props.sender}
                    disableModal={() => setModalVisible(false)}
                />

                <NotificationRideDetails
                    departureTime={data.departureTime}
                    availableSeats={data.availableSeats}
                    isFree={data.isFree}
                    withBaggage={data.withBaggage}
                />
                <NotificationButtonGroup>
                    <NotificationConfirmButton onConfirm={() => setModalVisible(false)} />
                </NotificationButtonGroup>
            </NotificationModalBase>
        </>
    );
};

export default JourneyCancellation;