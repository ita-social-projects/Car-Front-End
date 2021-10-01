import React from "react";
import { Text, View } from "react-native";
import BadgeStyle from "./BadgeStyle";
import BadgeProps from "./BadgeProps";
import { EMPTY_COLLECTION_LENGTH } from "../../constants/GeneralConstants";

const Badge = (props: BadgeProps) => {
    return (props.value !== EMPTY_COLLECTION_LENGTH ?
        <View style={BadgeStyle.container}>
            <Text style={BadgeStyle.text}>{props.value ?? ""}</Text>
        </View>
        :
        <View></View>
    );
};

export default Badge;