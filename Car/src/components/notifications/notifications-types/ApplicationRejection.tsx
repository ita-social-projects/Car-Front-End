import React from "react";
import NotificationProps from "../NotificationProps";
import ApplicationAnswer from "./ApplicationAnswer";

const ApplicationRejection = (props: NotificationProps) => {

    return (
        <ApplicationAnswer
            notification = {props}
            notificationTittle = "Driver rejected your request!"
            notificationHeaderTittle = "REQUEST IS REJECTED"
            notificationHeaderMessage = "The driver has rejected your request!"
            IsDetailsTitleVisible={false}
            IsFeeVisible={false}
            IsBaggageVisible={false}
        />
    );
};

export default ApplicationRejection;
