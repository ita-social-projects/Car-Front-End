import React from "react";
import { NewNotificationProps } from "../../common/interfaces/NewNotificationProps";
import { UserAvatar } from "../user-avatar/UserAvatar";
import { Text, View } from "react-native";
import { ContainerStyle } from "../styles/flex/Container";
import { RowStyle } from "../styles/flex/RowStyle";
import { item } from "../styles/flex/ItemStyle";
import { NewNotificationStyle } from "./NewNotificationStyle";

export const NewNotification: React.FC<NewNotificationProps> = (
    props: NewNotificationProps
) => {
    return (
        <View style={props.read ? null : NewNotificationStyle.unread}>
            <View
                style={[
                    ContainerStyle.container,
                    NewNotificationStyle.notificationContainer
                ]}
            >
                <View style={[RowStyle.row, NewNotificationStyle.center]}>
                    <UserAvatar userId={props.userId} flexBox={{ width: 20 }} />
                    <View style={[item(65), NewNotificationStyle.content]}>
                        <Text style={NewNotificationStyle.name}>
                            {props.fullName}
                        </Text>
                        <Text style={NewNotificationStyle.title}>
                            {props.notificationTitle}
                        </Text>
                    </View>
                    <View style={[item(15), NewNotificationStyle.time]}>
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
    function getTimeDifference(minuendTime: Date, subtrahendTime: Date) {
        const diff = Math.abs(minuendTime.getTime() - subtrahendTime.getTime());
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

        function daysRemainingInMonth(date: Date) {
            const year = date.getFullYear();
            const month = date.getMonth();
            return new Date(year, month, 0).getDate();
        }
    }
};
