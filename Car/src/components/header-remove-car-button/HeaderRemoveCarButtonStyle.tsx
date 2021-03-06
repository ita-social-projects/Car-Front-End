import { StyleSheet } from "react-native";
import Font from "../../data/fonts/Font";

const HeaderRemoveCarButtonStyle = StyleSheet.create({
    requestButton: {
        paddingRight: 17,
        justifyContent: "center",
        alignItems: "center"
    },

    buttonText: {
        fontFamily: Font.OpenSans.ExtraBold,
        fontSize: 20,
        fontWeight: "700"
    }
});

export default HeaderRemoveCarButtonStyle;