import React from "react";
import { Text, TouchableOpacity } from "react-native";
import ShadowedBottomPopup from "../shadowed-bottom-popup/ShadowedBottomPopup";
import { useTheme } from "../theme/ThemeProvider";
import HeaderRequestButtonStyle from "./HeaderRequestButtonStyle";

const HeaderRequestButton = () => {
    const { colors } = useTheme();

    return(
        <TouchableOpacity
            style={HeaderRequestButtonStyle.requestButton}
            onPress={() => {
                if(ShadowedBottomPopup)
                    ShadowedBottomPopup.pressHandle();
            }}
        >
            <Text style={[HeaderRequestButtonStyle.buttonText, { color: colors.accentBlue }]}>
            Request
            </Text>
        </TouchableOpacity>
    );
};

export default HeaderRequestButton;