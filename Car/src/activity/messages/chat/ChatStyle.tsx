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
        paddingBottom: 24
    },

    button: {
        width: 41,
        height: "100%",
        backgroundColor: "black",
        alignItems: "center",
        justifyContent: "center"
    },
});

export default ChatStyle;
