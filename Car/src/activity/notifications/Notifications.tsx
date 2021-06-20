import React, { useContext, useEffect, useState } from "react";
import { FlatList, Swipeable } from "react-native-gesture-handler";
import NotificationsService from "../../../api-service/notifications-service/NotificationsService";
import Notification from "../../../models/notification/Notification";
import AuthContext from "../../components/auth/AuthContext";
import NotificationComponent from "./NotificationComponent";
import NotificationStyle from "./NotificationStyle";
import SignalRHubConnection from "../../../api-service/SignalRHubConnection";
import DM from "../../components/styles/DM";
import NavigationAddAndRemoveListener from "../../types/NavigationAddAndRemoveListener";
import { TouchableOpacity } from "react-native";
import { useIsFocused } from "@react-navigation/native";
import NotificationsStyle from "./NotificationsStyle";
import Ionicons from "react-native-vector-icons/Ionicons";

const CustomDelete = (props: { pressHandler: () => void }) => {
    return (
        <TouchableOpacity
            style={NotificationsStyle.deleteButton}
            onPress={props.pressHandler}
        >
            <Ionicons
                name={"trash-outline"}
                color={"#ffffff"}
                size={30}
            />
        </TouchableOpacity>
    );
};

const Notifications = (props: NavigationAddAndRemoveListener) => {
    const { user } = useContext(AuthContext);

    const [notifications, setNotifications] = useState<Array<Notification>>([]);
    const [unreadNotificationsNumber, setUnreadNotificationsNumber] = useState(
        NotificationsService.getUnreadNotificationsNumber(user?.id)
    );
    const [prevOpened, setPrevOpened] = useState<Swipeable>();
    const isFocused = useIsFocused();

    let rows: Array<Swipeable> = [];

    const refreshNotification = () => {
        NotificationsService.getNotifications(Number(user?.id)).then((res) => {
            if (res.data) {
                setNotifications(res.data);
            }
        });
    };

    const renderActions = (id: number) => {
        return (
            <CustomDelete
                pressHandler={() => {
                    prevOpened?.close();
                    NotificationsService.deleteNotification(id).then(() => {
                        refreshNotification();
                    });
                }}
            />
        );
    };

    const closeRow = (index: number) => {
        if (prevOpened && prevOpened !== rows[index]) {
            prevOpened!.close();
        }
        setPrevOpened(rows[index]);
    };

    useEffect(() => {
        if (isFocused) {
            refreshNotification();
        } else {
            prevOpened?.close();
        }
    }, [isFocused]);

    useEffect(() => {
        refreshNotification();
    }, [unreadNotificationsNumber]);

    useEffect(() => {
        SignalRHubConnection.on("sendToReact", refreshNotification);
        SignalRHubConnection.on(
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
            style={[
                NotificationStyle.headerContainer,
                { backgroundColor: DM("#FFFFFF") },
            ]}
            onScroll={() => prevOpened?.close()}
            data={notifications}
            keyExtractor={(item, key) => "" + key + item}
            renderItem={({ item }) => (
                <Swipeable
                    renderRightActions={() => renderActions(item.id)}
                    ref={(ref) => (rows[notifications.indexOf(item)] = ref!)}
                    onSwipeableWillOpen={() =>
                        closeRow(notifications.indexOf(item))
                    }
                    overshootRight={false}
                >
                    <NotificationComponent item={item} />
                </Swipeable>
            )}
        />
    );
};

export default Notifications;
