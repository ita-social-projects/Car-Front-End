import { StyleSheet } from "react-native";

const CarTextInputStyle = StyleSheet.create({
    container: {
        borderWidth: 2,
        justifyContent: "center",
        paddingLeft: 24
    },

    requiredPointer: {
        position: "absolute",
        zIndex: 10,
        marginLeft: 16
    },

    textInputStyle: {
        paddingVertical: 8,
        fontSize: 16,
        lineHeight: 24,
        textTransform: "uppercase",
        zIndex: 0
    },
});

export default CarTextInputStyle;
