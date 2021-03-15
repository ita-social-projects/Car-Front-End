import { StyleSheet } from "react-native";
import Font from "../../../../data/fonts/Font";

const PreferencesStyle = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 5,
        paddingHorizontal: 18,
        backgroundColor: "#FFFFFF"
    },

    whitespaceBlock: {
        height: 20
    },

    loadingContainer: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#FFFFFF"
    },

    commentsContainer: {
        paddingTop: 40
    },

    commentsText: {
        fontFamily: Font.OpenSans.Bold,
        fontWeight: "700",
        color: "#414045",
        paddingBottom: 4
    },

    chooseOptionContainer: {
        paddingTop: 46,
    },

    TextInput: {
        height: 80,
        borderWidth: 2,
        borderColor: "black",
        fontFamily: Font.OpenSans.Regular,
        fontSize: 16,
        lineHeight: 24,
        color: "#000000",
        padding: 16,
        textAlignVertical: "top"
    },

    hintText: {
        paddingTop: 4,
        fontFamily: Font.OpenSans.Regular,
        fontSize: 13,
        lineHeight: 18,
        color: "#000000"
    }
});

export default PreferencesStyle;
