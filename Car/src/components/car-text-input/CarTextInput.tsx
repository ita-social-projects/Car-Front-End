import React from "react";
import { Controller, useForm } from "react-hook-form";
import { Alert, Text, View } from "react-native";
import { TextInput } from "react-native-gesture-handler";
import CarTextInputStyle from "./CarTextInputStyle";

function Input(props: any) {
    return (
        <>
            <View style={CarTextInputStyle.container}>
                <Text style={CarTextInputStyle.requiredPointer}>*</Text>
                <TextInput
                    {...props}
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

function CarTextInput(props: any) {
    const { handleSubmit, control, errors } = useForm();

    return (
        <Controller
            control={control}
            rules={props.rules}
            defaultValue=""
            name="name"
            render={({ onChange, value }) => (
                <Input
                    onChangeText={(text: string) => {
                        onChange(text);
                        props.onChangeText(text, Boolean(errors?.name));
                    }}
                    onBlur={handleSubmit(() => {})}
                    value={value}
                    placeholder={props.placeHolder}
                    error={errors?.name}
                    errorText={errors?.name?.message}
                />
            )}
        />
    );
}

export default CarTextInput;
