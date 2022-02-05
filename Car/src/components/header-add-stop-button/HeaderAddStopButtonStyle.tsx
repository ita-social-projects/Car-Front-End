import { StyleSheet } from "react-native";
import Font from "../../data/fonts/Font";

const HeaderAddStopButtonStyle = StyleSheet.create({
    addButton: {
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

export default HeaderAddStopButtonStyle;