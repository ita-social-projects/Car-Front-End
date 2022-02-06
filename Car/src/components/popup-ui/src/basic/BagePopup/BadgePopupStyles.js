import { StyleSheet } from "react-native";
import Font from "../../../../../data/fonts/Font";

const BadgePopupStyles = StyleSheet.create({

    modalBackGround: {
        flex: 1,
        backgroundColor: "rgba(0,0,0,0.5)",
        justifyContent: "center",
        alignItems: "center",
    },

    modalContainer: {
        width: 344,
        height: 398,
        paddingHorizontal: 20,
        borderRadius: 16,
        elevation: 20
    },

    header: {
        width: "100%",
        height: 40,
        alignItems: "center",
        justifyContent: "center"
    },

    headerText: {
        textAlign:"center",
        fontSize:14,
        fontWeight:"bold",
        fontFamily: Font.Milliard.Milliard,
        letterSpacing: 0.25
    },

    messageText: {
        textAlign:"center",
        fontSize: 16,
        fontWeight: "normal",
        fontFamily: Font.OpenSans.OpenSans,
        letterSpacing: 0.25,
        lineHeight: 22
    },

    bodyText: {
        fontSize: 16,
        textAlign: "center",
        color:"#909095",
        fontFamily: Font.OpenSans.Regular
    },

    button: {
        width: 304,
        height: 56,
        alignItems: "center",
        backgroundColor: "#D80056",
        paddingVertical: 18
    },

    buttonText: {
        fontSize: 16,
        textAlign: "center",
        color:"white",
        fontWeight: "bold",
        fontFamily: Font.Milliard.Milliard
    },

    image: {
        width: 137,
        height: 150,
        position: "absolute"
    }
});

export default BadgePopupStyles;