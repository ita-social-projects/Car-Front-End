import React, { Component, useContext } from "react";
import { Text, View } from "react-native";
import AvatarLogo from "../../../../components/avatar-logo/AvatarLogo";
import { AuthContext } from "../../../auth/AuthProvider";
import SettingsStyle from "./SettingsStyle";

const Settings = () => {
    const { user } = useContext(AuthContext);

    return (
        <View style={SettingsStyle.container}>
            <Text>Settigns</Text>
        </View>
    );
};

export default Settings;
