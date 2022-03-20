import { StyleSheet } from "react-native";
import Font from "../../../data/fonts/Font";

const PopupStyles = StyleSheet.create({
    headerText: {
        textAlign:"center",
        fontSize:24,
        color: "#D80056",
        fontWeight:"bold",
        fontFamily: Font.Milliard.Milliard
    },

    image: {
        height: 150,
        width: 136,
        paddingTop: 40,
        resizeMode:"contain"
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
    }
});

export default PopupStyles;