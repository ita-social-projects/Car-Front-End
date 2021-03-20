import { StyleSheet } from "react-native";
import Font from "../../data/fonts/Font";
import DM from "../styles/DM";

const ChooseOptionStyle = StyleSheet.create({
    preferencesContainer: {
        flexDirection: "row",
        alignItems: "center"
    },

    preferenceNameContainer: {
        flex: 1
    },

    switchContainer: {
        paddingRight: 20
    },

    switch: {
        height: 28,
        width: 36
    },

    preferenceValueContainer: {
        width: 26
    },

    preferenceNameText: {
        fontFamily: Font.OpenSans.Bold,
        fontWeight: "700",
        color: DM("black"),
        lineHeight: 16,
        fontSize: 13
    },

    preferenceValueText: {
        fontFamily: Font.OpenSans.Regular,
        lineHeight: 24,
        color: DM("black"),
        fontSize: 16
    },
});

export default ChooseOptionStyle;