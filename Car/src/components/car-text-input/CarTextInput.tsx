import React from "react";
import { Controller, useForm } from "react-hook-form";
import { Text, View } from "react-native";
import { TextInput } from "react-native-gesture-handler";
import CarTextInputStyle from "./CarTextInputStyle";

function Input (props: any) {
    return (
        <>
            <View style={CarTextInputStyle.container}>
                <Text style={CarTextInputStyle.requiredPointer}>*</Text>
                <TextInput
                    onChangeText={(text: any) =>{
                        props.onChangeText(text);
                    }}
                    placeholder={props.placeholder}
                    style={[
                        CarTextInputStyle.textInputStyle,
                        props.error && { borderColor: "red" }
                    ]}
                />
            </View>
            {props.errorText && (
                <Text style={CarTextInputStyle.errorText}>
                    {props.errorText}
                </Text>
            )}
        </>
    );
}

function CarTextInput (props: any) {
    const { control } = useForm();

    return (
        <Controller
            control={control}
            rules={props.rules}
            name="name"
            defaultValue=""
            render={() => (
                <Input
                    onChangeText={props.onChangeText}
                    placeholder={props.placeHolder}
                />
            )}
        />
    );
}

export default CarTextInput;
