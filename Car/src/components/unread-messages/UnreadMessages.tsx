import React from "react";
import { Text, View } from "react-native";
import Style from "./UnreadMessagesStyle";
import Props from "./UnreadMessagesProps";
import { useTheme } from "../theme/ThemeProvider";
const UnreadMessages = (props: Props) => {
    const { colors } = useTheme();
    return (
        <View style={[Style.container, {backgroundColor: colors.accentOrange}]}>
            <Text style={[Style.text, {color: colors.white}]}>
                {props.value ?? ""}
            </Text>
        </View>
    );
};
export default UnreadMessages;