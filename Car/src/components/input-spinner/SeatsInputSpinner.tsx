import React from "react";
import { Text, View } from "react-native";
import InputSpinner from "react-native-input-spinner";
import Entypo from "react-native-vector-icons/Entypo";
import { MIN_AVAILABLE_SEATS_COUNT } from "../../constants/JourneyConstants";
import { useTheme } from "../theme/ThemeProvider";
import { SeatsInputSpinnerStyle } from "./SeatsInputSpinnerStyle";

interface SeatsInputSpinnerProps {
    value: number,
    title: string,
    minValue?: number,
    maxValue?: number,
    onChange: (value: number) => void
}

const SeatsInputSpinner = (props: SeatsInputSpinnerProps) => {
    const { colors } = useTheme();

    return (
        <View style={SeatsInputSpinnerStyle.container}>
            <Text style={[SeatsInputSpinnerStyle.descriptionText, { color: colors.primary }]}>
                {props.title}
            </Text>
            <View>
                <InputSpinner
                    max={props.maxValue}
                    min={Math.max(Number(props.minValue), MIN_AVAILABLE_SEATS_COUNT)}
                    step={1}
                    style={[SeatsInputSpinnerStyle.spinnerContainer, { borderColor: colors.primary }]}
                    inputStyle={[SeatsInputSpinnerStyle.input, { borderColor: colors.primary }]}
                    colorPress={colors.primary}
                    colorLeft={colors.white}
                    colorRight={colors.hover}
                    background={colors.white}
                    textColor={colors.primary}
                    height={44}
                    buttonLeftImage={<Entypo name="minus" size={20} color={colors.primary} />}
                    buttonRightImage={<Entypo name="plus" size={20} color={colors.white} />}
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