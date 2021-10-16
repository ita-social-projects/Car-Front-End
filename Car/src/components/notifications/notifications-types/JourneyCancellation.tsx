import React, { useContext } from "react";
import NotificationProps from "../NotificationProps";
import AuthContext from "../../auth/AuthContext";
import ApplicationAnswer from "./ApplicationAnswer";

const JourneyCancellation = (props: NotificationProps) => {
    const user = useContext(AuthContext).user;

    return (
        <ApplicationAnswer
            notification = {props}
            notificationTittle = "Ride is canceled"
            notificationHeaderTittle = "RIDE IS CANCELED"
            notificationHeaderMessage = "The driver has canceled \nyour ride!"
            IsDetailsTitleVisible={false}
            IsFeeVisible={false}
            IsBaggageVisible={false}
            journeyUserId = {user?.id!}
        />
    );
};

export default JourneyCancellation;
