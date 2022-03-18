import React, { ReactNode } from "react";
import { View } from "react-native";
import { useTheme } from "../../theme/ThemeProvider";
import NotificationButtonGroupStyle from "./NotificationButtonGroupStyle";

const NotificationButtonGroup = (props: {children?: ReactNode}) => {
    const { colors } = useTheme();

    return (
        <View style={[NotificationButtonGroupStyle.container, { borderTopColor: colors.disableBack }]}>
            {props.children}
        </View>
    );
};

export default NotificationButtonGroup;