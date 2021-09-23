import React, { useEffect, useState } from "react";
import { FlatList, Swipeable } from "react-native-gesture-handler";
import NotificationsService from "../../../api-service/notifications-service/NotificationsService";
import Notification from "../../../models/notification/Notification";
import NotificationComponent from "./NotificationComponent";
import NotificationStyle from "./NotificationStyle";
import SignalRHubConnection from "../../../api-service/SignalRHubConnection";
import DM from "../../components/styles/DM";
import NavigationAddAndRemoveListener from "../../types/NavigationAddAndRemoveListener";
import { Image, Text, TouchableOpacity, View } from "react-native";
import { useIsFocused } from "@react-navigation/native";
import NotificationsStyle from "./NotificationsStyle";
import Ionicons from "react-native-vector-icons/Ionicons";
import Indicator from "../../components/activity-indicator/Indicator";

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
    const [isLoading, setIsLoading] = useState(false);
    const [notifications, setNotifications] = useState<Array<Notification>>([]);
    const [unreadNotificationsNumber, setUnreadNotificationsNumber] = useState(
        NotificationsService.getUnreadNotificationsNumber()
    );
    const [prevOpened, setPrevOpened] = useState<Swipeable>();
    const isFocused = useIsFocused();

    let rows: Array<Swipeable> = [];

    const refreshNotification = () => {

        NotificationsService.getNotifications().then((res) => {
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
            prevOpened.close();
        }
        setPrevOpened(rows[index]);
    };

    useEffect(() => {
        if (isFocused) {
            setIsLoading(true);
            refreshNotification();
            setIsLoading(false);
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
    const handleDelete = (id:number) =>{
        setNotifications(notifications.filter(x => x?.id != id));
    };
    const renderNotifications = () => {
        return(
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
                        ref={(ref: any) => (rows[notifications.indexOf(item)] = ref!)}
                        onSwipeableWillOpen={() =>
                            closeRow(notifications.indexOf(item))
                        }
                        overshootRight={false}
                    >
                        <NotificationComponent item={item} onDelete ={handleDelete} />
                    </Swipeable>
                )}
            />
        );
    };

    const renderNoNotificationsImage = () => {
        return(
            <>
                <View style={[NotificationsStyle.noNotificationsContainer,
                    { backgroundColor: DM("#FFFFFF") }]}>
                    <Text style={{ ...NotificationsStyle.noNotificationsStyle, color: DM("black") }}>
                        CURRENTLY YOU DO NOT HAVE ANY
                        {"\n"}
                        NOTIFICATIONS
                    </Text>
                    <Image
                        style={NotificationsStyle.noNotificationsImageStyle}
                        source={require("../../../assets/images/notifications/no-notifications.png")}
                    />
                </View>
            </>
        );

    };

    const renderNotificationList = () => {
        return (
            <>
                { notifications?.length ?
                    renderNotifications() : renderNoNotificationsImage()
                }
            </>
        );
    };

    return (
        <View style={[NotificationsStyle.container, { backgroundColor: DM("white") }]}>
            {isLoading ?
                <Indicator
                    size="large"
                    color={DM("#414045")}
                    text="Loading information..."
                /> :
                renderNotificationList()
            }
        </View>
    );
};

export default Notifications;
