import { StyleProp, Text, TouchableOpacity, View, ViewStyle } from "react-native";
import React from "react";
import { CreateJourneyStyle } from "../CreateJourneyStyle";

interface TwoChoiceProps {
    leftButtonStyle: StyleProp<ViewStyle>,
    rightButtonStyle: StyleProp<ViewStyle>,
    onLeftButtonPress: () => void,
    onRightButtonPress: () => void,
    title: string,
    leftButtonText: string,
    rightButtonText: string,
}

const TwoChoice = (props: TwoChoiceProps) => {
    return (
        <View style={CreateJourneyStyle.feeContainer}>
            <Text style={CreateJourneyStyle.text}>{props.title}</Text>
            <View style={{ flexDirection: "row" }}>

                <TouchableOpacity
                    style={[CreateJourneyStyle.feeButtonFree, props.leftButtonStyle]}
                    onPress={props.onLeftButtonPress}>
                    <Text style={[CreateJourneyStyle.feeButtonText, props.leftButtonStyle]}>
                        {props.leftButtonText}
                    </Text>
                </TouchableOpacity>

                <TouchableOpacity
                    style={[CreateJourneyStyle.feeButtonPaid, props.rightButtonStyle]}
                    onPress={props.onRightButtonPress}>
                    <Text style={[CreateJourneyStyle.feeButtonText, props.rightButtonStyle]}>
                        {props.rightButtonText}
                    </Text>
                </TouchableOpacity>

            </View>
        </View>
    );
};

export default TwoChoice;