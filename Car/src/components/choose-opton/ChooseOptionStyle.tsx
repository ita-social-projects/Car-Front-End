import { StyleSheet } from "react-native";
import Font from "../../data/fonts/Font";

const ChooseOptionStyle = StyleSheet.create({
    preferencesContainer: {
        flexDirection: "row",
        alignItems: "center"
    },

    preferenceNameContainer: {
        flex: 1
    },

    switch: {
        height: 28,
        width: 36
    },

    preferenceValueContainer: {
        width: 26
    },

    preferenceNameText: {
        fontFamily: Font.OpenSans.Regular,
        fontWeight: "700",
        lineHeight: 18,
        fontSize: 13
    },

    preferenceValueText: {
        fontFamily: Font.OpenSans.Regular,
        lineHeight: 24,
        fontSize: 16
    },
});

export default ChooseOptionStyle;
