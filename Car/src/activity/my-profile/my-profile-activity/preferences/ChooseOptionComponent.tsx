import React from "react";
import { Switch, Text, View } from "react-native";
import PreferencesStyle from "./PreferencesStyle";

const ChooseOptionComponent = (props: any) => {
    return (
        <View style={PreferencesStyle.preferencesContainer}>
            <View style={PreferencesStyle.preferenceNameContainer}>
                <Text style={PreferencesStyle.preferenceNameText}>
                    {props.text}
                </Text>
            </View>
            <View style={PreferencesStyle.switchContainer}>
                <Switch
                    style={PreferencesStyle.switch}
                    value={props.value}
                    onValueChange={(value) => props.onValueChanged(value)}
                />
            </View>
            <View style={PreferencesStyle.preferenceValueContainer}>
                <Text style={PreferencesStyle.preferenceValueText}>
                    {props.value ? "Yes" : "No"}
                </Text>
            </View>
        </View>
    );
};

export default ChooseOptionComponent;
