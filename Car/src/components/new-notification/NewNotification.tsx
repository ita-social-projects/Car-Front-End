import React from "react";
import { Text, View } from "react-native";
import ContainerStyle from "../styles/flex/Container";
import RowStyle from "../styles/flex/Row";
import NewNotificationStyle from "./NewNotificationStyle";
import AvatarLogo from "../avatar-logo/AvatarLogo";
import moment from "moment";

const NewNotification = (props: any) => (
    <View style={props.read ? null : NewNotificationStyle.unread}>
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
                    <Text style={NewNotificationStyle.name}>
                        {props.user!.name + " " + props.user!.surname}
                    </Text>
                    <Text style={NewNotificationStyle.title}>
                        {props.notificationTitle}
                    </Text>
                </View>
                <View style={NewNotificationStyle.time}>
                    <Text
                        style={
                            props.read
                                ? NewNotificationStyle.dateRead
                                : NewNotificationStyle.dateUnread
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
                    ? NewNotificationStyle.optionsLineRead
                    : NewNotificationStyle.optionsLineUnread
            }
        />
    </View>
);

export default NewNotification;
