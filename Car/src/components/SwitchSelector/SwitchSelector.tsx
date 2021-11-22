import { Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { CreateJourneyStyle } from "../../activity/journey/journey-activity/create-journey/CreateJourneyStyle";
import SwitchSelectorProps from "./SwitchSelectorProps";
import SwitchSelectorStyle from "./SwitchSelectorStyle";
import { useTheme } from "../theme/ThemeProvider";

const SwitchSelector = (props: SwitchSelectorProps) => {
    const { colors } = useTheme();

    return (
        <View style={SwitchSelectorStyle.container}>
            <Text style={[CreateJourneyStyle.text, { color: colors.primary }]}>{props.title}</Text>
            <View style={{ flexDirection: "row" }}>

                <TouchableOpacity
                    style={[SwitchSelectorStyle.leftButton, props.disableLeftButton ?
                        { backgroundColor: colors.disableBack, borderColor: colors.disableBack } :
                        props.leftButtonStyle]}
                    onPress={props.onLeftButtonPress}
                    disabled={props.disableLeftButton}
                >
                    <Text style={[SwitchSelectorStyle.buttonText, props.disableLeftButton ?
                        { color: colors.disableText } : props.leftButtonStyle]}>
                        {props.leftButtonText}
                    </Text>
                </TouchableOpacity>

                <TouchableOpacity
                    style={[SwitchSelectorStyle.rightButton, props.rightButtonStyle]}
                    onPress={props.onRightButtonPress}
                >
                    <Text style={[SwitchSelectorStyle.buttonText, props.rightButtonStyle]}>
                        {props.rightButtonText}
                    </Text>
                </TouchableOpacity>

            </View>
        </View>
    );
};

export default SwitchSelector;