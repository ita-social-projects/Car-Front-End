import React from 'react'
import { Controller, useForm } from 'react-hook-form';
import { Text, View } from 'react-native';
import { TextInput } from 'react-native-gesture-handler'
import carTextInputStyle from './CarTextInputStyle';

function Input(props: any) {
    return (
        <>
            <View style={carTextInputStyle.container}>
                <Text style={carTextInputStyle.requiredPointer}>*</Text>
                <TextInput
                    {...props}
                    style={[
                        carTextInputStyle.textInputStyle,
                        props.error && { borderColor: 'red' }
                    ]}>
                </TextInput>
            </View>
            {props.errorText && (
                <Text style={{ color: 'red' }}>{props.errorText}</Text>
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
                    onChangeText={(text: string) => { onChange(text); props.onChangeText(text, Boolean(errors?.name));}}
                    onBlur={handleSubmit(() => { })}
                    value={value}
                    placeholder={props.placeHolder}
                    error={errors?.name}
                    errorText={errors?.name?.message}
                />
            )}
        />
    )
}
export default CarTextInput;