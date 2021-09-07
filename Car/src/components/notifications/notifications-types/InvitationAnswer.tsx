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
import Stop from "../../../../models/stop/Stop";
import JourneyPoint from "../../../../models/journey/JourneyPoint";
import { onStopPressHandler } from "./StopNavigationFunction/StopNavigationFunction";

interface InvitationAnswerProps {
    notification: NotificationProps,
    notificationTittle: string,
    notificationHeaderTittle: string,
    notificationHeaderMessage: string,
}

const InvitationAnswer = (props: InvitationAnswerProps) => {
    const [notificationModalVisible, setNotificationModalVisible] = useState(props.notification.visible);
    const user = useContext(AuthContext).user;

    const onStopPress = (stop:Stop, stops:Stop[], journeyPoints: JourneyPoint[], notification: NotificationProps) =>
    {
        setNotificationModalVisible(false);
        onStopPressHandler(stop,stops,journeyPoints, notification);
    };

    return (
        <>
            <MinimizedNotification
                notificationId={props.notification.notificationId}
                user={props.notification.sender}
                notificationTitle={props.notificationTittle}
                read={props.notification.read}
                date={props.notification.date}
                openModal={() => setNotificationModalVisible(true)}
            />

            <NotificationModalBase isVisible={notificationModalVisible!} styles={[{}]}>
                <NotificationHeader
                    title={props.notificationHeaderTittle}
                    message={props.notificationHeaderMessage}
                    sender={props.notification.sender}
                    disableModal={() => setNotificationModalVisible(false)}
                />

                <NotificationRideDetails
                    journeyId={props.notification.journeyId!}
                    userId={user?.id!}/>

                <NotificationRideStops
                    title={"Your route"}
                    stopsOwner={user}
                    journeyId={props.notification.journeyId!}
                    IsStopsTitleVisible
                    onStopPress = {onStopPress}
                    notification = {props.notification}/>

                <NotificationButtonGroup>
                    <NotificationConfirmButton onConfirm={() => setNotificationModalVisible(false)} />
                </NotificationButtonGroup>
            </NotificationModalBase>
        </>
    );
};

export default InvitationAnswer;
