import React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import * as navigation from "../navigation/Navigation";
import DM from "../styles/DM";
import HeaderBackButtonStyle from "./HeaderBackButtonStyle";

const HeaderBackButton = () => (
    <TouchableOpacity
        style={HeaderBackButtonStyle.backButton}
        onPress={() => {
            navigation.goBack();
        }}
    >
        <Ionicons
            name={"chevron-back-outline"}
            size={35}
            color={DM("#02A2CF")}
        />
        <View style={HeaderBackButtonStyle.backButtonTextContainer}>
            <Text style={[HeaderBackButtonStyle.backButtonText, { color: DM("#02A2CF") }]}>
                Back
            </Text>
        </View>
    </TouchableOpacity>
);

export default HeaderBackButton;