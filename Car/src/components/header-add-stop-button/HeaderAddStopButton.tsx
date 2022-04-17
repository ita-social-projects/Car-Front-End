import React from "react";
import { Text, TouchableOpacity } from "react-native";
import { useTheme } from "../theme/ThemeProvider";
import HeaderAddStopButtonStyle from "./HeaderAddStopButtonStyle";

const HeaderAddStopButton = (props: any) => {
    const { colors } = useTheme();

    return(
        <TouchableOpacity
            style={HeaderAddStopButtonStyle.addButton}
            onPress={props.onPress}
        >
            <Text style={[HeaderAddStopButtonStyle.buttonText, { color: colors.accentBlue }]}>
                Add a stop
            </Text>
        </TouchableOpacity>
    );
};

export default HeaderAddStopButton;