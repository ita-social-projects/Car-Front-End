import React from "react";
import { Text, TouchableOpacity } from "react-native";
import ShadowedBottomPopup from "../shadowed-bottom-popup/ShadowedBottomPopup";
import DM from "../styles/DM";
import HeaderRequestButtonStyle from "./HeaderRequestButtonStyle";

const HeaderRequestButton = () => (
    <TouchableOpacity
        style={HeaderRequestButtonStyle.requestButton}
        onPress={() => {
            if(ShadowedBottomPopup)
                ShadowedBottomPopup.pressHandle();
        }}
    >
        <Text style={[HeaderRequestButtonStyle.buttonText, { color: DM("#02A2CF") }]}>
            Request
        </Text>
    </TouchableOpacity>
);

export default HeaderRequestButton;