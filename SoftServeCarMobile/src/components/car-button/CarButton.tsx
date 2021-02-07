import React from 'react'
import { TouchableOpacity, Text } from 'react-native';
import CarButtonStyle from './CarButtonStyle';

function CarButton() {
    return (
        <TouchableOpacity style={[CarButtonStyle.button, CarButtonStyle.whiteButton]}>
            <Text style={[CarButtonStyle.title]}>props.title</Text>
        </TouchableOpacity>
    );
}
export default CarButton;
