import React from "react";
import MinimizedNotification from "../../minimized-notification/MinimizedNotification";
import NotificationProps from "../NotificationProps";
import * as navigation from "../../navigation/Navigation";

const JourneyDetailsUpdate = (props: NotificationProps) => {
    return (
        <>
            <MinimizedNotification
                notificationId={props.notificationId}
                user={props.sender}
                notificationTitle={"Ride details have been updated!"}
                read={props.read}
                date={props.date}
                openModal={ () => {
                    navigation.navigate("Ride details have been updated", {
                        notification: props
                    });
                }}
            />
        </>
    );
};

export default JourneyDetailsUpdate;