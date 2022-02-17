import React from "react";
import { Image, TouchableOpacity, View } from "react-native";
import BadgeProps from "./BadgeProps";

const Badge = (props: BadgeProps) => {
    return (
        <View style = {[{ transform: [{ scale: props.scale }] }]}>
            <TouchableOpacity>
                <Image
                    source = {props.isReached ? props.pathUnlocked : props.pathLocked}
                />
            </TouchableOpacity>
        </View>
    );
};

export default Badge;