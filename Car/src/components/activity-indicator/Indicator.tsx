import React from "react";
import { ActivityIndicator, Text, View } from "react-native";
import DM from "../styles/DM";
import IndicatorStyle from "./IndicatorStyle";
import IndicatorProps from "./IndicatorProps";

const Indicator = (props: IndicatorProps) => {
    return (
        <View style={IndicatorStyle.container}>
            <ActivityIndicator size={props.size} color={props.color} />
            <Text style={[IndicatorStyle.text, { color: DM("#414045") }]}>
                {props.text ?? ""}
            </Text>
        </View>
    );
};

export default Indicator;
