import { StyleSheet } from "react-native";

const RemoveAddressButtonStyle = StyleSheet.create({
    wrapper: {
        justifyContent: "space-between",
        flexDirection: "row"
    },

    panelButton: {
        paddingHorizontal: 12,
        height: 44,
        justifyContent: "center",
        flexDirection: "column"
    },

    panelButtonTitle: {
        fontSize: 13,
        lineHeight: 42,
        fontWeight: "bold",
        alignItems: "center",
        paddingLeft: 10,
        color: "#EC6400"
    },

    container: {
        justifyContent: "center"
    }
});

export default RemoveAddressButtonStyle;
