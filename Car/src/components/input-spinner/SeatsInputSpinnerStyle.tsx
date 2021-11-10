import { StyleSheet } from "react-native";

export const SeatsInputSpinnerStyle = StyleSheet.create({
    container: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginRight: 15,
        marginTop: 24
    },

    spinnerContainer: {
        borderColor: "#000000",
        borderWidth: 1,
        width: 143,
        borderRadius: 0,
    },

    descriptionText: {
        marginLeft: 16,
        fontWeight: "bold"
    },

    input: {
        borderLeftWidth: 1,
        fontWeight: "bold",
        paddingHorizontal: 15
    }
});