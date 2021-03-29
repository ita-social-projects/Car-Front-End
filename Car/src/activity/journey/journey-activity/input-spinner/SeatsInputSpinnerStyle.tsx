import { StyleSheet } from "react-native";

export const SeatsInputSpinnerStyle = StyleSheet.create({
    container: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginRight: 20,
        marginTop: 16
    },

    spinnerContainer: {
        borderColor: "#000000",
        borderWidth: 2,
        width: "100%",
        borderRadius: 0
    },

    descriptionText: {
        marginLeft: 22,
        fontWeight: "bold"
    }
});