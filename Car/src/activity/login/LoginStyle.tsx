import { Platform, StyleSheet } from "react-native";
import Font from "../../data/fonts/Font";

const LoginStyle = StyleSheet.create({
    pageContainer: {
        flex: 1,
        paddingTop: Platform.OS === "ios" ? 74 : 37,
        paddingHorizontal: 16,
        paddingBottom: 22,
    },

    greetingTextContainer: {
        alignItems: "center"
    },

    greetingText: {
        fontFamily: Font.ProximaNova.Bold,
        fontSize: 14,
        lineHeight: 16,
        textTransform: "uppercase",
        letterSpacing: 0.2
    },

    applicationNameTextContainer: {
        paddingTop: 18,
        alignItems: "center"
    },

    applicationNameText: {
        fontFamily: Font.ProximaNova.Bold,
        fontSize: 20,
        textTransform: "uppercase",
        letterSpacing: 0.2
    },

    loginContainer: {
        flex: 1,
        justifyContent: "flex-end",
        alignItems: "flex-end"
    },

    buttonContainer: {
        alignItems: "center",
        paddingHorizontal: Platform.OS === "ios" ? 16 : 0,
        paddingBottom: Platform.OS === "ios" ? 22 : 0
    },

    button: {
        width: 81,
        height: 48,
        fontSize: 16,
        alignItems: "center",
        justifyContent: "center"
    },

    buttonText: {
        fontFamily: Font.ProximaNova.Bold,
        fontSize: 16,
        textTransform: "uppercase"
    },

    loadingIcon: {
        width: 56,
        height: 56
    }
});

export default LoginStyle;
