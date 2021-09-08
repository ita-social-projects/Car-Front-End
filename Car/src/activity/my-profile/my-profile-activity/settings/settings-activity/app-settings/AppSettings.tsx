import AsyncStorage from "@react-native-community/async-storage";
import React, { useEffect, useState } from "react";
import { View, Text, TouchableOpacity, Platform } from "react-native";
import ChooseOption from "../../../../../../components/choose-opton/ChooseOption";
import DM from "../../../../../../components/styles/DM";
import AppSettingsStyle from "./AppSettingsStyle";
import RNRestart from "react-native-restart";
import TouchableNavigationCard from "../../../../../../components/touchable-navigation-card/TouchableNavigationCard";
import TouchableNavigationCardStyle
    from "../../../../../../components/touchable-navigation-card/TouchableNavigationCardStyle";
import ChooseOptionStyle from "../../../../../../components/choose-opton/ChooseOptionStyle";

const AppSettings = (props: {navigation: any}) => {
    const [isDarkMode, setDarkMode] = useState(false);

    useEffect(() => {
        AsyncStorage.getItem("isDarkMode").then(res => {
            setDarkMode(res === "true");
        });
    }, []);

    return (
        <View style={[AppSettingsStyle.container, { backgroundColor: DM("white") }]}>
            <TouchableOpacity
                style={[
                    TouchableNavigationCardStyle.cardContainer,
                    { borderBottomColor: DM(Platform.OS === "ios" ? "rgba(0,0,0,0.5)" : "#C1C1C5"), }]}>
                <ChooseOption
                    text={"Dark Mode"}
                    value={isDarkMode}
                    onValueChanged={(value: boolean) => {
                        setDarkMode(value);
                        AsyncStorage.setItem("isDarkMode", value ? "true" : "false").then(() => RNRestart.Restart());
                    }}
                />
            </TouchableOpacity>
            <TouchableNavigationCard
                navigation={props.navigation}
                navigationName="Language"
                cardName="Language"
                angle="0"
            >
                <Text style={ChooseOptionStyle.preferenceNameText}>Language</Text>
            </TouchableNavigationCard>
            <TouchableNavigationCard
                navigation={props.navigation}
                navigationName="Payment"
                cardName="Payment"
                angle="0"
            >
                <Text style={ChooseOptionStyle.preferenceNameText}>Payment</Text>
            </TouchableNavigationCard>
            <TouchableNavigationCard
                navigation={props.navigation}
                navigationName="HelpCenter"
                cardName="Help Center"
                angle="0"
            >
                <Text style={ChooseOptionStyle.preferenceNameText}>Help Center</Text>
            </TouchableNavigationCard>
        </View>
    );
};

export default AppSettings;
