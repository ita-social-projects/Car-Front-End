import * as signalR from "@microsoft/signalr";
import React, { useContext, useEffect, useState } from "react";
import { Text, View } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import "reflect-metadata";
import { container } from "tsyringe";
import NotificationsService from "../../../api-service/notifications-service/NotificationsService";
import { routes } from "../../../Environment";
import { Notification } from "../../../models/Notification";
import { AuthContext } from "../../activity/auth/AuthProvider";
import NotificationComponent from "./NotificationComponent";
import { headerStyle } from "./NotificationStyle";

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
        refreshNotification();
        props.navigation.addListener("focus", refreshNotification);
        return () => {
            props.navigation.removeListener("focus", refreshNotification);
        };
    }, []);

    return (
        <ScrollView style={headerStyle.headerContainer}>
            <View
                style={{
                    padding: 10,
                    borderBottomColor: "#909095",
                    borderWidth: 1
                }}
            >
                <Text style={headerStyle.pageTitle}>Notifications</Text>
            </View>
            {notifications.map((item, key) => (
                <>
                    <NotificationComponent item={item} key={key} />
                </>
            ))}
        </ScrollView>
    );
}
