import { StyleSheet } from "react-native";
import Font from "../../../../../../data/fonts/Font";

const SendRequestModalStyle = StyleSheet.create({
    background: {
        flex: 1,
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "rgba(0, 0, 0, 0.6)"
    },

    window: {
        width: "90%",
        backgroundColor: "white",
        opacity: 1,
        borderRadius: 15,
        paddingTop: 10,
        paddingBottom: 30,
        paddingHorizontal: 20,
        justifyContent: "space-between"
    },

    title: {
        fontWeight: "bold",
        fontSize: 20,
        textAlign: "center"
    },

    commentsContainer: {
        paddingTop: 8,
    },

    commentsText: {
        fontFamily: Font.OpenSans.Bold,
        fontWeight: "700",
        paddingBottom: 4
    },

    chooseOptionContainer: {
        paddingVertical: 17,
    },

    confirmButtonText: {
        fontWeight: "700",
        fontSize: 18,
        textTransform: "uppercase",
    },

    confirmButton: {
        width: 150,
        borderWidth: 3,
        justifyContent: "center",
        alignItems: "center",
        height: 50,
        paddingHorizontal: 15
    },

    hintText: {
        paddingTop: 4,
        fontFamily: Font.OpenSans.Regular,
        fontSize: 13,
        lineHeight: 18,
    },

    textInput: {
        height: 80,
        borderWidth: 2,
        borderColor: "black",
        fontSize: 15,
        paddingLeft: 10,
        textAlignVertical: "top",
        fontFamily: Font.OpenSans.Regular,
    },

    closeButton: {
        width: 30,
        height: 25
    },

    closeButtonContainer: {
        alignItems: "flex-end"
    }
});

export default SendRequestModalStyle;