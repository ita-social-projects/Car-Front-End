import React from "react";
import { Text, TouchableOpacity } from "react-native";
import HeaderRemoveCarButtonStyle from "./HeaderRemoveCarButtonStyle";
import DM from "../styles/DM";

const HeaderRemoveCarButton = (props: any) => (
    <TouchableOpacity
        style={HeaderRemoveCarButtonStyle.requestButton}
        onPress={props.onPress}
    >
        <Text style={[HeaderRemoveCarButtonStyle.buttonText, { color: DM("#EC6400") }]}>
            Remove
        </Text>
    </TouchableOpacity>
);

export default HeaderRemoveCarButton;