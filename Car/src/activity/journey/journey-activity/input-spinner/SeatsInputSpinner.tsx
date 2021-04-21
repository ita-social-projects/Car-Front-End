import React from "react";
import { Text, View } from "react-native";
import InputSpinner from "react-native-input-spinner";
import Entypo from "react-native-vector-icons/Entypo";
import { SeatsInputSpinnerStyle } from "./SeatsInputSpinnerStyle";

function SeatsInputSpinner (){
    return (
        <View style={SeatsInputSpinnerStyle.container}>
            <Text style={SeatsInputSpinnerStyle.descriptionText}>
                Available seats:
            </Text>
            <View>
                <InputSpinner
                    max={8}
                    min={1}
                    step={1}
                    style={SeatsInputSpinnerStyle.spinnerContainer}
                    inputStyle={SeatsInputSpinnerStyle.input}
                    colorPress={"#65656A"}
                    colorLeft={"white"}
                    colorRight={"black"}
                    background={"white"}
                    textColor={"black"}
                    height={44}
                    buttonLeftImage={<Entypo name="minus" size={24} color={"black"} />}
                    buttonRightImage={<Entypo name="plus" size={24} color={"white"} />}
                    fontSize={16}
                    editable={false}
                    rounded={false}
                    showBorder={true}
                    value={3}
                />
            </View>
        </View>
    );
}

export default SeatsInputSpinner;