import React from "react";
import NotificationProps from "../NotificationProps";
import ApplicationAnswer from "./ApplicationAnswer";

const ApplicationRejection = (props: NotificationProps) => {

    return (
        <ApplicationAnswer
            notification = {props}
            notificationTittle = "Driver declined your request!"
            notificationHeaderTittle = "REQUEST IS DECLINED"
            notificationHeaderMessage = "The driver has declined your request!"
        />
    );
};

export default ApplicationRejection;