import React from "react";
import NotificationProps from "../NotificationProps";
import InvitationAnswer from "./InvitationAnswer";

const AcceptedInvitation = (props: NotificationProps) => {

    return (
        <InvitationAnswer
            notification = {props}
            notificationTittle = "Passenger accepted your invitation!"
            notificationHeaderTittle = "INVITATION IS ACCEPTED"
            notificationHeaderMessage = "The passenger has accepted your invitation!"
            IsDepartureTimeVisible={true}
            IsStopsTitleVisible={true}
            journeyUserId={props.sender?.id!}
        />
    );
};

export default AcceptedInvitation;
