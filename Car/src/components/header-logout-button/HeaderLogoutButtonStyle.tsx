import { StyleSheet } from "react-native";
import Font from "../../data/fonts/Font";

const HeaderLogoutButtonStyle = StyleSheet.create({
    requestButton: {
        paddingRight: 17,
        justifyContent: "center",
        alignItems: "center"
    },

    buttonText: {
        color: "#EC6400",
        fontFamily: Font.OpenSans.ExtraBold,
        fontSize: 20,
        fontWeight: "700"
    }
});

export default HeaderLogoutButtonStyle;