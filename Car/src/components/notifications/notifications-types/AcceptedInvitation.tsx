import React from "react";
import NotificationProps from "../NotificationProps";
import ApplicationAnswer from "./ApplicationAnswer";

const AcceptedInvitation = (props: NotificationProps) => {

    return (
        <ApplicationAnswer
            notification = {props}
            notificationTittle = "Passenger accepted your invitation!"
            notificationHeaderMessage = "The passenger has accepted your invitation!"
            navigationToView = "Invitation is Accepted"
            IsDepartureTimeVisible={true}
            IsStopsTitleVisible={true}
            journeyUserId={props.sender?.id!}
        />
    );
};

export default AcceptedInvitation;
