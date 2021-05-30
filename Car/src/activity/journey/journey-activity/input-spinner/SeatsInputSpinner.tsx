import React from "react";
import { Text, View } from "react-native";
import InputSpinner from "react-native-input-spinner";
import Entypo from "react-native-vector-icons/Entypo";
import { SeatsInputSpinnerStyle } from "./SeatsInputSpinnerStyle";
import { MIN_AVAILABLE_SEATS_COUNT } from "../../../../constants/JourneyConstants";

interface SeatsInputSpinnerProps {
    value: number,
    title: string,
    minValue?: number,
    // eslint-disable-next-line unused-imports/no-unused-vars
    onChange: (value: number) => void
}

const SeatsInputSpinner = (props: SeatsInputSpinnerProps) => {
    return (
        <View style={SeatsInputSpinnerStyle.container}>
            <Text style={SeatsInputSpinnerStyle.descriptionText}>
                {props.title}
            </Text>
            <View>
                <InputSpinner
                    max={4}
                    min={Math.max(Number(props.minValue), MIN_AVAILABLE_SEATS_COUNT)}
                    step={1}
                    style={SeatsInputSpinnerStyle.spinnerContainer}
                    inputStyle={SeatsInputSpinnerStyle.input}
                    colorPress={"#65656A"}
                    colorLeft={"white"}
                    colorRight={"black"}
                    background={"white"}
                    textColor={"black"}
                    height={44}
                    buttonLeftImage={<Entypo name="minus" size={20} color={"black"} />}
                    buttonRightImage={<Entypo name="plus" size={20} color={"white"} />}
                    fontSize={16}
                    editable={false}
                    rounded={false}
                    showBorder={true}
                    value={props.value}
                    onChange={props.onChange}
                />
            </View>
        </View>
    );
};

export default SeatsInputSpinner;