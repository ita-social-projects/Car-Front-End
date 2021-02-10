import React, { useEffect, useState } from "react";
import { View, Text, Button, Alert, TouchableOpacity } from "react-native";
import NotificationStyle from "./NotificationStyle";
import { Modal } from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import "reflect-metadata";
import { container } from "tsyringe";
import NotificationsService from "../../../api-service/notifications-service/NotificationsService";
import { Notification, NotificationType } from "../../../models/Notification";
import AvatarComponent from "./AvatarComponent";

const NotificationComponent = (props: any) => {
    const [modalTitle, setModalTitle] = useState("default title");
    const notificationService = container.resolve(NotificationsService);
    const [requestType, setRequestType] = useState("");
    const [isModalVisible, setModalVisible] = useState(false);

    const getNotificationDescription = () => {
        switch (props.item.notificationType) {
            case NotificationType.PassengerApply:
                setModalTitle("NEW APPLICANT");
                setRequestType("asked to join your journey");
                break;

            case NotificationType.ApplicationApproval:
                setModalTitle("APPLICATION APPROVAL");
                setRequestType("approved your application");
                break;

            case NotificationType.AcceptedInvitation:
                setModalTitle("NEW PARTICIPANT");
                setRequestType("accepted your invitation");
                break;

            case NotificationType.HRMarketingMessage:
                setModalTitle("HR NEWS");
                setRequestType("marketing news");
                break;

            case NotificationType.HRMarketingSurvey:
                setModalTitle("HR SURVEY");
                setRequestType("marketing survey");
                break;

            case NotificationType.JourneyCancellation:
                setModalTitle("JOURNEY CANCELLATION");
                setRequestType("canceled the journey");
                break;

            case NotificationType.JourneyDetailsUpdate:
                setModalTitle("JOURNEY UPDATE");
                setRequestType("updated journey details");
                break;

            case NotificationType.JourneyInvitation:
                setModalTitle("JOURNEY INVITATION");
                setRequestType("invites you to join the journey");
                break;

            case NotificationType.PassengerWithdrawal:
                setModalTitle("PASSENGER WITHDRAWAL");
                setRequestType("withdrawn from the journey");
                break;

            case NotificationType.RejectedInvitation:
                setModalTitle("INVITATION REJECTION");
                setRequestType("rejected your invitation");
                break;

            default:
                Alert.alert("WRONG NOTIFICATION TYPE");
        }
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
                <Modal
                    visible={isModalVisible}
                    style={{
                        borderRadius: 15,
                        borderWidth: 1,
                        borderColor: "grey"
                    }}
                >
                    <View style={{ flex: 1, alignSelf: "stretch" }}>
                        <View style={NotificationStyle.baseContainer}>
                            <Text
                                style={{
                                    fontWeight: "bold",
                                    fontSize: 20,
                                    flex: 1
                                }}
                            >
                                {modalTitle}
                            </Text>
                            <Text
                                style={{
                                    fontWeight: "bold",
                                    fontSize: 20,
                                    color: "cadetblue"
                                }}
                            >
                                Snooze
                            </Text>
                        </View>
                        <View style={NotificationStyle.baseContainer}>
                            <AvatarComponent
                                userId={props.item.userId}
                                userName={props.item.userName}
                                userColor={props.item.userColor}
                            />
                            <View>
                                <View
                                    style={{
                                        flexDirection: "row",
                                        alignItems: "center",
                                        alignSelf: "stretch"
                                    }}
                                >
                                    <Text
                                        style={{
                                            fontWeight: "bold",
                                            fontSize: 20,
                                            color: "cadetblue",
                                            paddingLeft: 10
                                        }}
                                    >
                                        {props.item.userName}{" "}
                                    </Text>
                                    <TouchableOpacity>
                                        <Ionicons
                                            name={"ellipsis-horizontal"}
                                            size={30}
                                            style={{ marginLeft: 80 }}
                                        />
                                    </TouchableOpacity>
                                </View>
                                <Text
                                    style={{
                                        fontSize: 14,
                                        color: "grey",
                                        paddingLeft: 10
                                    }}
                                >
                                    {props.item.position}{" "}
                                </Text>
                                <Text
                                    style={{
                                        fontSize: 14,
                                        color: "grey",
                                        paddingLeft: 10
                                    }}
                                >
                                    7 rides 1 badge
                                </Text>
                            </View>
                        </View>
                        <View
                            style={{
                                margin: 30,
                                padding: 20,
                                borderColor: "grey",
                                borderWidth: 1,
                                height: 80,
                                width: 300,
                                alignSelf: "center"
                            }}
                        >
                            <Text style={{ fontSize: 16, color: "black" }}>
                                {props.item.description}
                            </Text>
                        </View>
                        <View style={{ padding: 50 }}>
                            <Button
                                color="black"
                                title="Accept"
                                onPress={toggleModal}
                            />
                        </View>
                        <View>
                            <Text
                                style={{
                                    textAlign: "center",
                                    fontSize: 16,
                                    color: "#EC6400",
                                    fontWeight: "bold"
                                }}
                                onPress={toggleModal}
                            >
                                Decline
                            </Text>
                        </View>
                    </View>
                </Modal>
            </View>
        </View>
    );
};

export default NotificationComponent;
