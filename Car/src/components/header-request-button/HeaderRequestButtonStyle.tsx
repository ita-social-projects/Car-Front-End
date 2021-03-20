import { StyleSheet } from "react-native";
import Font from "../../data/fonts/Font";
import DM from "../styles/DM";

const HeaderRequestButtonStyle = StyleSheet.create({
    requestButton: {
        paddingRight: 17,
        justifyContent: "center",
        alignItems: "center"
    },

    buttonText: {
        color: DM("#02A2CF"),
        fontFamily: Font.OpenSans.ExtraBold,
        fontSize: 20,
        fontWeight: "700"
    },
});

export default HeaderRequestButtonStyle;