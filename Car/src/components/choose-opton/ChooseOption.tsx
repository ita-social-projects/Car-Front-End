import React from "react";
import { Text, View } from "react-native";
import { Switch } from "react-native-gesture-handler";
import { useTheme } from "../theme/ThemeProvider";
import ChooseOptionStyle from "./ChooseOptionStyle";
import ChooseOptionProps from "./ChooseOptionProps";
import TouchableNavigationCardStyle from "../touchable-navigation-card/TouchableNavigationCardStyle";

const ChooseOption = (props: ChooseOptionProps) => {
    const { DM } = useTheme();

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
                <Text style={[ChooseOptionStyle.preferenceNameText, { color: DM("black") }]}>
                    {props.text}
                </Text>
            </View>
            <View>
                <Switch
                    trackColor={{ false: DM("gray"), true: DM("#414045") }}
                    thumbColor={DM("white")}
                    style={ChooseOptionStyle.switch}
                    value={props.value}
                    onValueChange={(value) => props.onValueChanged(value)}
                />
            </View>
        </View>
    );
};

export default ChooseOption;
