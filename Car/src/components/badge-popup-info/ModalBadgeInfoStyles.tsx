import { StyleSheet, Dimensions } from "react-native";
import Font from "../../data/fonts/Font";

const KOEF_SCREEN: number = 32;

const BadgePopupStyles = StyleSheet.create({
    modalBackGround: {
        flex: 1,
        backgroundColor: "rgba(0,0,0,0.5)",
        justifyContent: "center",
        alignItems: "center",
    },

    modalContainer: {
        width: Dimensions.get("screen").width - KOEF_SCREEN,
        height: 322,
        borderRadius: 16,
        elevation: 10,
    },

    headerText: {
        marginTop: 32,
        textTransform: "uppercase",
        fontStyle: "normal",
        textAlign: "center",
        fontSize: 16,
        fontWeight: "bold",
        fontFamily: Font.Milliard.Milliard,
        letterSpacing: 0.25,
        lineHeight: 18,
    },

    messageText: {
        textAlign: "center",
        fontStyle: "normal",
        fontSize: 16,
        fontWeight: "400",
        fontFamily: Font.OpenSans.OpenSans,
        letterSpacing: 0.25,
        lineHeight: 22,
        marginTop: 32,
    },

    image: {
        width: 100,
        height: 140,
        alignSelf: "center",
        marginTop: 32,
    },
});

export default BadgePopupStyles;
