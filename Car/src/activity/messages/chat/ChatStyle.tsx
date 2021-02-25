import { StyleSheet } from "react-native";
import Font from "../../../data/fonts/Font";

const ChatStyle = StyleSheet.create({
    messageField: {
        flex: 1,
        width: "100%",
        height: "100%"
    },
    chatWrapper: {
        flex: 1,
        backgroundColor: "white",
        padding: 16,
        paddingBottom: 24
    },
    messageReceiver: {
        backgroundColor: "white",
        margin: 2,
        borderRadius: 8,
        borderBottomStartRadius: 0,
        padding: 8,
        minWidth: 50,
        maxWidth: 200
    },
    container: {
        width: "100%",
        flex: 1,
        justifyContent: "flex-end",
        alignItems: "center",
        marginBottom: 20,
        paddingLeft: 20
    },
    chatMessage: {
        fontFamily: Font.OpenSans.SemiBold,
        fontSize: 13,
        lineHeight: 18
    },
    buttonContainer: {
        display: "flex",
        alignItems: "center",
        margin: 5,
        flexDirection: "row",
        height: 40,
        justifyContent: "space-between",
        borderWidth: 2,
        borderColor: "#20232A",
        borderRadius: 4,
        width: "100%"
    },
    input: {
        padding: 10,
        width: "80%"
    },
    button: {
        width: 41,
        height: "100%",
        backgroundColor: "black",
        alignItems: "center",
        justifyContent: "center"
    },
    buttonText: {
        color: "white"
    },
    page: {
        flex: 1,
        backgroundColor: "#FFFFFF"
    }
});

export default ChatStyle;
