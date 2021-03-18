import { StyleSheet } from "react-native";
import Font from "../../data/fonts/Font";

const HeaderRequestButtonStyle = StyleSheet.create({
    requestButton: {
        paddingRight: 17,
        justifyContent: "center",
        alignItems: "center"
    },

    buttonText: {
        color: "#02A2CF",
        fontFamily: Font.OpenSans.ExtraBold,
        fontSize: 20,
        fontWeight: "700"
    },
});

export default HeaderRequestButtonStyle;