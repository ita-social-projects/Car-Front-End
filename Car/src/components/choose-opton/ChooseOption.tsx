import React from "react";
import { Text, View } from "react-native";
import { Switch } from "react-native-gesture-handler";
import DM from "../styles/DM";
import ChooseOptionStyle from "./ChooseOptionStyle";

const ChooseOption = (props: any) => {
    return (
        <View style={ChooseOptionStyle.preferencesContainer}>
            <View style={ChooseOptionStyle.preferenceNameContainer}>
                <Text style={[ChooseOptionStyle.preferenceNameText, { color: DM("black") }]}>
                    {props.text}
                </Text>
            </View>
            <View style={ChooseOptionStyle.switchContainer}>
                <Switch
                    style={ChooseOptionStyle.switch}
                    value={props.value}
                    onValueChange={(value) => props.onValueChanged(value)}
                />
            </View>
            <View style={ChooseOptionStyle.preferenceValueContainer}>
                <Text style={[ChooseOptionStyle.preferenceValueText, { color: DM("black") }]}>
                    {props.value ? "Yes" : "No"}
                </Text>
            </View>
        </View>
    );
};

export default ChooseOption;
