import React from "react";
import { View, TouchableOpacity } from "react-native";
import NotificationsService from "../../../api-service/notifications-service/NotificationsService";
import NewNotification from "../new-notification/NewNotification";
import RideFoundProps from "./RideFoundProps";

const RideFound = (props: RideFoundProps) => {
    const title = "Ride found"!;

    return (
        <View>
            <TouchableOpacity
                onPress={() => {
                    NotificationsService.markAsRead(props.notificationId);
                }}
            >
                <NewNotification
                    user={props.user}
                    notificationTitle={title}
                    read={props.read}
                    date={props.date}
                />
            </TouchableOpacity>
        </View>
    );
};

export default RideFound;
