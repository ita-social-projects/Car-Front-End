import { StyleSheet } from "react-native";
import DM from "../../../../../../components/styles/DM";

const ChatSettingsStyle = StyleSheet.create({
    containert: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: DM("#FFFFFF"),
    },

    text: {
        color: DM("black")
    }
});

export default ChatSettingsStyle;