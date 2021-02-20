import React from "react";
import EStyleSheet from "react-native-extended-stylesheet";
import { View } from "react-native";

export const UserAvatarStyle = (backgroundColor: string) =>
    EStyleSheet.create({
        circle: {
            backgroundColor: backgroundColor,
            borderRadius: 90,
            height: 57,
            width: 57,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            marginTop: 5
        }
    });
