import React, { useState } from "react";
import { Modal, Text, TouchableOpacity, View } from "react-native";
import LinearGradient from "react-native-linear-gradient";
import { LinearTextGradient } from "react-native-text-gradient";
import Font from "../../data/fonts/Font";
import JourneyNewApplicantStyle from "./JourneyNewApplicantStyle";
import NewNotification from "../new-notification/NewNotification";
import NotificationsService from "../../../api-service/notifications-service/NotificationsService";
import Circle from "../styles/Circle";
import AvatarLogo from "../avatar-logo/AvatarLogo";
import { GRADIENT_END, GRADIENT_START } from "../../constants/StylesConstants";
import DM from "../styles/DM";
import JourneyNewApplicantProps from "./JourneyNewApplicantProps";

const JourneyNewApplicant = (props: JourneyNewApplicantProps) => {
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
                <View style={[JourneyNewApplicantStyle.body, { backgroundColor: DM("rgba(0, 0, 0, 0.5)") }]}>
                    <View style={[JourneyNewApplicantStyle.container,
                        {
                            shadowColor: DM("#414045"),
                            backgroundColor: DM("#FFFFFF"),
                            borderColor: DM("rgba(151, 151, 151, 0.233556)"),
                        }]}>
                        <View style={JourneyNewApplicantStyle.row}>
                            <View style={JourneyNewApplicantStyle.headerContainer}>
                                <Text style={[JourneyNewApplicantStyle.header,
                                    { color: DM("#000000") }]}
                                >
                                    New Applicant
                                </Text>
                            </View>
                            <View style={JourneyNewApplicantStyle.headerContainer}>
                                <TouchableOpacity
                                    onPress={() => {
                                        setModalVisible(!modalVisible);
                                    }}
                                >
                                    <Text style={[JourneyNewApplicantStyle.snooze,
                                        { color: DM("#02A2CF") }]} >
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
                            <AvatarLogo
                                user={props.user}
                                size={49}
                            />
                            <View style={JourneyNewApplicantStyle.profileContainer}>
                                <View style={JourneyNewApplicantStyle.profile}>
                                    <Text style={[JourneyNewApplicantStyle.name, { color: DM("#000000") }]}>
                                        {props.user.name +
                                            " " +
                                            props.user.surname}
                                    </Text>
                                    <Text style={[JourneyNewApplicantStyle.bio, { color: DM("#000000") }]}>
                                        {props.user.position}
                                    </Text>
                                    <Text style={[JourneyNewApplicantStyle.achievements, { color: DM("#000000") }]} >
                                        123 rides, 2 badges
                                    </Text>
                                </View>
                            </View>
                        </View>
                        {JSON.parse(props.notificationData)?.comments != null ? (
                            <View
                                style={[
                                    JourneyNewApplicantStyle.row,
                                    JourneyNewApplicantStyle.commentsBox,
                                    {
                                        borderColor: DM("rgba(151, 151, 151, 0.3)"),
                                        backgroundColor: DM("#FFFFFF")
                                    }
                                ]}
                            >
                                <Text style={JourneyNewApplicantStyle.commentsText} >
                                    {JSON.parse(props.notificationData) ?.comments}
                                </Text>
                                <View style={[JourneyNewApplicantStyle.commentsBoxAfter,
                                    {
                                        borderTopColor: DM("rgba(0,0,0,0)"),
                                        borderLeftColor: DM("rgba(0,0,0,0)"),
                                        borderRightColor: DM("rgba(151, 151, 151, 0.3)"),
                                        borderBottomColor: DM("rgba(151, 151, 151, 0.3)"),
                                        backgroundColor: DM("#FFFFFF")
                                    }]} />
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
                                <Text style={JourneyNewApplicantStyle.optionsHeader} >
                                    I'm traveling with luggage.
                                </Text>
                            ) : (
                                <View />
                            )}
                            <View style={[JourneyNewApplicantStyle.optionsLine,
                                {
                                    borderTopColor: DM("rgba(0,0,0,0)"),
                                    borderLeftColor: DM("rgba(0,0,0,0)"),
                                    borderRightColor: DM("rgba(0,0,0,0)"),
                                    borderBottomColor: DM("#C1C1C5"),
                                    backgroundColor: DM("#FFFFFF")
                                }]} />
                        </View>
                        <View style={[JourneyNewApplicantStyle.stops]}>
                            <Text style={[JourneyNewApplicantStyle.optionsHeader, { color: DM("#000000") }]} >
                                {props.user.name}’s stop in your ride
                            </Text>
                            <View
                                style={[
                                    JourneyNewApplicantStyle.stop,
                                    JourneyNewApplicantStyle.row,
                                    JourneyNewApplicantStyle.stopsRows
                                ]}
                            >
                                <View style={JourneyNewApplicantStyle.tripColumn} >
                                    <Circle
                                        color={DM("#FFFFFF")}
                                        radius="1.3rem"
                                        base={true}
                                        marginTop={"0.3rem"}
                                    >
                                        <Circle color={DM("#C1C1C5")} radius="1rem" />
                                    </Circle>
                                    <View style={[JourneyNewApplicantStyle.stopLine, { borderColor: DM("#C1C1C5") }]} />
                                </View>
                                <View style={JourneyNewApplicantStyle.tripPoint} >
                                    <Text style={[JourneyNewApplicantStyle.stopName, { color: DM("#909095") }]} >
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
                                <View style={JourneyNewApplicantStyle.tripColumn} >
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
                                    <View style={[JourneyNewApplicantStyle.stopLine, { borderColor: DM("#C1C1C5") }]} />
                                </View>
                                <View style={JourneyNewApplicantStyle.tripPoint} >
                                    <Text style={[JourneyNewApplicantStyle.stopName, { color: DM("#909095") }]} >
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
                                <View style={JourneyNewApplicantStyle.tripColumn} >
                                    <Circle
                                        color="#FFFFFF"
                                        radius="1.1rem"
                                        base={true}
                                        marginTop={"0.3rem"}
                                    >
                                        <LinearGradient
                                            style={ [JourneyNewApplicantStyle.circleGrad,
                                                { backgroundColor: DM("#FFFFFF") }]
                                            }
                                            colors={["#00A3CF", "#5552A0"]}
                                            start={{ x: 0, y: 0 }}
                                            end={{ x: 1, y: 1 }}
                                        />
                                    </Circle>
                                    <View style={[JourneyNewApplicantStyle.stopLine, { borderColor: DM("#C1C1C5") }]} />
                                </View>
                                <View style={JourneyNewApplicantStyle.tripPoint} >
                                    <LinearTextGradient
                                        style={[JourneyNewApplicantStyle.stopName, { color: DM("#909095") }]}
                                        locations={[GRADIENT_START, GRADIENT_END]}
                                        colors={["#00A3CF", "#5552A0"]}
                                        start={{ x: 0, y: 0 }}
                                        end={{ x: 1, y: 0 }}
                                    >
                                        <Text style={[JourneyNewApplicantStyle.activeStopName,
                                            { color: DM("#909095") }]
                                        } >
                                            {props.user.name}'s stop A.2 ‏
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
                                <View style={JourneyNewApplicantStyle.tripColumn} >
                                    <Circle
                                        color="#FFFFFF"
                                        radius="1.3rem"
                                        base={true}
                                        marginTop={"0.3rem"}
                                    >
                                        <Circle color="#C1C1C5" radius="1rem" />
                                    </Circle>
                                </View>
                                <View style={JourneyNewApplicantStyle.tripPoint} >
                                    <Text style={[JourneyNewApplicantStyle.stopName, { color: DM("#909095") }]} >
                                        Location B (Your stop)
                                    </Text>
                                </View>
                            </View>
                        </View>
                        <View style={JourneyNewApplicantStyle.buttons}>
                            <TouchableOpacity
                                style={[
                                    JourneyNewApplicantStyle.button,
                                    JourneyNewApplicantStyle.acceptButton,
                                    { backgroundColor: DM("black") }
                                ]}
                                onPress={() => {
                                    setModalVisible(!modalVisible);
                                }}
                            >
                                <Text style={[JourneyNewApplicantStyle.acceptButtonText, { color: DM("white") }]} >
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
                                <Text style={[JourneyNewApplicantStyle.declineButtonText, { color: DM("#EC6400") }]} >
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
