import React, { useState } from "react";
import MinimizedNotification from "../../minimized-notification/MinimizedNotification";
import NotificationHeader from "../notification-header/NotificationHeader";
import NotificationModalBase from "../notification-modal-base/NotificationModalBase";
import NotificationProps from "../NotificationProps";

const AcceptedInvitation = (props: NotificationProps) => {
    const [modalVisible, setModalVisible] = useState(props.visible);

    return (
        <>
            <MinimizedNotification
                notificationId={props.notificationId}
                user={props.sender}
                notificationTitle={"Accepted Invitation (Not implemented!)"}
                read={props.read}
                date={props.date}
                openModal={() => setModalVisible(true)}
            />
            <NotificationModalBase isVisible={modalVisible!}>
                <NotificationHeader
                    title="Not implemented!"
                    message=""
                    sender={props.sender}
                    disableModal={() => setModalVisible(false)}
                    withoutSnooze
                />
            </NotificationModalBase>
        </>
    );
};

export default AcceptedInvitation;