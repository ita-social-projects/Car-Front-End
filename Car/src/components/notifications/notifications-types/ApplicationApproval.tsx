import React from "react";
import NotificationProps from "../NotificationProps";
import ApplicationAnswer from "./ApplicationAnswer";

const ApplicationApproval = (props: NotificationProps) => {
    return (
        <ApplicationAnswer
            notification = {props}
            notificationTittle = "Driver approved your request!"
            notificationHeaderTittle = "REQUEST IS APPROVED"
            notificationHeaderMessage = "The driver has approved your request!"
            withWithdraw
        />

    );
};

export default ApplicationApproval;