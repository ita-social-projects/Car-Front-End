import React from "react";
import { Switch, Text, View } from "react-native";
import PreferencesStyle from "./PreferencesStyle";

const ChooseOptionComponent = (props: any) => {
    return (
        <View style={PreferencesStyle.detailsContainer}>
            <Text style={PreferencesStyle.captionView}>{props.text}</Text>
            <Switch
                style={PreferencesStyle.switchStyle}
                value={props.value}
                onValueChange={(value) => props.onValueChanged(value)}
            />
            <Text style={PreferencesStyle.valueView}>Yes</Text>
        </View>
    );
};

export default ChooseOptionComponent;
