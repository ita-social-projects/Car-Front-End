import { StyleSheet } from "react-native";
import Font from "../../data/fonts/Font";

const HeaderLogoutButtonStyle = StyleSheet.create({
    requestButton: {
        paddingRight: 17,
        justifyContent: "center",
        alignItems: "center"
    },

    buttonText: {
        fontFamily: Font.OpenSans.ExtraBold,
        fontSize: 16,
        fontWeight: "bold",
        fontStyle:"normal",
        letterSpacing: 0.25,
        width: 62,
    }
});

export default HeaderLogoutButtonStyle;