import React, { useEffect, useState } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import NotificationStyle from "./NotificationStyle";
import Ionicons from "react-native-vector-icons/Ionicons";
import "reflect-metadata";
import { container } from "tsyringe";
import NotificationsService from "../../../api-service/notifications-service/NotificationsService";
import { Notification } from "../../../models/Notification";
import {JourneyNewApplicant} from "../../components/journey-new-applicant/JourneyNewApplicant";
import {ComponentsEnum} from "../../common/interfaces/ComponentsEnum";
import {NotificationProps} from "../../common/interfaces/NotificationProps";
import {UserAvatar} from "../../components/user-avatar/UserAvatar";

const NotificationComponent = (props: any) => {
    const notificationService = container.resolve(NotificationsService);
    const [requestType] = useState("");
    const [isModalVisible, setModalVisible] = useState(false);

    let componentsEnum: ComponentsEnum<NotificationProps> = {
        1 : JourneyNewApplicant
    }

    const getNotificationDescription = () => {

    };

    useEffect(() => {
        getNotificationDescription();
    });

    const updateNotification = () => {
        let notification: Notification;
        notification = {
            id: props.item.id,
            userId: 0,
            userName: "",
            position: "",
            description: "",
            isRead: true,
            createAt: "",
            receiverId: 0,
            journeyId: 0,
            userColor: "",
            notificationType: 1
        };
        notificationService.updateNotification(notification);
    };

    const showUserInfo = () => {
        toggleModal();
    };

    const toggleModal = () => {
        setModalVisible(!isModalVisible);
        updateNotification();
    };

    return (
        <View
            style={[
                NotificationStyle.baseContainer,
                props.item.isRead == true
                    ? NotificationStyle.readContainer
                    : NotificationStyle.unreadContainer
            ]}
        >
            <UserAvatar userId={props.item.userId}
                        flexBox={{width:20}}/>

            <View style={NotificationStyle.headerContainer}>
                <View style={NotificationStyle.innerContainer}>
                    <Text
                        style={NotificationStyle.valueView}
                        onPress={showUserInfo.bind(this, props)}
                    >
                        {props.item.userName}
                    </Text>
                    <TouchableOpacity>
                        <Ionicons name={"ellipsis-horizontal"} size={30} />
                    </TouchableOpacity>
                </View>
                <View style={NotificationStyle.innerContainer}>
                    <Text style={NotificationStyle.captionView}>
                        {requestType}
                    </Text>
                    <Text
                        style={[
                            NotificationStyle.dateBase,
                            props.item.isRead == true
                                ? NotificationStyle.dateBase
                                : NotificationStyle.dateUnread
                        ]}
                    >
                        {props.item.createAt}
                    </Text>
                </View>
            </View>
            <View>
                {React.createElement(componentsEnum[props.item.notificationType],
                        {
                            participant : {
                                userId: props.item!.userId,
                                hasLuggage : props.item!.isRead,
                                journeyId : props.item!.journeyId,
                                message : props.item!.description
                            },
                            visible : isModalVisible
                        })}
            </View>
        </View>
    );
};

export default NotificationComponent;
