import AsyncStorage from "@react-native-community/async-storage";

let isDarkMode = false;

AsyncStorage.getItem("isDarkMode").then(res => {
    isDarkMode = (res === "true");
});

export const WHITE = isDarkMode ? "#000000" : "#FFFFFF";