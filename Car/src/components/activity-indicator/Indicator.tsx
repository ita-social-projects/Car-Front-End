import React from "react";
import { View, Text, ActivityIndicator } from "react-native";
import IndicatorStyle from "./IndicatorStyle";

const Indicator = (props: any) => {
    return (
        <View style={IndicatorStyle.container}>
            <ActivityIndicator size={props.size} color={props.color} />
            <Text style={IndicatorStyle.text}>{props.text ?? ""}</Text>
        </View>
    );
};

export default Indicator;
