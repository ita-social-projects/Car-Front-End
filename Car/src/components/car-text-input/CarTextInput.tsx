import React from "react";
import { Controller, useForm } from "react-hook-form";
import { Text, View } from "react-native";
import { TextInput } from "react-native-gesture-handler";
import CarTextInputStyle from "./CarTextInputStyle";

const CarTextInput = (props: any) => {
    const { control } = useForm();

    return (
        <Controller
            control={control}
            rules={props.rules}
            name="name"
            defaultValue=""
            render={() => (
                <>
                    <View style={CarTextInputStyle.container}>
                        <Text style={CarTextInputStyle.requiredPointer}>*</Text>
                        <TextInput
                            autoCapitalize={"characters"}
                            onChangeText={(text: string) =>{
                                props.onChangeText(text.toUpperCase());
                            }}
                            placeholder={props.placeHolder}
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
            )}
        />
    );
};

export default CarTextInput;
