import AsyncStorage from "@react-native-community/async-storage";
import React, { useEffect, useState } from "react";
import { View } from "react-native";
import ChooseOption from "../../../../../../components/choose-opton/ChooseOption";
import DM from "../../../../../../components/styles/DM";
import AppSettingsStyle from "./AppSettingsStyle";
import RNRestart from "react-native-restart";

const AppSettings = () => {
    const [isDarkMode, setDarkMode] = useState(false);

    useEffect(() => {
        AsyncStorage.getItem("isDarkMode").then(res => {
            setDarkMode(res === "true");
        });
    }, []);

    return (
        <View style={[AppSettingsStyle.container, { backgroundColor: DM("white") }]}>
            <ChooseOption
                text={"Enable Dark Mode"}
                value={isDarkMode}
                onValueChanged={(value: boolean) => {
                    setDarkMode(value);
                    AsyncStorage.setItem("isDarkMode", value ? "true" : "false").then(() => RNRestart.Restart());
                }}
            />
        </View>
    );
};

export default AppSettings;