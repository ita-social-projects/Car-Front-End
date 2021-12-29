import React from "react";
import MinimizedNotification from "../../minimized-notification/MinimizedNotification";
import NotificationProps from "../NotificationProps";
import * as navigation from "../../../components/navigation/Navigation";

interface ApplicationAnswerProps {
    notification: NotificationProps,
    notificationTittle: string,
    notificationHeaderTittle: string,
    notificationHeaderMessage: string,
    withWithdraw?: boolean,
    IsDetailsTitleVisible?: boolean,
    IsDepartureTimeVisible?: boolean,
    IsFeeVisible?: boolean,
    IsAvailableSeatsVisible?: boolean,
    IsBaggageVisible?: boolean,
    IsStopsTitleVisible?: boolean,
    journeyUserId: number
}

const ApplicationAnswer = (props: ApplicationAnswerProps) => {

    return (
        <>
            <MinimizedNotification
                notificationId={props.notification.notificationId}
                user={props.notification.sender}
                notificationTitle={props.notificationTittle}
                read={props.notification.read}
                date={props.notification.date}
                openModal={ () => {
                    navigation.navigate("Invitation is Accepted", {
                        notification: props
                    });
                }}
            />
        </>
    );
};

export default ApplicationAnswer;
