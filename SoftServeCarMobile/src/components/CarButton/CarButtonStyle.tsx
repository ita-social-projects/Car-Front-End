import { StyleSheet } from "react-native";

const carButtonStyle = StyleSheet.create({
    button: {
        paddingHorizontal: 16,
        paddingVertical: 14,
        alignItems: "center"
    },
    whiteButton: {
        backgroundColor: "#FFFFFF",
        borderWidth: 2,
        borderColor: "#000000"
    },
    blackButton: {
        backgroundColor: "#000000"
    },
    disabled: {
        opacity: 0.4
    },
    title: {
        textTransform: "uppercase",
        fontWeight: "bold",
        fontSize: 16,
        lineHeight: 20
    },
    whiteTitle: {
        color: "white"
    },
    blackTitle: {
        color: "black"
    }
});
export default carButtonStyle;
