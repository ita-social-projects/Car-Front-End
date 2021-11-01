import { StyleSheet } from "react-native";

export const SeatsInputSpinnerStyle = StyleSheet.create({
    container: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginRight: 18,
        marginLeft: -5,
        marginTop: 24
    },

    spinnerContainer: {
        borderColor: "#000000",
        borderWidth: 2,
        width: 145,
        borderRadius: 0
    },

    descriptionText: {
        marginLeft: 22,
        fontWeight: "bold"
    },

    input: {
        borderLeftWidth: 2,
        fontWeight: "bold",
        paddingHorizontal: 15
    }
});