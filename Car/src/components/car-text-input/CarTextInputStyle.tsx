import { StyleSheet } from "react-native";
import DM from "../styles/DM";

const CarTextInputStyle = StyleSheet.create({
    container: {
        borderWidth: 2,
        justifyContent: "center",
        paddingLeft: 24
    },

    requiredPointer: {
        position: "absolute",
        zIndex: 10,
        color: DM("red"),
        marginLeft: 16
    },

    textInputStyle: {
        paddingVertical: 8,
        fontSize: 16,
        lineHeight: 24,
        textTransform: "uppercase",
        zIndex: 0
    },

    errorText: {
        color: DM("red")
    },

    errorBorder: {
        borderColor: DM("red")
    }
});

export default CarTextInputStyle;
