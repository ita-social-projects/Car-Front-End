import { StyleSheet } from "react-native";
import Font from "../../data/fonts/Font";
import { lightColors, permanentColors } from "../theme/ThemesColors";

const ConfirmModalStyle = StyleSheet.create({
    background: {
        flex: 1,
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "rgba(0, 0, 0, 0.5)"
    },
    window: {
        width: 344,
        height: 310,
        backgroundColor: lightColors.white,
        opacity: 1,
        alignItems: "center",
        borderRadius: 16,
        paddingVertical: 30,
        paddingTop: 32,
        paddingHorizontal: 20,
        paddingBottom: 24,
        justifyContent: "center"
    },
    boldText: {
        color: lightColors.primary,
        fontSize: 14,
        lineHeight: 18,
        fontWeight: "700",
        fontFamily: Font.OpenSans.Extrabold,
    },
    white: {
        color: lightColors.white
    },
    confirmButton: {
        width: 304,
        height: 56,
        alignItems: "center",
        backgroundColor: permanentColors.accentRed,
        paddingVertical: 18,
        marginBottom: 26
    },
    subtitleText: {
        textAlign: "center",
        color: lightColors.secondaryDark,
        marginTop: 32,
        marginBottom: 40,
        marginHorizontal: 21.5
    }
}
);

export default ConfirmModalStyle;
