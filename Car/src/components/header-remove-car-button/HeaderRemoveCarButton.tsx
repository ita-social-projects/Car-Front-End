import React from "react";
import { Text, TouchableOpacity } from "react-native";
import HeaderRemoveCarButtonStyle from "./HeaderRemoveCarButtonStyle";
import { useTheme } from "../theme/ThemeProvider";

const HeaderRemoveCarButton = (props: any) => {
    const { colors } = useTheme();

    return(
        <TouchableOpacity
            style={HeaderRemoveCarButtonStyle.requestButton}
            onPress={props.onPress}
        >
            <Text style={[HeaderRemoveCarButtonStyle.buttonText, { color: colors.accentOrange }]}>
            Remove
            </Text>
        </TouchableOpacity>
    );
};

export default HeaderRemoveCarButton;