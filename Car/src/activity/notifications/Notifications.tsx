import * as signalR from "@microsoft/signalr";
import React, { useContext, useState, useEffect } from "react";
import { FlatList } from "react-native-gesture-handler";
import { container } from "tsyringe";
import EnvironmentRoutes from "../../../api-service/EnvironmentRoutes";
import NotificationsService from "../../../api-service/notifications-service/NotificationsService";
import Notification from "../../../models/Notification";
import AuthContext from "../auth/AuthContext";
import NotificationComponent from "./NotificationComponent";
import NotificationStyle from "./NotificationStyle";

const Notifications = (props: any) => {
    const { user } = useContext(AuthContext);
    const [notifications, setNotifications] = useState<Array<Notification>>([]);
    const notificationsService = container.resolve(NotificationsService);
    const hubConnection = new signalR.HubConnectionBuilder()
        .withUrl(EnvironmentRoutes.notificationUrl)
        .build();
    let [unreadNotificationsNumber, setUnreadNotificationsNumber] = useState(1);
    hubConnection.start();

    const refreshNotification = () => {
        notificationsService
            .getNotifications(Number(user?.id))
            .then((res) => {
                if (res.data) {
                    setNotifications(res.data);
                }
            })
            .catch((e) => console.log(e));
    };

    useEffect(() => {
        refreshNotification();
    }, [unreadNotificationsNumber]);

    useEffect(() => {
        hubConnection.on("sendToReact", refreshNotification);
        hubConnection.on(
            "updateUnreadNotificationsNumber",
            setUnreadNotificationsNumber
        );
        props.navigation.addListener("focus", refreshNotification);
        return () => {
            props.navigation.removeListener("focus", refreshNotification);
        };
    }, []);

    return (
        <FlatList
            style={NotificationStyle.headerContainer}
            data={notifications}
            renderItem={({ item }) => <NotificationComponent item={item} />}
        />
    );
};

export default Notifications;
