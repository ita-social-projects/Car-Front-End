import * as signalR from "@microsoft/signalr";
import React, { useContext, useEffect, useState } from "react";
import { ScrollView } from "react-native-gesture-handler";
import "reflect-metadata";
import { container } from "tsyringe";
import NotificationsService from "../../../api-service/notifications-service/NotificationsService";
import { routes } from "../../../Environment";
import { Notification } from "../../../models/Notification";
import { AuthContext } from "../auth/AuthProvider";
import NotificationComponent from "./NotificationComponent";
import NotificationStyle from "./NotificationStyle";
export default function Notifications(props: any) {
    const { user, unreadNumber } = useContext(AuthContext);
    const [notifications, setNotifications] = useState<Array<Notification>>([]);
    const notificationsService = container.resolve(NotificationsService);
    const hubConnection = new signalR.HubConnectionBuilder()
        .withUrl(routes.notificationUrl)
        .build();
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
    }, [unreadNumber]);

    useEffect(() => {
        hubConnection.on("sendToReact", refreshNotification);
        props.navigation.addListener("focus", refreshNotification);
        return () => {
            props.navigation.removeListener("focus", refreshNotification);
        };
    }, []);

    return (
        <ScrollView style={NotificationStyle.headerContainer}>
            {notifications.map((item, key) => (
                <NotificationComponent item={item} key={key} />
            ))}
        </ScrollView>
    );
}
