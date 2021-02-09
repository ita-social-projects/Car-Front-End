import { StyleSheet } from "react-native";
import { ProximaNova } from "../../../font-manager";
import Font from "../../components/fonts/Font";

const LoginStyle = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        margin: 30
    },

    loginPageTextGreeting: {
        fontFamily: Font.ProximaNova.Bold,
        fontSize: 21,
        textTransform: "uppercase",
        margin: 5,
        letterSpacing: 0.2
    },

    loginPageTextName: {
        fontFamily: ProximaNova.Bold,
        fontSize: 28,
        textTransform: "uppercase",
        margin: 5,
        letterSpacing: 0.2
    },

    loginButton: {
        margin: 30,
        padding: 15,
        alignSelf: "flex-end",
        fontFamily: Font.ProximaNova.Bold,
        fontSize: 16
    },

    preferencesText: {
        padding: 30,
        textAlign: "left",
        fontSize: 15
    },

    loadingIcon: {
        width: 56,
        height: 56,
        borderRadius: 50,
        borderWidth: 3,
        borderColor: "#EEEEEE"
    }
});

export default LoginStyle;
