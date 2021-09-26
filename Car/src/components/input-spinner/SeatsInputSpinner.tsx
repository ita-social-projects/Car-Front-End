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
    // eslint-disable-next-line unused-imports/no-unused-vars
    onChange: (value: number) => void
}

const SeatsInputSpinner = (props: SeatsInputSpinnerProps) => {
    const { DM } = useTheme();

    return (
        <View style={SeatsInputSpinnerStyle.container}>
            <Text style={[SeatsInputSpinnerStyle.descriptionText, { color: DM("black") }]}>
                {props.title}
            </Text>
            <View>
                <InputSpinner
                    max={4}
                    min={Math.max(Number(props.minValue), MIN_AVAILABLE_SEATS_COUNT)}
                    step={1}
                    style={[SeatsInputSpinnerStyle.spinnerContainer, { borderColor: DM("black") }]}
                    inputStyle={[SeatsInputSpinnerStyle.input, { borderColor: DM("black") }]}
                    colorPress={DM("#65656A")}
                    colorLeft={DM("white")}
                    colorRight={DM("black")}
                    background={DM("white")}
                    textColor={DM("black")}
                    height={44}
                    buttonLeftImage={<Entypo name="minus" size={20} color={DM("black")} />}
                    buttonRightImage={<Entypo name="plus" size={20} color={DM("white")} />}
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