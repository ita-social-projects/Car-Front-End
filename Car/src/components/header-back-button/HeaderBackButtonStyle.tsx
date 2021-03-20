import { StyleSheet } from "react-native";
import Font from "../../data/fonts/Font";
import DM from "../styles/DM";

const HeaderBackButtonStyle = StyleSheet.create({
    backButton: {
        flexDirection: "row",
        justifyContent: "space-between"
    },

    backButtonTextContainer: {
        flexDirection: "column",
        justifyContent: "center"
    },

    backButtonText: {
        color: DM("#02A2CF"),
        fontFamily: Font.OpenSans.ExtraBold,
        fontSize: 20,
        fontWeight: "700"
    },
});

export default HeaderBackButtonStyle;