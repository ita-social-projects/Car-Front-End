import React, { useState } from "react";
import { Text, TouchableOpacity } from "react-native";
import NotificationsService from "../../../../api-service/notifications-service/NotificationsService";
import JourneyNewApplicantProps from "../../journey-new-applicant/JourneyNewApplicantProps";
import NewNotification from "../../new-notification/NewNotification";
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
                    disableModal={() => setModalVisible(false)}
                />

                <Text>
                    Aaa
                </Text>
            </NotificationModalBase>
        </>
    );
};

export default JourneyCancellation;