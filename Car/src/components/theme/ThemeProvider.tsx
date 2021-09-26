/* eslint-disable unused-imports/no-unused-vars */
import AsyncStorage from "@react-native-community/async-storage";
import * as React from "react";
import { useColorScheme } from "react-native-appearance";
import changeNavigationBarColor from "react-native-navigation-bar-color";

const returnType: any = {};

export const ThemeContext = React.createContext({
    isThemeDark: false,
    theme: "light",
    setScheme: (scheme : any) => returnType,
    DM: (color: string) => returnType,
    DMStyleObject: (styleObject: object) => returnType,
});

export const ThemeProvider = (props) => {
    const colorScheme = useColorScheme();

    const isThemeDark = (theme) => theme === "dark" || (theme === "system" && colorScheme === "dark");
    const [selectedTheme, setSelectedTheme] = React.useState("system");
    const [isThemeDarkState, setIsThemeDarkState] = React.useState(isThemeDark("system"));

    const DMStyleObject = (styleObj) => {
        let res = Object.assign({}, styleObj);

        Object.keys(res).forEach((key) => { res[key] = DM(res[key]); });

        return res;
    };

    const DM = (color: string) => {
        if(isThemeDarkState) {
            if (color === "black") return ("#EBEBEB");
            if (color === "white") return ("#1C1C1C");
            if (color === "#000000") return ("#EBEBEB");
            if (color === "#FFFFFF") return ("#1C1C1C");
            if (color === "#EBEBEB") return ("#1C1C1C");
            if (color === "#1C1C1C") return ("#EBEBEB");
            if (color === "light-content") return ("dark-content");
            if (color === "dark-content") return ("light-content");
            if (color === "#FAFAFA") return ("#191919");
            if (color === "#F0F0F0") return ("#232323");
            if (color === "#414045") return ("#BEBFBA");
            if (color === "#F1F1F4") return ("#7678BE");
            if (color === "#00000033") return ("#EBEBEB33");
            if (color === "#909095") return ("#6F6F6A");
        } else {
            if (color === "#121212") return ("#FFFFFF");
        }

        return color;
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
                !(colorScheme === "dark"),
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
        DM: DM,
        DMStyleObject: DMStyleObject
    };

    return (
        <ThemeContext.Provider value={defaultTheme}>
            {props.children}
        </ThemeContext.Provider>
    );
};

export const useTheme = () => React.useContext(ThemeContext);