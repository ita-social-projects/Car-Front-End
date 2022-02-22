import { StyleSheet } from "react-native";

const BadgeStyle = StyleSheet.create({
    text: {
        color: "#0B171B",
        fontFamily: "Open Sans",
        fontStyle: "normal",
        fontWeight: "bold",
        fontSize: 16,
        lineHeight: 18,
        textAlign: "center",
        marginBottom: 10,
        paddingTop: 10,
    },

    textContainer: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "flex-start",
        padding: 0,
        width: 400,
        height: 18,
        top: 16,
        paddingBottom: 5,
        alignSelf: "stretch",
    },

    container: {
        display: "flex",
        flexDirection: "column",
        paddingBottom: 16,
        paddingTop: 16,
        left: 8,
        right: 8,
        top: 145,
    }
});

export default BadgeStyle;
