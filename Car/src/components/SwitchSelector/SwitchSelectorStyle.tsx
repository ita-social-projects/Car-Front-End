import { StyleSheet } from "react-native";

const SwitchSelectorStyle = StyleSheet.create({
    container: {
        flexDirection: "row",
        alignItems: "center",
        marginLeft: 16,
        marginTop: 24,
        fontSize: 13,
        lineHeight: 16
    },
    buttonContaier: {
        flexDirection: "row",
        borderWidth: 1,
        marginRight: 15
    },

    leftButton: {
        paddingHorizontal: 16,
        paddingVertical: 6,
        backgroundColor: "#000000",
        flexDirection: "row",
        justifyContent: "flex-end",
        borderRightWidth: 1,
    },

    rightButton: {
        paddingHorizontal: 16,
        paddingVertical: 6,
        backgroundColor: "white",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "flex-end",
    },

    buttonText: {
        textTransform: "uppercase",
        fontWeight: "bold",
        fontSize: 16,
        lineHeight: 18,
    },

    inactiveButton: {
        backgroundColor: "#FFFFFF",
        color: "#000000",
        borderColor: "#000000"
    },

    activeButton: {
        backgroundColor: "#000000",
        color: "#FFFFFF",
        borderColor: "#000000"
    },
});

export const activeButtonStyle = SwitchSelectorStyle.activeButton;
export const inactiveButtonStyle = SwitchSelectorStyle.inactiveButton;

export default SwitchSelectorStyle;