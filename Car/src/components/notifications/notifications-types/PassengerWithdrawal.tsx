import React, { useState } from "react";
import MinimizedNotification from "../../minimized-notification/MinimizedNotification";
import NotificationRideDetails from "../notification-ride-details/NotificationRideDetails";
import NotificationButtonGroup from "../notification-buttons/NotificationButtonGroup";
import NotificationHeader from "../notification-header/NotificationHeader";
import NotificationModalBase from "../notification-modal-base/NotificationModalBase";
import NotificationProps from "../NotificationProps";
import NotificationConfirmButton from "../notification-buttons/NotificationConfirmButton";
import NotificationRideStops from "../notification-ride-stops/NotificationRideStops";
import { onStopPressHandler } from "./StopNavigationFunction/StopNavigationFunction";
import Stop from "../../../../models/stop/Stop";
import JourneyPoint from "../../../../models/journey/JourneyPoint";

const PassengerWithdrawal = (props: NotificationProps) => {
    const [modalVisible, setModalVisible] = useState(props.visible);
    const data = JSON.parse(props.notificationData);

    const onStopPress = (stop:Stop, stops:Stop[], journeyPoints: JourneyPoint[], notification: NotificationProps) =>
    {
        setModalVisible(false);
        onStopPressHandler(stop,stops,journeyPoints, notification);
    };

    return (
        <>
            <MinimizedNotification
                notificationId={props.notificationId}
                user={props.sender}
                notificationTitle={"The passenger has withdrawn your ride!"}
                read={props.read}
                date={props.date}
                openModal={() => setModalVisible(true)}
            />

            <NotificationModalBase isVisible={modalVisible!} styles={[]}>
                <NotificationHeader
                    title="WITHDRAWAL"
                    message="The passenger has withdrawn your ride!"
                    sender={props.sender}
                    disableModal={() => setModalVisible(false)}
                />

                <NotificationRideDetails
                    journeyId={props.journeyId}
                    userId={props.sender?.id!}
                    journeyUser={data.journeyUser}
                />

                <NotificationRideStops
                    title={"Your route"}
                    journeyId={props.journeyId}
                    stopsOwner={props.sender}
                    onStopPress={onStopPress}
                    notification={props}
                />

                <NotificationButtonGroup>
                    <NotificationConfirmButton onConfirm={() => setModalVisible(false)} />
                </NotificationButtonGroup>
            </NotificationModalBase>
        </>
    );
};

export default PassengerWithdrawal;
