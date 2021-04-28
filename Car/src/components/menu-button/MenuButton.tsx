import React, { useState } from "react";
import { Text, View } from "react-native";
import { TouchableWithoutFeedback } from "react-native-gesture-handler";
import Icon from "react-native-vector-icons/MaterialIcons";
import DM from "../styles/DM";
import MenuButtonStyle from "./MenuButtonStyle";
import MenuButtonProps from "./MenuButtonProps";

const MenuButton = (props: MenuButtonProps) => {

    const black = DM("#000000");
    const white = DM("#FFFFFF");
    const disabledColor = DM("#B8B8B8");

    const [colorButton, setColorButton] = useState(white);
    const [colorText, setColorText] = useState(black);
    const [colorIcon, setColorIcon] = useState(black);
    const [colorSeparator, setColorSeparator] = useState(DM("#C1C1C5"));

    const changeColorToBlack = () => {
        setColorText(white);
        setColorButton(black);
        setColorIcon(white);
        setColorSeparator(black);
    };

    const changeColorToWhite = () => {
        setColorText(black);
        setColorButton(white);
        setColorIcon(black);
        setColorSeparator(DM("#C1C1C5"));
    };

    return (
        <TouchableWithoutFeedback
            style={[
                MenuButtonStyle.panelButton,
                { backgroundColor: colorButton }
            ]}
            onPressIn={changeColorToBlack.bind(this)}
            onPressOut={changeColorToWhite.bind(this)}
            onPress={props.onPress}
            disabled={props.disabled}
        >
            <View>
                <View style={MenuButtonStyle.wrapper}>
                    <View style={MenuButtonStyle.container}>
                        <Text
                            style={[
                                MenuButtonStyle.panelButtonTitle,
                                { color: DM("black") },
                                { color: props.disabled ? disabledColor : colorText }
                            ]}
                        >
                            {props.text}
                        </Text>
                    </View>
                    {props.isIcon ? (
                        <View style={MenuButtonStyle.container}>
                            <Icon
                                color={colorIcon}
                                name={props.iconName ?? "chevron-right"}
                                size={30}
                                style={MenuButtonStyle.Icon}
                            />
                        </View>
                    ) : (<View />)}
                </View>

                <View
                    style={[
                        MenuButtonStyle.separator,
                        { backgroundColor: colorSeparator }
                    ]}
                />
            </View>
        </TouchableWithoutFeedback>
    );
};

export default MenuButton;
