import React from "react";
import { Controller, useForm } from "react-hook-form";
import { Text, View } from "react-native";
import { TextInput } from "react-native-gesture-handler";
import { useTheme } from "../theme/ThemeProvider";
import CarTextInputStyle from "./CarTextInputStyle";
import CarTextInputProps from "./CarTextInputProps";

const CarTextInput = (props: CarTextInputProps) => {
    const { colors } = useTheme();
    const { control } = useForm();

    return (
        <Controller
            control={control}
            rules={props.rules}
            name="name"
            defaultValue=""
            render={() => (
                <>
                    <View style={[CarTextInputStyle.container, { borderColor: colors.primary }, !props.isValidField && {borderColor: colors.accentRed}]}>
                        <TextInput
                            onChangeText={(text: string) => props.onChangeText!(text)}
                            placeholder={props.placeHolder}
                            placeholderTextColor={colors.secondaryDark}
                            defaultValue={props.defaultValue}
                            style={[
                                CarTextInputStyle.textInputStyle,
                                { color: colors.primary },
                                props.error && { borderColor: colors.accentRed }
                            ]}
                            onBlur={props.onBlur}
                        />
                    </View>
                    {props.errorText && (
                        <Text style={{ color: colors.accentRed }}>
                            {props.errorText}
                        </Text>
                    )}
                </>
            )}
        />
    );
};

export default CarTextInput;
