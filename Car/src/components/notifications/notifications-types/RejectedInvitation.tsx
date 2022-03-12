import React from "react";
import NotificationProps from "../NotificationProps";
import ApplicationAnswer from "./ApplicationAnswer";

const RejectedInvitation = (props: NotificationProps) => {

    return (
        <ApplicationAnswer
            notification = {props}
            notificationTittle = "Passenger rejected your invitation!"
            notificationHeaderMessage = "The passenger has rejected your invitation!"
            navigationToView = "Invitation is Rejected"
            IsDepartureTimeVisible={true}
            IsStopsTitleVisible={true}
            journeyUserId = {props.sender?.id!}
        />
    );
};

export default RejectedInvitation;
