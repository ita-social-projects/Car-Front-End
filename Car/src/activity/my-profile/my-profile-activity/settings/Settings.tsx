import React, { Component } from "react";
import { Text, View } from "react-native";
import SettingsStyle from "./SettingsStyle";

export default class Settings extends Component {
    render() {
        return (
            <View style={SettingsStyle.container}>
                <Text>Settigns</Text>
            </View>
        );
    }
}
