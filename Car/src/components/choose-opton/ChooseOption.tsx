import React from "react";
import { Text, View } from "react-native";
import { Switch } from "react-native-gesture-handler";
import DM from "../styles/DM";
import ChooseOptionStyle from "./ChooseOptionStyle";
import ChooseOptionProps from "./ChooseOptionProps";

const ChooseOption = (props: ChooseOptionProps) => {
    return (
        <View style={ChooseOptionStyle.preferencesContainer}>
            <View style={ChooseOptionStyle.preferenceNameContainer}>
                <Text style={[ChooseOptionStyle.preferenceNameText, { color: DM("black") }]}>
                    {props.text}
                </Text>
            </View>
            <View style={ChooseOptionStyle.switchContainer}>
                <Switch
                    trackColor={{ false: DM("gray"), true: DM("#414045") }}
                    thumbColor={DM("white")}
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
