import React, { ReactNode } from "react";
import { View } from "react-native";
import NotificationButtonGroupStyle from "./NotificationButtonGroupStyle";

const NotificationButtonGroup = (props: {children?: ReactNode}) => {
    return (
        <View style={[NotificationButtonGroupStyle.container]}>
            {props.children}
        </View>
    );
};

export default NotificationButtonGroup;