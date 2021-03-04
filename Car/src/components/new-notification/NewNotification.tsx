import React from "react";
import { Text, View } from "react-native";
import ContainerStyle from "../styles/flex/Container";
import RowStyle from "../styles/flex/Row";
import NewNotificationStyle from "./NewNotificationStyle";
import Item from "../styles/flex/Item";
import AvatarLogo from "../avatar-logo/AvatarLogo";

const NewNotification = (props: any) => {
    return (
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
                    <View style={[Item(65), NewNotificationStyle.content]}>
                        <Text style={NewNotificationStyle.name}>
                            {props.user!.name + " " + props.user!.surname}
                        </Text>
                        <Text style={NewNotificationStyle.title}>
                            {props.notificationTitle}
                        </Text>
                    </View>
                    <View style={[Item(15), NewNotificationStyle.time]}>
                        <Text
                            style={
                                props.read
                                    ? NewNotificationStyle.dateRead
                                    : NewNotificationStyle.dateUnread
                            }
                        >
                            {getTimeDifference(new Date(), props.date)}
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
    function getTimeDifference (minuendTime: Date, subtrahendTime: Date) {
        const diff = Math.abs(
            Date.UTC(
                minuendTime.getUTCFullYear(),
                minuendTime.getUTCMonth(),
                minuendTime.getUTCDate(),
                minuendTime.getUTCHours(),
                minuendTime.getUTCMinutes(),
                minuendTime.getUTCSeconds()
            ) - subtrahendTime.getTime()
        );
        const minutes = Math.floor(diff / 1000 / 60);
        const hours = Math.floor(diff / 1000 / 60 / 60);
        const days = Math.floor(diff / 1000 / 60 / 60 / 24);
        const months = Math.floor(diff / 1000 / 60 / 60 / 24 / 30);
        const years = Math.floor(diff / 1000 / 60 / 60 / 24 / 30 / 12);

        if (minutes < 60) {
            if (minutes == 0) {
                return "now";
            }

            return minutes + " min";
        }
        if (hours < 24) {
            return hours + " h";
        }
        if (days < daysRemainingInMonth(new Date())) {
            return days + " d";
        }
        if (months < 12) {
            return months + " m";
        }

        return years + " y";

        function daysRemainingInMonth (date: Date) {
            const year = date.getFullYear();
            const month = date.getMonth();

            return new Date(year, month, 0).getDate();
        }
    }
};

export default NewNotification;
