import React from "react";
import { Controller, useForm } from "react-hook-form";
import { Text, View } from "react-native";
import { TextInput } from "react-native-gesture-handler";
import { useTheme } from "../theme/ThemeProvider";
import CarTextInputStyle from "./CarTextInputStyle";
import CarTextInputProps from "./CarTextInputProps";

const CarTextInput = (props: CarTextInputProps) => {
    const { DM } = useTheme();
    const { control } = useForm();

    return (
        <Controller
            control={control}
            rules={props.rules}
            name="name"
            defaultValue=""
            render={() => (
                <>
                    <View style={[CarTextInputStyle.container, { borderColor: DM("black") }]}>
                        <Text style={[CarTextInputStyle.requiredPointer, { color: DM("red") }]}>
                            *
                        </Text>
                        <TextInput
                            onChangeText={(text: string) => props.onChangeText!(text)}
                            placeholder={props.placeHolder}
                            placeholderTextColor={DM("gray")}
                            defaultValue={props.defaultValue}
                            style={[
                                CarTextInputStyle.textInputStyle,
                                { color: DM("black") },
                                props.error && { borderColor: DM("red") }
                            ]}
                            onBlur={props.onBlur}
                        />
                    </View>
                    {props.errorText && (
                        <Text style={{ color: DM("red") }}>
                            {props.errorText}
                        </Text>
                    )}
                </>
            )}
        />
    );
};

export default CarTextInput;
