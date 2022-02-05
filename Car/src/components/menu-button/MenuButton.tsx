import React, { useEffect, useState } from "react";
import { Pressable, Text, View } from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";
import { useTheme } from "../theme/ThemeProvider";
import MenuButtonStyle from "./MenuButtonStyle";
import MenuButtonProps from "./MenuButtonProps";

const MenuButton = (props: MenuButtonProps) => {
    const { colors } = useTheme();

    const black = colors.primary;
    const white = colors.white;
    const disabledColor = colors.secondaryLight;

    const [colorButton, setColorButton] = useState(white);
    const [colorText, setColorText] = useState(black);
    const [colorIcon, setColorIcon] = useState(black);
    const [colorSeparator, setColorSeparator] = useState(colors.neutralDark);
    let color = props.disabled ? disabledColor : colorIcon;

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
        setColorSeparator(colors.secondaryLight);
    };

    useEffect(() => {
        color = props.disabled ? disabledColor : colorIcon;
    });

    return (
        <Pressable
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
                                { color: colors.primary },
                                { color: props.disabled ? disabledColor : colorText }
                            ]}
                        >
                            {props.text}
                        </Text>
                    </View>
                    {props.isIcon ? (
                        <View style={MenuButtonStyle.container}>
                            <Icon
                                color={color}
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
                ></View>

            </View>
        </Pressable>
    );
};

export default MenuButton;
