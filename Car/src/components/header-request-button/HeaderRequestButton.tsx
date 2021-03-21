import React from "react";
import { Text, TouchableOpacity } from "react-native";
import * as navigation from "../navigation/Navigation";
import DM from "../styles/DM";
import HeaderRequestButtonStyle from "./HeaderRequestButtonStyle";

const HeaderRequestButton = () => (
    <TouchableOpacity
        style={HeaderRequestButtonStyle.requestButton}
        onPress={() => {
            navigation.navigate("Search Journey");
        }}
    >
        <Text style={[HeaderRequestButtonStyle.buttonText, { color: DM("#02A2CF") }]}>
            Request
        </Text>
    </TouchableOpacity>
);

export default HeaderRequestButton;