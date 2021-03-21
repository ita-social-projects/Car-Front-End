import { StyleSheet } from "react-native";

const ChatStyle = StyleSheet.create({
    messageField: {
        flex: 1,
        width: "100%",
        height: "100%"
    },

    chatWrapper: {
        flex: 1,
        paddingBottom: 18
    },

    button: {
        width: 41,
        height: "100%",
        alignItems: "center",
        flexDirection: "column",
        justifyContent: "flex-end",
        paddingBottom: 10
    },
});

export default ChatStyle;
