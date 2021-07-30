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

const ApplicationRejection = (props: NotificationProps) => {
    const [notificationModalVisible, setNotificationModalVisible] = useState(props.visible);

    const user = useContext(AuthContext).user;

    return (
        <>
            <MinimizedNotification
                notificationId={props.notificationId}
                user={props.sender}
                notificationTitle={"Driver declined your request!"}
                read={props.read}
                date={props.date}
                openModal={() => setNotificationModalVisible(true)}
            />

            <NotificationModalBase isVisible={notificationModalVisible!} styles={[{ height: "85%" }]}>
                <NotificationHeader
                    title="REQUEST IS DECLINED"
                    message="The driver has declined your request!"
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
                </NotificationButtonGroup>
            </NotificationModalBase>
        </>
    );
};

export default ApplicationRejection;