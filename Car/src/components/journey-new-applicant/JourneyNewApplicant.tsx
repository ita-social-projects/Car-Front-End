import React, { useState } from "react";
import { Modal, Text, TouchableOpacity, View } from "react-native";
import LinearGradient from "react-native-linear-gradient";
import { LinearTextGradient } from "react-native-text-gradient";
import Font from "../../data/fonts/Font";
import JourneyNewApplicantStyle from "./JourneyNewApplicantStyle";
import NotificationProps from "../../common/interfaces/NotificationProps";
import NewNotification from "../new-notification/NewNotification";
import NotificationsService from "../../../api-service/notifications-service/NotificationsService";
import Item from "../styles/flex/Item";
import Circle from "../styles/Circle";
import UserAvatar from "../user-avatar/UserAvatar";

const JourneyNewApplicant: React.FC<NotificationProps> = (
    props: NotificationProps
) => {
    const [modalVisible, setModalVisible] = useState(props.visible);

    return (
        <View>
            <TouchableOpacity
                onPress={() => {
                    setModalVisible(!modalVisible);
                    NotificationsService.markAsRead(props.notificationId);
                }}
            >
                <NewNotification
                    user={props.user}
                    notificationTitle={JSON.parse(props.notificationData).title}
                    read={props.read}
                    date={props.date}
                />
            </TouchableOpacity>
            <Modal
                visible={modalVisible}
                animationType="fade"
                transparent={true}
            >
                <View style={JourneyNewApplicantStyle.body}>
                    <View style={JourneyNewApplicantStyle.container}>
                        <View style={JourneyNewApplicantStyle.row}>
                            <View style={Item(50)}>
                                <Text style={JourneyNewApplicantStyle.header}>
                                    New Applicant
                                </Text>
                            </View>
                            <View style={Item(50)}>
                                <TouchableOpacity
                                    onPress={() => {
                                        setModalVisible(!modalVisible);
                                    }}
                                >
                                    <Text
                                        style={JourneyNewApplicantStyle.snooze}
                                    >
                                        Snooze
                                    </Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                        <View
                            style={[
                                JourneyNewApplicantStyle.row,
                                JourneyNewApplicantStyle.title
                            ]}
                        >
                            <UserAvatar
                                user={props.user}
                                flexBox={{ width: 20 }}
                            />
                            <View style={Item(80)}>
                                <View style={JourneyNewApplicantStyle.profile}>
                                    <Text style={JourneyNewApplicantStyle.name}>
                                        {props.user!.name +
                                            " " +
                                            props.user!.surname}
                                    </Text>
                                    <Text style={JourneyNewApplicantStyle.bio}>
                                        {props.user!.position}
                                    </Text>
                                    <Text
                                        style={
                                            JourneyNewApplicantStyle.achievements
                                        }
                                    >
                                        123 rides, 2 badges
                                    </Text>
                                </View>
                            </View>
                        </View>
                        {JSON.parse(props.notificationData)?.comments !=
                        null ? (
                                <View
                                    style={[
                                        JourneyNewApplicantStyle.row,
                                        JourneyNewApplicantStyle.commentsBox
                                    ]}
                                >
                                    <Text
                                        style={
                                            JourneyNewApplicantStyle.commentsText
                                        }
                                    >
                                        {
                                        JSON.parse(props.notificationData)
                                            ?.comments
                                        }
                                    </Text>
                                    <View
                                        style={
                                            JourneyNewApplicantStyle.commentsBoxAfter
                                        }
                                    />
                                </View>
                            ) : (
                                <View />
                            )}

                        <View
                            style={[
                                JourneyNewApplicantStyle.row,
                                JourneyNewApplicantStyle.options
                            ]}
                        >
                            {JSON.parse(props.notificationData)?.hasLuggage ? (
                                <Text
                                    style={
                                        JourneyNewApplicantStyle.optionsHeader
                                    }
                                >
                                    I’m Traveling with a baggage.
                                </Text>
                            ) : (
                                <View />
                            )}
                            <View
                                style={JourneyNewApplicantStyle.optionsLine}
                            />
                        </View>
                        <View style={[JourneyNewApplicantStyle.stops]}>
                            <Text
                                style={JourneyNewApplicantStyle.optionsHeader}
                            >
                                {props.user!.name}’s stop in your Journey
                            </Text>
                            <View
                                style={[
                                    JourneyNewApplicantStyle.stop,
                                    JourneyNewApplicantStyle.row,
                                    JourneyNewApplicantStyle.stopsRows
                                ]}
                            >
                                <View
                                    style={[
                                        Item(5),
                                        JourneyNewApplicantStyle.tripColumn
                                    ]}
                                >
                                    <Circle
                                        color="#FFFFFF"
                                        radius="1.3rem"
                                        base={true}
                                        marginTop={"0.3rem"}
                                    >
                                        <Circle color="#C1C1C5" radius="1rem" />
                                    </Circle>
                                    <View
                                        style={[
                                            JourneyNewApplicantStyle.stopLine
                                        ]}
                                    />
                                </View>
                                <View
                                    style={[
                                        Item(95),
                                        JourneyNewApplicantStyle.tripPoint
                                    ]}
                                >
                                    <Text
                                        style={
                                            JourneyNewApplicantStyle.stopName
                                        }
                                    >
                                        Location A
                                    </Text>
                                </View>
                            </View>

                            <View
                                style={[
                                    JourneyNewApplicantStyle.stop,
                                    JourneyNewApplicantStyle.row
                                ]}
                            >
                                <View
                                    style={[
                                        Item(5),
                                        JourneyNewApplicantStyle.tripColumn
                                    ]}
                                >
                                    <Circle
                                        color="#FFFFFF"
                                        radius="0.75rem"
                                        base={true}
                                        marginTop={"0.5rem"}
                                    >
                                        <Circle
                                            color="#C1C1C5"
                                            radius="0.35rem"
                                        />
                                    </Circle>
                                    <View
                                        style={
                                            JourneyNewApplicantStyle.stopLine
                                        }
                                    />
                                </View>
                                <View
                                    style={[
                                        Item(95),
                                        JourneyNewApplicantStyle.tripPoint
                                    ]}
                                >
                                    <Text
                                        style={
                                            JourneyNewApplicantStyle.stopName
                                        }
                                    >
                                        Stop A.1
                                    </Text>
                                </View>
                            </View>
                            <View
                                style={[
                                    JourneyNewApplicantStyle.stop,
                                    JourneyNewApplicantStyle.row
                                ]}
                            >
                                <View
                                    style={[
                                        Item(5),
                                        JourneyNewApplicantStyle.tripColumn
                                    ]}
                                >
                                    <Circle
                                        color="#FFFFFF"
                                        radius="1.1rem"
                                        base={true}
                                        marginTop={"0.3rem"}
                                    >
                                        <LinearGradient
                                            style={
                                                JourneyNewApplicantStyle.circleGrad
                                            }
                                            colors={["#00A3CF", "#5552A0"]}
                                            start={{ x: 0, y: 0 }}
                                            end={{ x: 1, y: 1 }}
                                        />
                                    </Circle>
                                    <View
                                        style={
                                            JourneyNewApplicantStyle.stopLine
                                        }
                                    />
                                </View>
                                <View
                                    style={[
                                        Item(95),
                                        JourneyNewApplicantStyle.tripPoint
                                    ]}
                                >
                                    <LinearTextGradient
                                        style={[
                                            JourneyNewApplicantStyle.stopName
                                        ]}
                                        locations={[0, 1]}
                                        colors={["#00A3CF", "#5552A0"]}
                                        start={{ x: 0, y: 0 }}
                                        end={{ x: 1, y: 0 }}
                                    >
                                        <Text
                                            style={[
                                                JourneyNewApplicantStyle.activeStopName
                                            ]}
                                        >
                                            {props.user!.name}'s stop A.2 ‏
                                        </Text>
                                        <Text
                                            style={{
                                                fontFamily:
                                                    Font.OpenSans.Regular
                                            }}
                                        >
                                            (view on the map)
                                        </Text>
                                    </LinearTextGradient>
                                </View>
                            </View>
                            <View
                                style={[
                                    JourneyNewApplicantStyle.stop,
                                    JourneyNewApplicantStyle.row
                                ]}
                            >
                                <View
                                    style={[
                                        Item(5),
                                        JourneyNewApplicantStyle.tripColumn
                                    ]}
                                >
                                    <Circle
                                        color="#FFFFFF"
                                        radius="1.3rem"
                                        base={true}
                                        marginTop={"0.3rem"}
                                    >
                                        <Circle color="#C1C1C5" radius="1rem" />
                                    </Circle>
                                </View>
                                <View
                                    style={[
                                        Item(95),
                                        JourneyNewApplicantStyle.tripPoint
                                    ]}
                                >
                                    <Text
                                        style={
                                            JourneyNewApplicantStyle.stopName
                                        }
                                    >
                                        Location B (Your stop)
                                    </Text>
                                </View>
                            </View>
                        </View>
                        <View style={JourneyNewApplicantStyle.buttons}>
                            <TouchableOpacity
                                style={[
                                    JourneyNewApplicantStyle.button,
                                    JourneyNewApplicantStyle.acceptButton
                                ]}
                                onPress={() => {
                                    setModalVisible(!modalVisible);
                                }}
                            >
                                <Text
                                    style={
                                        JourneyNewApplicantStyle.acceptButtonText
                                    }
                                >
                                    Accept
                                </Text>
                            </TouchableOpacity>

                            <TouchableOpacity
                                style={[
                                    JourneyNewApplicantStyle.button,
                                    JourneyNewApplicantStyle.declineButton
                                ]}
                                onPress={() => {
                                    setModalVisible(!modalVisible);
                                }}
                            >
                                <Text
                                    style={
                                        JourneyNewApplicantStyle.declineButtonText
                                    }
                                >
                                    Decline
                                </Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </Modal>
        </View>
    );
};

export default JourneyNewApplicant;
