const DM = (color: string) => {

    if(!true) {
        if (color === "black" || color === "#000000") return ("#EBEBEB");
        if (color === "white" || color === "#FFFFFF") return ("#141414");
        if (color === "light-content") return ("dark-content");
        if (color === "dark-content") return ("light-content");
        if (color === "#FAFAFA") return ("#191919");
    }

    return (color);
};

export default DM;