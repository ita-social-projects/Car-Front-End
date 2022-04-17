import React from "react";
import NotificationProps from "../NotificationProps";
import MinimizedNotification from "../../minimized-notification/MinimizedNotification";
import * as navigation from "../../../components/navigation/Navigation";

const JourneyCancellation = (props: NotificationProps) => {

    return (
        <>
            <MinimizedNotification
                notificationId={props.notificationId}
                user={props.sender}
                notificationTitle={"Has canceled the ride!"}
                read={props.read}
                date={props.date}
                openModal={ () => {
                    navigation.navigate("Ride is Canceled", {
                        notification: props
                    });
                }}
            />

        </>
    );
};

export default JourneyCancellation;
