import { StyleSheet } from "react-native";
import { permanentColors } from "../../components/theme/ThemesColors";
import Font from "../../data/fonts/Font";

const PrivacyPolicyStyle = StyleSheet.create({

    pageContainer: {
        flex: 1,
    },

    textContainer: {
        flex: 1,
        paddingTop: 37,
        paddingHorizontal: 16,
        marginBottom: 300,
    },

    scroll:{
        marginBottom: 60,
    },

    titleTextContainer: {
        paddingTop: 24,
        paddingBottom: 24
    },

    titleText: {
        fontFamily: Font.Milliard.ExtraBold,
        fontWeight: "400",
        fontStyle: "normal",
        fontSize: 18,
        lineHeight: 22,
        letterSpacing: 0.25,
    },

    importantText: {
        fontFamily: Font.Milliard.ExtraBold,
        fontWeight: "400",
        fontStyle: "normal",
        fontSize: 16,
        lineHeight: 22,
        letterSpacing: 0.25,
    },

    attentionText: {
        fontFamily: Font.Milliard.ExtraBold,
        fontWeight: "400",
        fontStyle: "normal",
        fontSize: 18,
        lineHeight: 22,
        letterSpacing: 0.25,
        color: permanentColors.accentOrange,
    },

    descriptionText: {
        fontFamily: Font.OpenSans.Regular,
        fontWeight: "400",
        fontStyle: "normal",
        fontSize: 16,
        lineHeight: 22,
        letterSpacing: 0.25,
    },

    button: {
        width: "100%",
        height: 56,
        fontSize: 16,
        paddingHorizontal: 36,
        marginBottom: 22,
        alignItems: "center",
        justifyContent: "center"
    },

    buttonText: {
        fontFamily: Font.ProximaNova.Bold,
        fontSize: 16,
    },

    background: {
        zIndex: 1,
        position: "absolute",
        left: 0,
        right: 0,
        top: "60%",
        height: "23%",
    },

});

export default PrivacyPolicyStyle;