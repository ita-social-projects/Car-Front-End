import React from 'react'
import { TouchableOpacity, Text } from 'react-native';
import carButtonStyle from './CarButtonStyle';

function CarButton(props: any) {
    return (
        <TouchableOpacity
            style={[carButtonStyle.button, carButtonStyle.whiteButton]}
        >
            <Text style={[carButtonStyle.title]}>props.title</Text>
        </TouchableOpacity>
    );
}
export default CarButton;