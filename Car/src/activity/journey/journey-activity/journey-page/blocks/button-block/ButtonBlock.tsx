import JourneyPageStyle from "../../JourneyPageStyle";
import { useTheme } from "../../../../../../components/theme/ThemeProvider";
import { Divider } from "react-native-elements";
import { Text, View } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import * as navigation from "../../../../../../components/navigation/Navigation";
import React from "react";
import ButtonBlockProps from "./ButtonBlockProps";
import CreateChat from "../../../../../../../models/Chat/CreateChat";

const ButtonBlock = (props: ButtonBlockProps) => {
    const { DM } = useTheme();
    const chat: CreateChat = {
        id: props.journey?.id!,
        name:
            props.journey?.organizer?.name + " " +
            props.journey?.organizer?.surname + "'s ride"
    };

    const onMessageToAllPress = () => {
        navigation.navigate("Chat", {
            chatId: chat.id,
            header: chat.name
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
                )}
            </View>
        </View>
    );
};

export default ButtonBlock;