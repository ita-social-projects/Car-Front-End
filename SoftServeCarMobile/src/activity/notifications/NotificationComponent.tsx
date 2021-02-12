import React, { useEffect, useState } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import NotificationStyle from "./NotificationStyle";
import Ionicons from "react-native-vector-icons/Ionicons";
import "reflect-metadata";
import { container } from "tsyringe";
import NotificationsService from "../../../api-service/notifications-service/NotificationsService";
import { Notification } from "../../../models/Notification";
import AvatarComponent from "./AvatarComponent";
import {JourneyNewApplicant} from "../../components/journey-new-applicant/JourneyNewApplicant";
import {IComponentsEnum} from "../../common/interfaces/IComponentsEnum";
import {INotificationProps} from "../../common/interfaces/INotificationProps";

const NotificationComponent = (props: any) => {
    const notificationService = container.resolve(NotificationsService);
    const [requestType] = useState("");
    const [isModalVisible, setModalVisible] = useState(false);

    let componentsEnumDict: IComponentsEnum<INotificationProps> = {
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
            <AvatarComponent
                userId={props.item.userId}
                userName={props.item.userName}
                userColor={props.item.userColor}
            />
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
                {React.createElement(componentsEnumDict[props.item.notificationType],
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
