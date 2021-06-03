import React, { useState } from "react";
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
            <NewNotification
                notificationId={props.notificationId}
                user={props.user}
                notificationTitle={"Ride is canceled"}
                read={props.read}
                date={props.date}
                openModal={() => setModalVisible(true)}
            />
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