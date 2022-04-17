import React from "react";
import MinimizedNotification from "../minimized-notification/MinimizedNotification";
import NotificationProps from "../notifications/NotificationProps";
import * as navigation from "../../components/navigation/Navigation";

const JourneyNewApplicant = (props: NotificationProps) => {
    return (
        <>
            <MinimizedNotification
                notificationId={props.notificationId}
                user={props.sender}
                notificationTitle={"Has asked to join your ride!"}
                read={props.read}
                date={props.date}
                openModal={ () => {
                    navigation.navigate("New Applicant", {
                        notification: props
                    });
                }}
            />

        </>);
};

export default JourneyNewApplicant;
