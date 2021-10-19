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
    const { colors } = useTheme();

    return(
        <TouchableOpacity
            onPress={() => {
                props.openModal();
                NotificationsService.markAsRead(props.notificationId);
            }}
        >
            <View style={props.read ? null : { backgroundColor: "rgba(0,161,206,0.1)" }}>
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
                            <Text style={[MinimizedNotificationStyle.name, { color: colors.accentBlue }]}>
                                {props.user!.name + " " + props.user!.surname}
                            </Text>
                            <Text style={[MinimizedNotificationStyle.title, { color: colors.secondaryDark }]}>
                                {props.notificationTitle}
                            </Text>
                        </View>
                        <View style={MinimizedNotificationStyle.time}>
                            <Text
                                style={
                                    props.read
                                        ? [MinimizedNotificationStyle.dateRead,
                                            { color: colors.secondaryDark }]
                                        : [MinimizedNotificationStyle.dateUnread,
                                            { color: colors.accentBlue }]
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
                                    borderTopColor: "rgba(0,0,0,0)",
                                    borderLeftColor: "rgba(0,0,0,0)",
                                    borderRightColor: "rgba(0,0,0,0)",
                                    borderBottomColor: colors.secondaryLight,
                                    backgroundColor: "rgba(0,0,0,0)",
                                }]
                            : [MinimizedNotificationStyle.optionsLineUnread,
                                {
                                    borderTopColor: "rgba(0,0,0,0)",
                                    borderLeftColor: "rgba(0,0,0,0)",
                                    borderRightColor: "rgba(0,0,0,0)",
                                    borderBottomColor: colors.accentBlue,
                                    backgroundColor: "rgba(0,0,0,0)",
                                }]
                    }
                />
            </View>
        </TouchableOpacity>
    );
};

export default MinimizedNotification;
