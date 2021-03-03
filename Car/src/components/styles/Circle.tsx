import React from "react";
import { View } from "react-native";
import EStyleSheet from "react-native-extended-stylesheet";

function Circle (props: {
    color: string;
    radius: string;
    children?: React.ReactNode;
    base?: boolean;
    marginTop?: string;
}) {
    let innerStyle = EStyleSheet.create({
        circle: {
            backgroundColor: props.color,
            borderRadius: 90,
            height: props.radius,
            width: props.radius,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            zIndex: 5
        },

        circlePos: {
            marginTop: props.marginTop
        }
    });

    return (
        <View
            style={[innerStyle.circle, props.base ? innerStyle.circlePos : ""]}
        >
            {props.children}
        </View>
    );
}

export default Circle;
