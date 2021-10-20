import JourneyPageStyle from "../../JourneyPageStyle";
import { useTheme } from "../../../../../../components/theme/ThemeProvider";
import { Divider } from "react-native-elements";
import { Pressable, Text, View } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import * as navigation from "../../../../../../components/navigation/Navigation";
import React, { useState } from "react";
import ButtonBlockProps from "./ButtonBlockProps";
import CreateChat from "../../../../../../../models/Chat/CreateChat";

const ButtonBlock = (props: ButtonBlockProps) => {
    const { colors } = useTheme();

    const black = colors.primary;
    const disabledColor = colors.secondaryLight;

    const [colorText, setColorText] = useState(black);
    const [colorBorder, setColorBorder] = useState(black);

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

    const changeColorToDisable = () => {
        setColorText(disabledColor);
        setColorBorder(disabledColor);
    };

    const changeColorToBlack = () => {
        setColorText(black);
        setColorBorder(black);
    };

    return (
        <View style={[
            JourneyPageStyle.buttons,
            { backgroundColor: colors.white }
        ]}>
            <Divider style={[JourneyPageStyle.separator, { backgroundColor: colors.secondaryLight }]} />
            <View style={JourneyPageStyle.buttonsBlock}>
                {(props.isDriver || props.isPassenger) && (
                    <Pressable
                        style={[JourneyPageStyle.messageAllButton, {
                            backgroundColor: colors.white,
                            borderColor: colorBorder }]}
                        onPressIn={changeColorToDisable.bind(this)}
                        onPressOut={changeColorToBlack.bind(this)}
                        onPress={onMessageToAllPress}
                    >
                        <Text style={[JourneyPageStyle.messageAllButtonText, { color: colorText }]}>
                            Message to all
                        </Text>
                    </Pressable>
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