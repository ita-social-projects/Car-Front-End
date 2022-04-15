import { Platform, StyleSheet } from "react-native";
import Font from "../../data/fonts/Font";

const LoginStyle = StyleSheet.create({
    pageContainer: {
        flex: 1,
        paddingTop: Platform.OS === "ios" ? 74 : 37,
        paddingHorizontal: 16,
        paddingBottom: 22,
    },

    greetingContainer: {
        alignItems: "center",
        flex: 6,
        justifyContent: "space-evenly",
    },

    greetingTextContainer: {
        alignItems: "center"
    },

    greetingPicture: {
        width: 275,
        height: 275,
        transform: [{ scaleX: -1 }],
    },

    greetingText: {
        fontFamily: Font.Milliard.Bold,
        fontSize: 14,
        lineHeight: 16,
        textTransform: "uppercase",
        letterSpacing: 0.2
    },

    applicationNameText: {
        fontFamily: Font.Milliard.Bold,
        fontSize: 20,
        textTransform: "uppercase",
        letterSpacing: 0.2,
        top:10
    },

    loginContainer: {
        flex: 1,
        justifyContent: "flex-end",
    },

    buttonContainer: {
        alignItems: "center",
        paddingHorizontal: Platform.OS === "ios" ? 16 : 3,
        paddingBottom: Platform.OS === "ios" ? 22 : 3
    },

    button: {
        width: "85%",
        height: 56,
        fontSize: 16,
        alignItems: "center",
        alignSelf: "center",
        justifyContent: "center"
    },

    buttonText: {
        fontFamily: Font.ProximaNova.Bold,
        fontSize: 16,
    },

    loadingIcon: {
        width: 56,
        height: 56,
        alignSelf: "center",
    }
});

export default LoginStyle;
