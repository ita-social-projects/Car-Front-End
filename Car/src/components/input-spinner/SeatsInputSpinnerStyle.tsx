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
        paddingVertical: 6,
        fontSize:16,
        lineHeight: 18,
    },

    button: {
        width:50,
        paddingVertical: 6,
        alignItems: "center",
        backgroundColor:"#414045"
    }
});