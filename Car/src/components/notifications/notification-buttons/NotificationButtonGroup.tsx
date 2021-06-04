import React, { ReactNode } from "react";
import { View } from "react-native";

const NotificationButtonGroup = (props: {children?: ReactNode}) => {
    return (
        <View style={[{ flexDirection: "row-reverse", paddingTop: 20 }]}>
            {props.children}
        </View>
    );
};

export default NotificationButtonGroup;