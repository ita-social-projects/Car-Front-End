import AsyncStorage from "@react-native-community/async-storage";
import * as React from "react";
import { useColorScheme } from "react-native-appearance";
import changeNavigationBarColor from "react-native-navigation-bar-color";

export let isDarkMode: boolean;

const returnType: any = {};

export const ThemeContext = React.createContext({
    isThemeDark: false,
    theme: "light",
    // eslint-disable-next-line unused-imports/no-unused-vars
    setScheme: (scheme : any) => returnType,
    // eslint-disable-next-line unused-imports/no-unused-vars
    DM: (color: string) => returnType,
});

export const ThemeProvider = (props) => {
    const colorScheme = useColorScheme();

    const isThemeDark = (theme) => theme === "dark" || (theme === "system" && colorScheme === "dark");
    const [selectedTheme, setSelectedTheme] = React.useState("system");
    const [isThemeDarkState, setIsThemeDarkState] = React.useState(isThemeDark("system"));

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
            isDarkMode = isThemeDark(theme);
            setIsThemeDarkState(isThemeDark(theme));
            changeNavigationBarColor(
                isThemeDarkState ? "#121212" : "#FFFFFF",
                !isThemeDarkState,
                true
            );
        });
    }, []);

    React.useEffect(() => {
        if(selectedTheme === "system")
        {
            isDarkMode = colorScheme === "dark";
            setIsThemeDarkState(colorScheme === "dark");
            //change navigation bar color she
        }
    }, [colorScheme]);

    const defaultTheme = {
        isThemeDark: isThemeDarkState,
        theme: selectedTheme,
        setScheme: (theme) => {
            setSelectedTheme(theme);
            setIsThemeDarkState(isThemeDark(theme));
            isDarkMode = isThemeDark(theme);
            changeNavigationBarColor(
                isThemeDark(theme) ? "#121212" : "#FFFFFF",
                !isThemeDark(theme),
                true
            );
        },
        DM: DM
    };

    return (
        <ThemeContext.Provider value={defaultTheme}>
            {props.children}
        </ThemeContext.Provider>
    );
};

export const useTheme = () => React.useContext(ThemeContext);