import React from "react";
import MinimizedNotification from "../../minimized-notification/MinimizedNotification";
import NotificationProps from "../NotificationProps";
import * as navigation from "../../../components/navigation/Navigation";

const JourneyInvitation = (props: NotificationProps) => {

    return (
        <>
            <MinimizedNotification
                notificationId={props.notificationId}
                user={props.sender}
                notificationTitle={"Has invited you to join the ride!"}
                read={props.read}
                date={props.date}
                openModal={ () => {
                    navigation.navigate("Invitation", {
                        notification: props
                    });
                }}
            />
        </>
    );
};

export default JourneyInvitation;
