import React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import ContainerStyle from "../styles/flex/Container";
import RowStyle from "../styles/flex/Row";
import NewNotificationStyle from "./NewNotificationStyle";
import AvatarLogo from "../avatar-logo/AvatarLogo";
import moment from "moment";
import DM from "../styles/DM";
import NewNotificationProps from "./NewNotificationProps";
import NotificationsService from "../../../api-service/notifications-service/NotificationsService";

const NewNotification = (props: NewNotificationProps) => (
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
                    NewNotificationStyle.notificationContainer
                ]}
            >
                <View style={[RowStyle.row, NewNotificationStyle.center]}>
                    <View style={NewNotificationStyle.avatar}>
                        <AvatarLogo user={props.user} size={38.5} />
                    </View>
                    <View style={NewNotificationStyle.content}>
                        <Text style={[NewNotificationStyle.name, { color: DM("#02A2CF") }]}>
                            {props.user!.name + " " + props.user!.surname}
                        </Text>
                        <Text style={[NewNotificationStyle.title, { color: DM("#909095") }]}>
                            {props.notificationTitle}
                        </Text>
                    </View>
                    <View style={NewNotificationStyle.time}>
                        <Text
                            style={
                                props.read
                                    ? [NewNotificationStyle.dateRead,
                                        { color: DM("#909095") }]
                                    : [NewNotificationStyle.dateUnread,
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
                        ? [NewNotificationStyle.optionsLineRead,
                            {
                                borderTopColor: DM("rgba(0,0,0,0)"),
                                borderLeftColor: DM("rgba(0,0,0,0)"),
                                borderRightColor: DM("rgba(0,0,0,0)"),
                                borderBottomColor: DM("#C1C1C5"),
                                backgroundColor: DM("rgba(0,0,0,0)"),
                            }]
                        : [NewNotificationStyle.optionsLineUnread,
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

export default NewNotification;
