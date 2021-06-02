import React, { useState } from "react";
import { TouchableOpacity } from "react-native";
import NotificationsService from "../../../../api-service/notifications-service/NotificationsService";
import JourneyNewApplicantProps from "../../journey-new-applicant/JourneyNewApplicantProps";
import NewNotification from "../../new-notification/NewNotification";
import NotificationButtonGroup from "../NotificationButtonGroup";
import NotificationConfirmButton from "../NotificationConfirmButton";
import NotificationHeader from "../NotificationHeader";
import NotificationModalBase from "../NotificationModalBase";

const JourneyCancellation = (props: JourneyNewApplicantProps) => {
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
                    user={props.user}
                    notificationTitle={JSON.parse(props.notificationData).title}
                    read={props.read}
                    date={props.date}
                />
            </TouchableOpacity>

            <NotificationModalBase isVisible={modalVisible!}>
                <NotificationHeader
                    title="RIDE IS CANCELED"
                    message="The driver has canceled your ride!"
                    sender={props.user}
                    disableModal={() => setModalVisible(false)}
                />
                <NotificationButtonGroup>
                    <NotificationConfirmButton onConfirm={() => setModalVisible(false)} />
                </NotificationButtonGroup>
            </NotificationModalBase>
        </>
    );
};

export default JourneyCancellation;