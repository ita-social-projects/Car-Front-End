import Font from "../../data/fonts/Font";
import EStyleSheet from "react-native-extended-stylesheet";
import DM from "./DM";

const IconStyle = EStyleSheet.create({
    icon: {
        fontFamily: Font.OpenSans.Bold,
        fontSize: "0.9375rem",
        lineHeight: 16,
        display: "flex",
        alignItems: "center",
        textAlign: "center",
        textTransform: "uppercase",
        color: DM("#FFFFFF")
    }
});

export default IconStyle;
