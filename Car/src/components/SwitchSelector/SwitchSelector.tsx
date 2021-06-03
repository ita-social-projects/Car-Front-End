import { Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { CreateJourneyStyle } from "../../activity/journey/journey-activity/create-journey/CreateJourneyStyle";
import SwitchSelectorProps from "./SwitchSelectorProps";
import SwitchSelectorStyle from "./SwitchSelectorStyle";

const SwitchSelector = (props: SwitchSelectorProps) => {
    return (
        <View style={SwitchSelectorStyle.container}>
            <Text style={CreateJourneyStyle.text}>{props.title}</Text>
            <View style={{ flexDirection: "row" }}>

                <TouchableOpacity
                    style={[SwitchSelectorStyle.leftButton, props.disableLeftButton ?
                        { backgroundColor: "#afafaf" } : props.leftButtonStyle]}
                    onPress={props.onLeftButtonPress}
                    disabled={props.disableLeftButton}
                >
                    <Text style={[SwitchSelectorStyle.buttonText, props.disableLeftButton ?
                        { backgroundColor: "#afafaf", color: "white" } : props.leftButtonStyle]}>
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