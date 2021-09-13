import React from "react";
import NotificationProps from "../NotificationProps";
import ApplicationAnswer from "./ApplicationAnswer";

const AcceptedInvitation = (props: NotificationProps) => {

    return (
        <ApplicationAnswer
            notification = {props}
            notificationTittle = "Passenger accepted your invitation!"
            notificationHeaderTittle = "INVITATION IS ACCEPTED"
            notificationHeaderMessage = "The passenger has accepted your invitation!"
            IsDepartureTimeVisible={true}
            IsStopsTitleVisible={true}
        />
    );
};

export default AcceptedInvitation;
