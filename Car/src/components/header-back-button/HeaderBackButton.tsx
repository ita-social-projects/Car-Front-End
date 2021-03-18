import React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import * as navigation from "../navigation/Navigation";
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
            color={"#02A2CF"}
        />
        <View style={HeaderBackButtonStyle.backButtonTextContainer}>
            <Text style={HeaderBackButtonStyle.backButtonText}>
                Back
            </Text>
        </View>
    </TouchableOpacity>
);

export default HeaderBackButton;