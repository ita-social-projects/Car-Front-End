import React, { useEffect, useState } from "react";
import { Modal, Text, TouchableOpacity, View } from "react-native";
import LinearGradient from "react-native-linear-gradient";
import { LinearTextGradient } from "react-native-text-gradient";
import Font from "../../data/fonts/Font";
import JourneyNewApplicantStyle, {
    Circle,
    item
} from "./JourneyNewApplicantStyle";
import { container } from "tsyringe";
import UserService from "../../../api-service/user-service/UserService";
import JourneyService from "../../../api-service/journey-service/JourneyService";
import { NotificationProps } from "../../common/interfaces/NotificationProps";
import { NewNotification } from "../new-notification/NewNotification";
import NotificationsService from "../../../api-service/notifications-service/NotificationsService";
import AvatarLogo from "../avatar-logo/AvatarLogo";
import { User } from "../../../models/User";

export const JourneyNewApplicant: React.FC<NotificationProps> = (
    props: NotificationProps
) => {
    const [modalVisible, setModalVisible] = useState(props.visible);
    const [user, setUser] = useState(null as User);

    const message = props.participant?.message ?? "";
    const userService = container.resolve(UserService);
    const journeyService = container.resolve(JourneyService);
    const notificationService = container.resolve(NotificationsService);

    useEffect(() => {
        userService.getUser(props.participant!.userId).then((res) => {
            setUser(res.data);
        }).catch((e) => console.log(e));
    });
    return (
        <View>
            <TouchableOpacity
                onPress={() => {
                    setModalVisible(!modalVisible);
                    notificationService.markAsRead(props.notificationId);
                }}
            >
                <NewNotification
                    userId={props.participant!.userId}
                    fullName={`${user?.name} ${user?.surname}`}
                    notificationTitle={"asked to join to your journey"}
                    read={props.read}
                    date={new Date(props.date)}
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
                            <View style={item(50)}>
                                <Text style={JourneyNewApplicantStyle.header}>
                                    New Applicant
                                </Text>
                            </View>
                            <View style={item(50)}>
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
                            <AvatarLogo user={user} size={49} />
                            <View style={item(80)}>
                                <View style={JourneyNewApplicantStyle.profile}>
                                    <Text style={JourneyNewApplicantStyle.name}>
                                        {user?.name + " " + user?.surname}
                                    </Text>
                                    <Text style={JourneyNewApplicantStyle.bio}>
                                        {user?.position}
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
                        {message != null ? (
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
                                    {message}
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
                            {props.participant!.hasLuggage ? (
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
                                Jaylon’s stop in your Journey
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
                                        item(5),
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
                                        item(95),
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
                                        item(5),
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
                                        item(95),
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
                                        item(5),
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
                                        item(95),
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
                                            Jaylon's stop A.2 ‏
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
                                        item(5),
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
                                        item(95),
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
                                    journeyService.addParticipant(({
                                        journeyId: props.participant!.journeyId,
                                        userId: props.participant!.userId,
                                        hasLuggage: props.participant!
                                            .hasLuggage
                                    } as unknown) as FormData);
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
