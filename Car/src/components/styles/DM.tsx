import { isDarkMode } from "../navigation/Routes";

const DM = (color: string, forceDark?: boolean) => {

    if(isDarkMode || forceDark) {
        if (color === "black" || color === "#000000") return ("#EBEBEB");
        if (color === "white" || color === "#FFFFFF") return ("#141414");
        if (color === "light-content") return ("dark-content");
        if (color === "dark-content") return ("light-content");
        if (color === "#FAFAFA") return ("#191919");
        if (color === "#F0F0F0") return ("#232323");
        if (color === "#414045") return ("#BEBFBA");
    }

    return (color);
};

export default DM;