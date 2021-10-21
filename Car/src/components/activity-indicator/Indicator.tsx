import React from "react";
import { ActivityIndicator, Text, View } from "react-native";
import { useTheme } from "../theme/ThemeProvider";
import IndicatorStyle from "./IndicatorStyle";
import IndicatorProps from "./IndicatorProps";

const Indicator = (props: IndicatorProps) => {
    const { colors } = useTheme();

    return (
        <View style={[IndicatorStyle.container, {
            backgroundColor: colors.white }]}>
            <ActivityIndicator size={props.size} color={props.color} />
            <Text style={[IndicatorStyle.text, { color: colors.hover }]}>
                {props.text ?? ""}
            </Text>
        </View>
    );
};

export default Indicator;
