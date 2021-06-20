import { StyleSheet } from "react-native";

const SwitchSelectorStyle = StyleSheet.create({
    container: {
        flexDirection: "row",
        alignItems: "center",
        marginLeft: 21,
        marginRight: 0,
        marginTop: 24,
        fontSize: 13,
        lineHeight: 16
    },

    leftButton: {
        paddingHorizontal: 16,
        paddingVertical: 6,
        backgroundColor: "#000000",
        flexDirection: "row",
        justifyContent: "flex-end",
        borderWidth: 2
    },

    rightButton: {
        paddingHorizontal: 16,
        paddingVertical: 4,
        backgroundColor: "white",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "flex-end",
        borderWidth: 2,
        marginRight: 20,
    },

    buttonText: {
        textTransform: "uppercase",
        fontWeight: "bold",
        fontSize: 16,
        lineHeight: 18,
    },

    inactiveButton: {
        backgroundColor: "#FFFFFF",
        color: "#000000"
    },

    activeButton: {
        backgroundColor: "#000000",
        color: "#FFFFFF"
    },
});

export const activeButtonStyle = SwitchSelectorStyle.activeButton;
export const inactiveButtonStyle = SwitchSelectorStyle.inactiveButton;

export default SwitchSelectorStyle;