import JourneyPageStyle from "../JourneyPageStyle";
import DM from "../../../../../components/styles/DM";
import { Divider } from "react-native-elements";
import { Text, View } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import * as navigation from "../../../../../components/navigation/Navigation";
import React, { useContext } from "react";
import ButtonBlockProps from "./ButtonBlockProps";
import ChatService from "../../../../../../api-service/chat-service/ChatService";
import CreateChat from "../../../../../../models/Chat/CreateChat";
import { StatusCodes } from "../../../../../constants/Constants";
import NotificationsService from "../../../../../../api-service/notifications-service/NotificationsService";
import AuthContext from "../../../../../components/auth/AuthContext";
import NotificationType from "../../../../../../models/notification/NotificationType";
import AsyncStorage from "@react-native-community/async-storage";

const ButtonBlock = (props: ButtonBlockProps) => {

    const { user } = useContext(AuthContext);

    /* eslint-disable unused-imports/no-unused-vars */
    const OnRequestHandler = () => {
        NotificationsService.addNotification({
            senderId: user?.id!,
            recieverId: props.journey?.organizer?.id!,
            type: NotificationType.PassengerApply,
            jsonData: JSON.stringify({ applicantStops: props.applicantStops })
        });

        AsyncStorage.setItem("journeyId" + props.journey?.id!, "1");
    };

    return (
        <View style={[
            JourneyPageStyle.buttons,
            { backgroundColor: DM("#FFFFFF") }
        ]}>
            <Divider style={[JourneyPageStyle.separator, { backgroundColor: DM("#C1C1C5") }]} />
            <View style={JourneyPageStyle.buttonsBlock}>
                {(props.isDriver || props.isPassenger) && (
                    <TouchableOpacity
                        style={[JourneyPageStyle.messageAllButton, {
                            backgroundColor: DM("white"),
                            borderColor: DM("black") }
                        ]}
                        onPress={() => {
                            var chat: CreateChat = {
                                id: props.journey?.id!,
                                name:
                                    props.journey?.organizer?.name + " " +
                                    props.journey?.organizer?.surname + "'s ride"
                            };

                            ChatService.addChat(chat).then((res) => {
                                if (res.status === StatusCodes.OK) {
                                    navigation.navigate("MessagesTabs", {
                                        screen: "Chat",
                                        params: {
                                            chatId: props.journey?.id,
                                            header: res.data.name
                                        }
                                    });
                                }
                            });
                        }}
                    >
                        <Text style={[JourneyPageStyle.messageAllButtonText, { color: DM("black") }]}>
                            Message to all
                        </Text>
                    </TouchableOpacity>
                )}
                {!props.isDriver && !props.isPassenger && (
                    <TouchableOpacity
                        style={[
                            JourneyPageStyle.requestButton,
                            { backgroundColor: DM("black") },
                            props.isRequested && { backgroundColor: DM("#00000033") }]}
                        onPress={() => navigation.navigate("Journey Request Page", {
                            journeyId: props.journey?.id
                        })}
                        disabled={props.isRequested}
                    >
                        <Text style={[JourneyPageStyle.requestButtonText, { color: DM("white") }]}>
                            {props.isRequested ? "Requested" : "Send request"}
                        </Text>
                    </TouchableOpacity>
                )}
            </View>
        </View>
    );
};

export default ButtonBlock;