import React from "react";
import { Controller, useForm } from "react-hook-form";
import { Text, View } from "react-native";
import { TextInput } from "react-native-gesture-handler";
import DM from "../styles/DM";
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
                    <View style={[CarTextInputStyle.container, { borderColor: DM("black") }]}>
                        <Text style={[CarTextInputStyle.requiredPointer, { color: DM("red") }]}>
                            *
                        </Text>
                        <TextInput
                            autoCapitalize={"characters"}
                            onChangeText={(text: string) =>{
                                props.onChangeText(text.toUpperCase());
                            }}
                            placeholder={props.placeHolder}
                            placeholderTextColor={DM("gray")}
                            style={[
                                CarTextInputStyle.textInputStyle,
                                { color: DM("black") },
                                props.error && { borderColor: DM("red") }
                            ]}
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
