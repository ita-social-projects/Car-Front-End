import AsyncStorage from "@react-native-community/async-storage";
import * as React from "react";
import { useColorScheme } from "react-native-appearance";
import changeNavigationBarColor from "react-native-navigation-bar-color";

export let isDarkMode: boolean;

const returnType: any = {};

export const ThemeContext = React.createContext({
    theme: "light",
    // eslint-disable-next-line unused-imports/no-unused-vars
    setScheme: (scheme : any) => returnType,
});

export const ThemeProvider = (props) => {
    const colorScheme = useColorScheme();

    const isThemeDark = (theme) => theme === "dark" || (theme === "system" && colorScheme === "dark");
    const [selectedTheme, setSelectedTheme] = React.useState("system");

    React.useEffect(() => {
        AsyncStorage.getItem("theme").then(res => {
            let theme = res ? res : "system";

            setSelectedTheme(theme);
            isDarkMode = isThemeDark(theme);
            changeNavigationBarColor(
                isDarkMode ? "#121212" : "#FFFFFF",
                !isDarkMode,
                true
            );
        });
    }, []);

    React.useEffect(() => {
        if(selectedTheme === "system")
        {
            isDarkMode = colorScheme === "dark";
        }
    }, [colorScheme]);

    const defaultTheme = {
        theme: selectedTheme,
        setScheme: (theme) => {
            setSelectedTheme(theme);
            isDarkMode = isThemeDark(theme);
        },
    };

    return (
        <ThemeContext.Provider value={defaultTheme}>
            {props.children}
        </ThemeContext.Provider>
    );
};

export const useTheme = () => React.useContext(ThemeContext);