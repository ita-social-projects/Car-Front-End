import React, { useState } from 'react'
import { TouchableHighlight, Text, StyleSheet, View } from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";

const MenuButton = (props: any) => {

    const [colorButton, setColorButton] = useState('white');
    const [colorText, setColorText] = useState('black');
    const [colorIcon, setColorIcon] = useState('black');
    const [colorSeparator, setColorSeparator] = useState('#C1C1C5');

    const changeColorToBlack = () => {
        setColorText('white');
        setColorButton('black');
        setColorIcon('white');
        setColorSeparator('black');
    }

    const changeColorToWhite = () => {
        setColorText('black');
        setColorButton('white');
        setColorIcon('black');
        setColorSeparator('#C1C1C5');
    }




    return (
        <TouchableHighlight
            style={{ ...styles.panelButton, backgroundColor: colorButton }}
            onPressIn={changeColorToBlack.bind(this)}
            onPressOut={changeColorToWhite.bind(this)}>
            <View>
                <View style={styles.wrapper}>
                    <View style={{ justifyContent: 'center' }}>
                        <Text style={{ ...styles.panelButtonTitle, color: colorText }}>{props.text}</Text>
                    </View>
                    <View style={{ justifyContent: 'center' }}>
                        <Icon color={colorIcon} name='chevron-right' size={30} style={{ paddingRight: 12 }} />
                    </View>
                </View>
                <View style={{
                    flexWrap: 'wrap',
                    backgroundColor: colorSeparator,
                    width: '100%',
                    height: 1,

                }} />
            </View>
        </TouchableHighlight>
    )
}



const styles = StyleSheet.create({
    wrapper: {
        justifyContent: 'space-between',
        flexDirection: 'row'
    },
    panelButton: {
        height: 44,
        justifyContent: 'center',
        flexDirection: 'column'
    },
    panelButtonTitle: {
        fontSize: 13,
        lineHeight: 42,
        fontWeight: 'bold',
        color: 'black',
        alignItems: "center",
        paddingLeft: 24,
    },
})



export default MenuButton;