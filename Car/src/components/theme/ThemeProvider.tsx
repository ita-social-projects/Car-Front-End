/* eslint-disable unused-imports/no-unused-vars */
import AsyncStorage from "@react-native-community/async-storage";
import * as React from "react";
import { useColorScheme } from "react-native-appearance";
import changeNavigationBarColor from "react-native-navigation-bar-color";
import { lightColors, darkColors } from "./ThemesColors";

const returnType: any = {};

export const DM = (color: string, isDark: boolean) => {
    if(isDark) {
        switch(color){
            case "black" : return "#EBEBEB";
            case "black": return ("#EBEBEB");
            case "white": return ("#1C1C1C");
            case "#000000": return ("#EBEBEB");
            case "#FFFFFF": return ("#1C1C1C");
            case "#414045": return ("#BEBFBA");
            case "#F1F1F4": return ("#7678BE");
            case "#909095": return ("#6F6F6A");

        }
    }

    return color;
};

export const ThemeContext = React.createContext({
    isThemeDark: false,
    theme: "light",
    setScheme: (scheme : any) => returnType,
    colors: lightColors,
    //DM: (color) => DM(color, false),
    DMStyleObject: (styleObject: object) => returnType,
});

export const ThemeProvider = (props) => {
    const colorScheme = useColorScheme();

    const isThemeDark = (theme) => theme === "dark" || (theme === "system" && colorScheme === "dark");
    const [selectedTheme, setSelectedTheme] = React.useState("system");
    const [isThemeDarkState, setIsThemeDarkState] = React.useState(isThemeDark("system"));

    const DMStyleObject = (styleObj) => {
        let res = Object.assign({}, styleObj);

        Object.keys(res).forEach((key) => { res[key] = DM(res[key], isThemeDarkState); });

        return res;
    };

    React.useEffect(() => {
        AsyncStorage.getItem("theme").then(res => {
            let theme = res ? res : "system";

            setSelectedTheme(theme);
            setIsThemeDarkState(isThemeDark(theme));
            changeNavigationBarColor(
                isThemeDark(theme) ? "#121212" : "#FFFFFF",
                !isThemeDark(theme),
                true
            );
        });
    }, []);

    React.useEffect(() => {
        if(selectedTheme === "system")
        {
            setIsThemeDarkState(colorScheme === "dark");
            changeNavigationBarColor(
                colorScheme === "dark" ? "#121212" : "#FFFFFF",
                colorScheme !== "dark",
                true
            );
        }
    }, [colorScheme]);

    const defaultTheme = {
        isThemeDark: isThemeDarkState,
        theme: selectedTheme,
        setScheme: (theme) => {
            setSelectedTheme(theme);
            setIsThemeDarkState(isThemeDark(theme));
            changeNavigationBarColor(
                isThemeDark(theme) ? "#121212" : "#FFFFFF",
                !isThemeDark(theme),
                true
            );
        },
        colors: isThemeDarkState ? darkColors : lightColors,
        //DM: (color) => DM(color, isThemeDarkState),
        DMStyleObject: DMStyleObject
    };

    return (
        <ThemeContext.Provider value={defaultTheme}>
            {props.children}
        </ThemeContext.Provider>
    );
};

export const useTheme = () => React.useContext(ThemeContext);