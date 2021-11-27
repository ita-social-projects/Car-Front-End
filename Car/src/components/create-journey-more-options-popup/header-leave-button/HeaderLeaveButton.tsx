import React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { useTheme } from "../../theme/ThemeProvider";
import HeaderLeaveButtonStyle from "./HeaderLeaveButtonStyle";

interface HeaderLeaveButtonProps {
    onPress?: () => void,
    text?: string
}

const HeaderLeaveButton = (props: HeaderLeaveButtonProps) => {
    const { colors } = useTheme();

    return(
        <TouchableOpacity
            style={HeaderLeaveButtonStyle.leaveButton}
            onPress={()=>{props.onPress;}}
        >
            <View style={HeaderLeaveButtonStyle.leaveButtonTextContainer}>
                <Text style={[HeaderLeaveButtonStyle.leaveButtonText, { color: colors.greenGradientTo }]}>
                Leave
                </Text>
            </View>
        </TouchableOpacity>
    );
};

export default HeaderLeaveButton;