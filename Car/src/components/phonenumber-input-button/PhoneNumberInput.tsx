import React, { useEffect, useState } from "react";
import { Text, TextInput, View } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import Ionicons from "react-native-vector-icons/Ionicons";
import { MAX_PHONE_NUMBER_SIZE } from "../../constants/ProfileConstants";
import { useTheme } from "../theme/ThemeProvider";
import PhoneNumberInputButtonProps from "./PhoneNumberInputProps";
import PhoneNumberInputStyle from "./PhoneNumberInputStyle";

const PhoneNumberInput = (props: PhoneNumberInputButtonProps) => {
    const { colors } = useTheme();
    const [textColor, setTextColor] = useState(colors.neutralDark);
    const [canClear, setClear] = useState(false);
    const [isVisible, setVisibility] = useState(props.isVisible);
    const [numberValid, setValid] = useState(true);

    useEffect(() => {
        setVisibility(props.isVisible);
        isVisible ? setTextColor(colors.primary) : setTextColor(colors.neutralDark);
    });

    const isNumberValid = () => {

        if (props.number !== "") {
            props.number.length === MAX_PHONE_NUMBER_SIZE ? setValid(true) : setValid(false);
        }
    };

    return (
        <View>
            <TextInput
                placeholderTextColor={colors.neutralDark}
                placeholder={"Phone number"}
                editable={ isVisible }
                keyboardType="number-pad"
                style={[PhoneNumberInputStyle.phoneNumberText, {
                    borderWidth: 1,
                    borderColor: textColor,
                    color: textColor
                }]}
                multiline={false}
                value={props.number}
                onChangeText={props.onChangeText}
                onFocus={() => {
                    setClear(true);
                }}
                onBlur={() => {
                    setClear(false);
                    isNumberValid();
                }}
            />
            { props.number !== "" && canClear ?
                <View style={PhoneNumberInputStyle.closeButtonParrent}>
                    <TouchableOpacity style={PhoneNumberInputStyle.closeButton}
                        onPress={ props.onClearPress }
                    >
                        <Ionicons
                            style={PhoneNumberInputStyle.closeButtonImage}
                            name={"close"}
                            size={30}
                            color={colors.hover}
                        />
                    </TouchableOpacity>
                </View> : <View></View>
            }
            { !numberValid ?
                <Text style={{ color: colors.accentOrange, fontSize: 14 }}>
                        The number you entered is not valid
                </Text>
                :
                <View></View>
            }
        </View>
    );
};

export default PhoneNumberInput;