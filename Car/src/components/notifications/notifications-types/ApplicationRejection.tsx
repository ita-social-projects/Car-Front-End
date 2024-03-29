import React, { useContext } from "react";
import AuthContext from "../../auth/AuthContext";
import NotificationProps from "../NotificationProps";
import ApplicationAnswer from "./ApplicationAnswer";

const ApplicationRejection = (props: NotificationProps) => {
    const user = useContext(AuthContext).user;

    return (
        <ApplicationAnswer
            notification = {props}
            notificationTittle = "Has rejected your request!"
            notificationHeaderMessage = "The driver has rejected your request!"
            navigationToView = "Request is Rejected"
            IsDetailsTitleVisible={false}
            IsFeeVisible={false}
            IsBaggageVisible={false}
            journeyUserId = {user?.id!}
        />
    );
};

export default ApplicationRejection;
