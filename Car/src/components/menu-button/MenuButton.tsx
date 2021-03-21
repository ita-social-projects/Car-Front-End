import React, { useState } from "react";
import { Text, TouchableHighlight, View } from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";
import DM from "../styles/DM";
import MenuButtonStyle from "./MenuButtonStyle";

const MenuButton = (props: any) => {
    const [colorButton, setColorButton] = useState(DM("white"));
    const [colorText, setColorText] = useState(DM("black"));
    const [colorIcon, setColorIcon] = useState(DM("black"));
    const [colorSeparator, setColorSeparator] = useState(DM("#C1C1C5"));

    const changeColorToBlack = () => {
        setColorText(DM("white"));
        setColorButton(DM("black"));
        setColorIcon(DM("white"));
        setColorSeparator(DM("black"));
    };

    const changeColorToWhite = () => {
        setColorText(DM("black"));
        setColorButton(DM("white"));
        setColorIcon(DM("black"));
        setColorSeparator(DM("#C1C1C5"));
    };

    return (
        <TouchableHighlight
            style={[
                MenuButtonStyle.panelButton,
                { backgroundColor: colorButton }
            ]}
            onPressIn={changeColorToBlack.bind(this)}
            onPressOut={changeColorToWhite.bind(this)}
            onPress={props.onPress}
        >
            <View>
                <View style={MenuButtonStyle.wrapper}>
                    <View style={MenuButtonStyle.container}>
                        <Text
                            style={[
                                MenuButtonStyle.panelButtonTitle,
                                { color: DM("black") },
                                { color: colorText }
                            ]}
                        >
                            {props.text}
                        </Text>
                    </View>
                    <View style={MenuButtonStyle.container}>
                        <Icon
                            color={colorIcon}
                            name="chevron-right"
                            size={30}
                            style={MenuButtonStyle.Icon}
                        />
                    </View>
                </View>
                <View
                    style={[
                        MenuButtonStyle.separator,
                        { backgroundColor: colorSeparator }
                    ]}
                />
            </View>
        </TouchableHighlight>
    );
};

export default MenuButton;
