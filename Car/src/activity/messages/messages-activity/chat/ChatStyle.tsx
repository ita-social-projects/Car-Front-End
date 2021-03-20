import { StyleSheet } from "react-native";
import DM from "../../../../components/styles/DM";

const ChatStyle = StyleSheet.create({
    messageField: {
        flex: 1,
        width: "100%",
        height: "100%"
    },

    chatWrapper: {
        flex: 1,
        backgroundColor: DM("white"),
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

    spinnerTextStyle: {
        color: DM("#414045")
    },
});

export default ChatStyle;
