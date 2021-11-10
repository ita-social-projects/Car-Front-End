import React from "react";
import { Text, View } from "react-native";
import { useTheme } from "../theme/ThemeProvider";
import ChooseOptionStyle from "./ChooseOptionStyle";
import ChooseOptionProps from "./ChooseOptionProps";
import TouchableNavigationCardStyle from "../touchable-navigation-card/TouchableNavigationCardStyle";
import SwitchToggle from "react-native-switch-toggle";

const ChooseOption = (props: ChooseOptionProps) => {
    const { colors, isThemeDark } = useTheme();

    return (
        <View style={ChooseOptionStyle.preferencesContainer}>
            <View style={TouchableNavigationCardStyle.cardInformationContainer}>
                <View style={{ flexDirection: "row" }}>
                    {props.picture != undefined ? (
                        <View style={TouchableNavigationCardStyle.pictureContainer}>
                            {props.picture}
                        </View>
                    ) : (
                        <View />
                    )}
                </View>
            </View>
            <View style={ChooseOptionStyle.preferenceNameContainer}>
                <Text style={[ChooseOptionStyle.preferenceNameText, { color: colors.primary }]}>
                    {props.text}
                </Text>
            </View>
            <View>
                <SwitchToggle
                    switchOn={props.value}
                    onPress={() => props.onValueChanged(!props.value)}
                    circleColorOff={colors.white}
                    circleColorOn={!isThemeDark ? colors.white : colors.neutralDark}
                    backgroundColorOn={!isThemeDark ? colors.hover : colors.white}
                    backgroundColorOff={colors.neutralDark}
                    containerStyle={{
                        width: 36,
                        height: 20,
                        borderRadius: 12,
                        padding: 2,
                        borderWidth: 1,
                        borderColor: colors.neutralDark
                    }}
                    circleStyle={{
                        width: 16,
                        height: 16,
                        borderRadius: 8,
                    }}
                />
            </View>
        </View>
    );
};

export default ChooseOption;
