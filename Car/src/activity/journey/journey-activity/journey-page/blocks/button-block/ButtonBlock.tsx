import JourneyPageStyle from "../../JourneyPageStyle";
import { useTheme } from "../../../../../../components/theme/ThemeProvider";
import { Divider } from "react-native-elements";
import { Text, View } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import * as navigation from "../../../../../../components/navigation/Navigation";
import React from "react";
import ButtonBlockProps from "./ButtonBlockProps";
import ChatService from "../../../../../../../api-service/chat-service/ChatService";
import CreateChat from "../../../../../../../models/Chat/CreateChat";
import { StatusCodes } from "../../../../../../constants/Constants";

const ButtonBlock = (props: ButtonBlockProps) => {
    const { colors } = useTheme();
    const onMessageToAllPress = () => {
        const chat: CreateChat = {
            id: props.journey?.id!,
            name:
                props.journey?.organizer?.name + " " +
                props.journey?.organizer?.surname + "'s ride"
        };

        ChatService.addChat(chat).then((res) => {
            if (res.status === StatusCodes.OK) {
                navigation.navigate("Chat", {
                    chatId: props.journey?.id,
                    header: res.data.name
                });
            }
        });
    };

    return (
        <View style={[
            JourneyPageStyle.buttons,
            { backgroundColor: colors.white }
        ]}>
            <Divider style={[JourneyPageStyle.separator, { backgroundColor: colors.secondaryLight }]} />
            <View style={JourneyPageStyle.buttonsBlock}>
                {(props.isDriver || props.isPassenger) && (
                    <TouchableOpacity
                        style={[JourneyPageStyle.messageAllButton, {
                            backgroundColor: colors.white,
                            borderColor: colors.primary }]}
                        onPress={onMessageToAllPress}
                    >
                        <Text style={[JourneyPageStyle.messageAllButtonText, { color: colors.primary }]}>
                            Message to all
                        </Text>
                    </TouchableOpacity>
                )}
                {!props.isDriver && !props.isPassenger && (
                    <TouchableOpacity
                        style={[
                            JourneyPageStyle.requestButton,
                            { backgroundColor: colors.primary },
                            props.isRequested && { backgroundColor: colors.secondaryLight }]}
                        onPress={props.onSendRequestPress}
                        disabled={props.isRequested}
                    >
                        <Text style={[JourneyPageStyle.requestButtonText, { color: colors.white }]}>
                            {props.isRequested ? "Requested" : "Send request"}
                        </Text>
                    </TouchableOpacity>
                )}
            </View>
        </View>
    );
};

export default ButtonBlock;