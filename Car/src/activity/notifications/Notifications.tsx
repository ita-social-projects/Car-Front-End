import React, { useContext, useState, useEffect } from "react";
import { Alert } from "react-native";
import { FlatList } from "react-native-gesture-handler";
import NotificationsService from "../../../api-service/notifications-service/NotificationsService";
import Notification from "../../../models/Notification";
import AuthContext, {SignalRHubConnection} from "../../components/auth/AuthContext";
import NotificationComponent from "./NotificationComponent";
import NotificationStyle from "./NotificationStyle";

const Notifications = (props: any) => {
    const { user } = useContext(AuthContext);
    const [notifications, setNotifications] = useState<Array<Notification>>([]);
    const hubConnection = SignalRHubConnection;

    const [unreadNotificationsNumber, setUnreadNotificationsNumber] = useState(
        NotificationsService.getUnreadNotificationsNumber(user!.id)
    );

    hubConnection.start();

    const refreshNotification = () => {
        NotificationsService.getNotifications(Number(user?.id))
            .then((res) => {
                if (res.data) {
                    setNotifications(res.data);
                }
            })
            .catch((e) => Alert.alert("Error", e.message));
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
            keyExtractor={(item, key) => "" + key + item}
            renderItem={({ item }) => <NotificationComponent item={item} />}
        />
    );
};

export default Notifications;
