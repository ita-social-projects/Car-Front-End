import React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import * as navigation from "../navigation/Navigation";
import { useTheme } from "../theme/ThemeProvider";
import HeaderBackButtonStyle from "./HeaderBackButtonStyle";

const HeaderBackButton = (props) => {
    const { colors } = useTheme();

    return(
        <TouchableOpacity
            style={HeaderBackButtonStyle.backButton}
            onPress={props.onPress ?? (() => {
                navigation.goBack();
            })}
        >
            <Ionicons
                name={"chevron-back-outline"}
                size={35}
                color={colors.accentBlue}
            />
            <View style={HeaderBackButtonStyle.backButtonTextContainer}>
                <Text style={[HeaderBackButtonStyle.backButtonText, { color: colors.accentBlue }]}>
                Back
                </Text>
            </View>
        </TouchableOpacity>
    );
};

export default HeaderBackButton;