import React from "react";
import NotificationProps from "../NotificationProps";
import ApplicationAnswer from "./ApplicationAnswer";

const RejectedInvitation = (props: NotificationProps) => {

    return (
        <ApplicationAnswer
            notification = {props}
            notificationTittle = "Passenger rejected your invitation!"
            notificationHeaderTittle = "INVITATION IS REJECTED"
            notificationHeaderMessage = "The passenger has rejected your invitation!"
            IsDepartureTimeVisible={true}
            IsStopsTitleVisible={true}
        />
    );
};

export default RejectedInvitation;
