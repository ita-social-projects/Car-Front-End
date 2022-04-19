import { Dimensions, StyleSheet } from "react-native";

const ChatStyle = StyleSheet.create({
    messageField: {
        flex: 1,
    },

    chatWrapper: {
        flex: 1,
        paddingBottom: 5,
        paddingHorizontal: 5
    },

    sendIcon: {
        width: 27,
        height: 27,
        borderRadius: 0,
        resizeMode: "contain"
    },

    button: {
        width: 41,
        height: "100%",
        alignItems: "center",
        flexDirection: "column",
        justifyContent: "flex-end",
        paddingBottom: 10
    },

    popupButtonsWrapper: {
        width: Dimensions.get("window").width,
    },
});

export default ChatStyle;
