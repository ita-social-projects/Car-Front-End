import AsyncStorage from "@react-native-community/async-storage";
import React from "react";
import { Text, TouchableOpacity } from "react-native";
import HeaderLogoutButtonStyle from "./HeaderLogoutButtonStyle";
import RNRestart from "react-native-restart";

const HeaderLogoutButton = () => (
    <TouchableOpacity
        style={HeaderLogoutButtonStyle.requestButton}
        onPress={() => {
            (async () => { await AsyncStorage.removeItem("user"); })().then(() =>
                RNRestart.Restart());
        }}
    >
        <Text style={HeaderLogoutButtonStyle.buttonText}>
            Logout
        </Text>
    </TouchableOpacity>
);

export default HeaderLogoutButton;