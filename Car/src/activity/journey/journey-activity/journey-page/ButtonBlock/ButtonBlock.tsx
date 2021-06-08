import JourneyPageStyle from "../JourneyPageStyle";
import DM from "../../../../../components/styles/DM";
import { Divider } from "react-native-elements";
import { Text, View } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import * as navigation from "../../../../../components/navigation/Navigation";
import React from "react";
import ButtonBlockProps from "./ButtonBlockProps";
import ChatService from "../../../../../../api-service/chat-service/ChatService";
import CreateChat from "../../../../../../models/Chat/CreateChat";
import { StatusCodes } from "../../../../../constants/Constants";
import JourneyRequestPageStyle from "../../journey-request-page/JourneyRequestPageStyle";

const ButtonBlock = (props: ButtonBlockProps) => {
    const onMessageToAllPress = () => {
        const chat: CreateChat = {
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
                            borderColor: DM("black") }]}
                        onPress={onMessageToAllPress}
                    >
                        <Text style={[JourneyPageStyle.messageAllButtonText, { color: DM("black") }]}>
                            Message to all
                        </Text>
                    </TouchableOpacity>
                )}
                {!props.isDriver && !props.isPassenger && (
                    props.requestMode ? (
                        <TouchableOpacity
                            style={[
                                JourneyRequestPageStyle.confirmButton,
                                {
                                    backgroundColor: DM("white"),
                                    borderColor: DM("black")
                                }]}
                            onPress={props.sendRequest}
                            disabled={props.isRequested}
                        >
                            <Text style={[JourneyRequestPageStyle.confirmButtonText, { color: DM("black") }]}>
                                Confirm
                            </Text>
                        </TouchableOpacity>
                    ) : (
                        <TouchableOpacity
                            style={[
                                JourneyPageStyle.requestButton,
                                { backgroundColor: DM("black") },
                                props.isRequested && { backgroundColor: DM("#00000033") }]}
                            onPress={props.onSendRequestPress}
                            disabled={props.isRequested}
                        >
                            <Text style={[JourneyPageStyle.requestButtonText, { color: DM("white") }]}>
                                {props.isRequested ? "Requested" : "Send request"}
                            </Text>
                        </TouchableOpacity>
                    )
                )}
            </View>
        </View>
    );
};

export default ButtonBlock;