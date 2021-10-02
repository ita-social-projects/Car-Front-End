import AsyncStorage from "@react-native-community/async-storage";
import React, { useEffect, useState } from "react";
import { View, Text, TouchableOpacity, Platform } from "react-native";
import ChooseOption from "../../../../../../components/choose-opton/ChooseOption";
import { useTheme } from "../../../../../../components/theme/ThemeProvider";
import AppSettingsStyle from "./AppSettingsStyle";
import RNRestart from "react-native-restart";
import TouchableNavigationCard from "../../../../../../components/touchable-navigation-card/TouchableNavigationCard";
import TouchableNavigationCardStyle
    from "../../../../../../components/touchable-navigation-card/TouchableNavigationCardStyle";
import ChooseOptionStyle from "../../../../../../components/choose-opton/ChooseOptionStyle";
import Ionicons from "react-native-vector-icons/Ionicons";

const AppSettings = (props: {navigation: any}) => {
    const { DM } = useTheme();
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
                    { borderBottomColor: DM(Platform.OS === "ios" ? "rgba(0,0,0,0.5)" : "#C1C1C5"), }]}
            >
                <ChooseOption
                    picture={<Ionicons
                        name={"moon-outline"}
                        size={20}
                        color={DM("#414045")}
                    />}
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
                picture={<Ionicons
                    name={"globe-outline"}
                    size={20}
                    color={DM("#414045")}
                />}
            >
                <Text style={ChooseOptionStyle.preferenceNameText}>Language</Text>
            </TouchableNavigationCard>
            <TouchableNavigationCard
                navigation={props.navigation}
                navigationName="Payment"
                cardName="Payment"
                angle="0"
                picture={<Ionicons
                    name={"wallet-outline"}
                    size={20}
                    color={DM("#414045")}
                />}
            >
                <Text style={ChooseOptionStyle.preferenceNameText}>Payment</Text>
            </TouchableNavigationCard>
            <TouchableNavigationCard
                navigation={props.navigation}
                navigationName="HelpCenter"
                cardName="Help Center"
                angle="0"
                picture={<Ionicons
                    name={"help-circle-outline"}
                    size={20}
                    color={DM("#414045")}
                />}
            >
                <Text style={ChooseOptionStyle.preferenceNameText}>Help Center</Text>
            </TouchableNavigationCard>
        </View>
    );
};

export default AppSettings;