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
            <View>
                <Switch
                    style={ChooseOptionStyle.switch}
                    value={props.value}
                    onValueChange={(value) => props.onValueChanged(value)}
                />
            </View>
        </View>
    );
};

export default ChooseOption;
