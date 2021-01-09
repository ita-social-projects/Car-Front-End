import React from 'react'
import { Text, View } from 'react-native';
import { TextInput } from 'react-native-gesture-handler'
import carTextInputStyle from './CarTextInputStyle';

function CarTextInput(props: any) {
    return (
        <View style={carTextInputStyle.container}>
            <Text style={carTextInputStyle.requiredPointer}>*</Text>
            <TextInput
                placeholderTextColor='black'
                style={carTextInputStyle.textInputStyle}
                placeholder={props.placeHolder}>
            </TextInput>
        </View>
    );
}
export default CarTextInput;