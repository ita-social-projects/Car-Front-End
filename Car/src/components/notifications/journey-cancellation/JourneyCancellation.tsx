import React, { useState } from "react";
import { TouchableOpacity } from "react-native";
import NotificationsService from "../../../../api-service/notifications-service/NotificationsService";
import NewNotification from "../../new-notification/NewNotification";
import NotificationRideDetails from "../notification-ride-details/NotificationRideDetails";
import NotificationRideStops from "../notification-ride-stops/NotificationRideStops";
import NotificationHeader from "../NotificationHeader";
import NotificationModalBase from "../NotificationModalBase";
import NotificationProps from "../NotificationProps";

const JourneyCancellation = (props: NotificationProps) => {
    const [modalVisible, setModalVisible] = useState(props.visible);

    return (
        <>
            <TouchableOpacity
                onPress={() => {
                    setModalVisible(!modalVisible);
                    NotificationsService.markAsRead(props.notificationId);
                }}
            >
                <NewNotification
                    user={props.sender}
                    notificationTitle={JSON.parse(props.notificationData).title}
                    read={props.read}
                    date={props.date}
                />
            </TouchableOpacity>

            <NotificationModalBase isVisible={modalVisible!}>
                <NotificationHeader
                    title="RIDE IS CANCELED"
                    message="The driver has canceled your ride!"
                    sender={props.sender}
                    disableModal={() => setModalVisible(false)}
                />

                <NotificationRideDetails
                    departureTime={new Date}
                    availableSeats={2}
                    isFree={true}
                    withBaggage={true}
                />

                <NotificationRideStops
                    title={`${props.sender?.name}'s ride`}
                    journeyId={197}
                />
            </NotificationModalBase>
        </>
    );
};

export default JourneyCancellation;