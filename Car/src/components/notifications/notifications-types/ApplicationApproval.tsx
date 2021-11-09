import React, { useContext } from "react";
import AuthContext from "../../auth/AuthContext";
import NotificationProps from "../NotificationProps";
import ApplicationAnswer from "./ApplicationAnswer/ApplicationAnswer";

const ApplicationApproval = (props: NotificationProps) => {
    const user = useContext(AuthContext).user;

    return (
        <ApplicationAnswer
            notification = {props}
            notificationTittle = "Driver approved your request!"
            notificationHeaderTittle = "REQUEST IS APPROVED"
            notificationHeaderMessage = "The driver has approved your request!"
            withWithdraw
            journeyUserId = {user?.id!}
        />
    );
};

export default ApplicationApproval;
