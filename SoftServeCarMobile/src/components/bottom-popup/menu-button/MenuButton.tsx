import React, { useState } from "react";
import { Text, TouchableHighlight, View } from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";
import MenuButtonStyle from "./MenuButtonStyle";

const MenuButton = (props: any) => {
  const [colorButton, setColorButton] = useState("white");
  const [colorText, setColorText] = useState("black");
  const [colorIcon, setColorIcon] = useState("black");
  const [colorSeparator, setColorSeparator] = useState("#C1C1C5");

  const changeColorToBlack = () => {
    setColorText("white");
    setColorButton("black");
    setColorIcon("white");
    setColorSeparator("black");
  };

  const changeColorToWhite = () => {
    setColorText("black");
    setColorButton("white");
    setColorIcon("black");
    setColorSeparator("#C1C1C5");
  };

  return (
    <TouchableHighlight
      style={[MenuButtonStyle.panelButton, { backgroundColor: colorButton }]}
      onPressIn={changeColorToBlack.bind(this)}
      onPressOut={changeColorToWhite.bind(this)}
      onPress={props.onPress}
    >
      <View>
        <View style={MenuButtonStyle.wrapper}>
          <View style={MenuButtonStyle.container}>
            <Text style={[MenuButtonStyle.panelButton, { color: colorText }]}>
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
            { backgroundColor: colorSeparator },
          ]}
        />
      </View>
    </TouchableHighlight>
  );
};

export default MenuButton;
