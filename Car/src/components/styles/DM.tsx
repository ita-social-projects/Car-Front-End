import { isDarkMode } from "../navigation/Routes";

const DM = (color: string, forceDark?: boolean) => {

    if(isDarkMode || forceDark) {
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

export default DM;
