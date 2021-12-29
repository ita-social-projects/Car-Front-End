import { StyleSheet } from "react-native";

const HeaderLeaveButtonStyle = StyleSheet.create({
    leaveButton: {
        paddingHorizontal: 12,
        height: 44,
        justifyContent: "center",
    },

    leaveButtonTextContainer: {
        justifyContent: "center"
    },

    leaveButtonText: {
        fontSize: 20,
        lineHeight: 40,
        fontWeight: "bold",
        alignItems: "center",
        paddingLeft: 20,
        color: "#EC6400"
    },
});

export default HeaderLeaveButtonStyle;