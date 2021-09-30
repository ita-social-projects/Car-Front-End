import React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import ContainerStyle from "../styles/flex/Container";
import RowStyle from "../styles/flex/Row";
import MinimizedNotificationStyle from "./MinimizedNotificationStyle";
import AvatarLogo from "../avatar-logo/AvatarLogo";
import moment from "moment";
import { useTheme } from "../theme/ThemeProvider";
import NotificationsService from "../../../api-service/notifications-service/NotificationsService";
import MinimizedNotificationProps from "./MinimizedNotificationProps";

const MinimizedNotification = (props: MinimizedNotificationProps) => {
    const { DM } = useTheme();

    return(
        <TouchableOpacity
            onPress={() => {
                props.openModal();
                NotificationsService.markAsRead(props.notificationId);
            }}
        >
            <View style={props.read ? null : { backgroundColor: DM("rgba(0,161,206,0.1)") }}>
                <View
                    style={[
                        ContainerStyle.container,
                        MinimizedNotificationStyle.notificationContainer
                    ]}
                >
                    <View style={[RowStyle.row, MinimizedNotificationStyle.center]}>
                        <View style={MinimizedNotificationStyle.avatar}>
                            <AvatarLogo user={props.user} size={38.5} />
                        </View>
                        <View style={MinimizedNotificationStyle.content}>
                            <Text style={[MinimizedNotificationStyle.name, { color: DM("#02A2CF") }]}>
                                {props.user!.name + " " + props.user!.surname}
                            </Text>
                            <Text style={[MinimizedNotificationStyle.title, { color: DM("#909095") }]}>
                                {props.notificationTitle}
                            </Text>
                        </View>
                        <View style={MinimizedNotificationStyle.time}>
                            <Text
                                style={
                                    props.read
                                        ? [MinimizedNotificationStyle.dateRead,
                                            { color: DM("#909095") }]
                                        : [MinimizedNotificationStyle.dateUnread,
                                            { color: DM("#02a2cf") }]
                                }
                            >
                                {moment(props.date).fromNow(true)}
                            </Text>
                        </View>
                    </View>
                </View>
                <View
                    style={
                        props.read
                            ? [MinimizedNotificationStyle.optionsLineRead,
                                {
                                    borderTopColor: DM("rgba(0,0,0,0)"),
                                    borderLeftColor: DM("rgba(0,0,0,0)"),
                                    borderRightColor: DM("rgba(0,0,0,0)"),
                                    borderBottomColor: DM("#C1C1C5"),
                                    backgroundColor: DM("rgba(0,0,0,0)"),
                                }]
                            : [MinimizedNotificationStyle.optionsLineUnread,
                                {
                                    borderTopColor: DM("rgba(0,0,0,0)"),
                                    borderLeftColor: DM("rgba(0,0,0,0)"),
                                    borderRightColor: DM("rgba(0,0,0,0)"),
                                    borderBottomColor: DM("#02a2cf"),
                                    backgroundColor: DM("rgba(0,0,0,0)"),
                                }]
                    }
                />
            </View>
        </TouchableOpacity>
    );
};

export default MinimizedNotification;
