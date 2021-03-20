import { StyleSheet } from "react-native";
import DM from "../styles/DM";

const CarButtonStyle = StyleSheet.create({
    button: {
        paddingHorizontal: 16,
        paddingVertical: 14,
        alignItems: "center"
    },

    whiteButton: {
        backgroundColor: DM("#FFFFFF"),
        borderWidth: 2,
        borderColor: DM("#000000")
    },

    blackButton: {
        backgroundColor: DM("#000000")
    },

    disabled: {
        opacity: 0.2
    },

    title: {
        textTransform: "uppercase",
        fontWeight: "bold",
        fontSize: 16,
        lineHeight: 20
    },

    whiteTitle: {
        color: DM("white")
    },

    blackTitle: {
        color: DM("black")
    }
});

export default CarButtonStyle;
