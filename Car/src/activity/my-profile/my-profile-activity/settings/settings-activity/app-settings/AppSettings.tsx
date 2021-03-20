import AsyncStorage from "@react-native-community/async-storage";
import React, { useEffect, useState } from "react";
import { View } from "react-native";
import ChooseOption from "../../../../../../components/choose-opton/ChooseOption";
import AppSettingsStyle from "./AppSettingsStyle";

const AppSettings = () => {
    const [isDarkMode, setDarkMode] = useState(false);

    useEffect(() => {
        AsyncStorage.getItem("isDarkMode").then(res => {
            setDarkMode(res === "true");
        });
    }, []);

    return (
        <View style={AppSettingsStyle.containert}>
            <ChooseOption
                text={"Enable Dark Mode"}
                value={isDarkMode}
                onValueChanged={(value: boolean) => {
                    setDarkMode(value);
                    AsyncStorage.setItem("isDarkMode", value ? "true" : "false");
                }}
            />
        </View>
    );
};

export default AppSettings;