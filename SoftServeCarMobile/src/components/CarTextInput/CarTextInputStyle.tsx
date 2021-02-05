import { StyleSheet } from "react-native";

const carTextInputStyle = StyleSheet.create({
    container: {
        borderWidth: 2,
        justifyContent: "center",
        paddingLeft: 24
    },
    requiredPointer: {
        position: "absolute",
        zIndex: 10,
        color: "red",
        marginLeft: 16
    },
    textInputStyle: {
        paddingVertical: 8,
        fontSize: 16,
        lineHeight: 24,
        zIndex: 0
    }
});
export default carTextInputStyle;
