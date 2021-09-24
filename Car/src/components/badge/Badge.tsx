import React from "react";
import { Text, View } from "react-native";
import BadgeStyle from "./BadgeStyle";
import BadgeProps from "./BadgeProps";

const Badge = (props: BadgeProps) => {
    return (
        <View style={BadgeStyle.container}>
            <Text style={BadgeStyle.text}>{props.value ?? ""}</Text>
        </View>
    );
};

export default Badge;