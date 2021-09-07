import React from "react";
import NotificationProps from "../NotificationProps";
import InvitationAnswer from "./InvitationAnswer";

const RejectedInvitation = (props: NotificationProps) => {

    return (
        <InvitationAnswer
            notification={props}
            notificationTittle={"Passenger rejected your invitation!"}
            notificationHeaderTittle= {"INVITATION IS REJECTED"}
            notificationHeaderMessage= {"The passenger has rejected your invitation!"}
        />
    );
};

export default RejectedInvitation;
