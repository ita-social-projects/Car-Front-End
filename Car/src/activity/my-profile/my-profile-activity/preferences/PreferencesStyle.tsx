import { StyleSheet } from "react-native";
import Font from "../../../../data/fonts/Font";

const PreferencesStyle = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 5,
    },

    whitespaceBlock: {
        height: 20
    },

    loadingContainer: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },

    commentsContainer: {
        paddingTop: 25,
    },

    commentsText: {
        fontFamily: Font.OpenSans.Bold,
        fontWeight: "700",
        paddingBottom: 4
    },

    chooseOptionContainer: {
        paddingVertical: 25,
        paddingHorizontal:16
    },

    textInput: {
        height: 80,
        borderWidth: 2,
        fontFamily: Font.OpenSans.Regular,
        fontSize: 16,
        lineHeight: 24,
        padding: 16,
        textAlignVertical: "top"
    },

    hintText: {
        paddingTop: 4,
        fontFamily: Font.OpenSans.Regular,
        fontSize: 13,
        lineHeight: 18,
    }
});

export default PreferencesStyle;
