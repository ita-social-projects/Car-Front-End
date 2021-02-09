import { StyleSheet } from "react-native";

const SimpleMessageStyle = StyleSheet.create({
    container: {
        flex:1,
        backgroundColor: "#FFFFFF"
    },

    main: {
        display: "flex",
        flexDirection: "column",
        borderBottomWidth: 1,
        borderBottomColor: "#C1C1C5",
        height: 68,
        alignContent: "center",
        width: 344,
        alignSelf: "center"
    },
    button: {
        flexDirection: "row",
        justifyContent: "space-between",
        padding: 10
    },
    fonts: {
        fontFamily: "OpenSans-Italic",
        fontWeight: "bold",
        fontSize: 13
    },
    image: {
        width: 56,
        height: 56,
        borderRadius: 50,
        marginRight: 7,
        bottom: 5
    },
    lottie: {
        width: 100,
        height: 100
    },

    text: {
        fontSize: 11,
        paddingTop: 10,
        fontFamily: "sans-serif"
    }
});

export default SimpleMessageStyle;
