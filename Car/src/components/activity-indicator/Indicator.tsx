import React from "react";
import { ActivityIndicator, Text, View } from "react-native";
import { useTheme } from "../theme/ThemeProvider";
import IndicatorStyle from "./IndicatorStyle";
import IndicatorProps from "./IndicatorProps";

const Indicator = (props: IndicatorProps) => {
    const { DM } = useTheme();

    return (
        <View style={[IndicatorStyle.container, {
            backgroundColor: DM("white") }]}>
            <ActivityIndicator size={props.size} color={props.color} />
            <Text style={[IndicatorStyle.text, { color: DM("#414045") }]}>
                {props.text ?? ""}
            </Text>
        </View>
    );
};

export default Indicator;
