import * as signalR from "@microsoft/signalr";
import React, { useContext, useEffect, useState } from "react";
import { View, Text } from "react-native";
import { FlatList } from "react-native-gesture-handler";
import "reflect-metadata";
import { container } from "tsyringe";
import NotificationsService from "../../../api-service/notifications-service/NotificationsService";
import { routes } from "../../../Environment";
import { Notification } from "../../../models/Notification";
import { AuthContext } from "../auth/AuthProvider";
import NotificationComponent from "./NotificationComponent";
import NotificationStyle from "./NotificationStyle";

const Notifications = (props: any) => {
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
        refreshNotification();
        props.navigation.addListener("focus", refreshNotification);
        return () => {
            props.navigation.removeListener("focus", refreshNotification);
        };
    }, []);

    return (
        <FlatList 
            style={NotificationStyle.headerContainer}
            data={notifications}
            renderItem={({item})=>(
                <NotificationComponent item={item} />
            )}
        />
    );
}

export default Notifications;