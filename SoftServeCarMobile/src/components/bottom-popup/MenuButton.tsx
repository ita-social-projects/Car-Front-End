import React, { useState } from 'react'
import { TouchableHighlight, Text, StyleSheet } from "react-native";


const MenuButton = (props: any) => {

    const [colorButton, setColorButton] = useState('white');
    const [colorText, setColorText] = useState('black');
    
    const changeColorToBlack = () => {
        setColorText('white');
        setColorButton('black');
    }
    
    const changeColorToWhite = () => {
        setColorText('black');
        setColorButton('white');
    }
    

    return (
        <TouchableHighlight
            style={{ ...styles.panelButton, backgroundColor: colorButton }}
            onPressIn={changeColorToBlack.bind(this)}
            onPressOut={changeColorToWhite.bind(this)}>
            <Text style={{ ...styles.panelButtonTitle, color: colorText }}>{props.text}</Text>
        </TouchableHighlight>
    )
}



const styles = StyleSheet.create({
    panelButton: {
        height: 44,
        justifyContent: 'center',
        flexDirection: 'column'
    },
    panelButtonTitle: {
        fontSize: 13,
        lineHeight: 16,
        fontWeight: 'bold',
        color: 'black',
        alignItems: "center",
        paddingLeft: 24,
    },
})



export default MenuButton;