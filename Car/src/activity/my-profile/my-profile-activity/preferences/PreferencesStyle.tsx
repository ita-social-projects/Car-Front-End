import { StyleSheet } from "react-native";
import Font from "../../../../data/fonts/Font";

const PreferencesStyle = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 5,
        paddingHorizontal: 18
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
        paddingTop: 40
    },

    commentsText: {
        fontFamily: Font.OpenSans.Bold,
        fontWeight: "700",
        paddingBottom: 4
    },

    chooseOptionContainer: {
        paddingTop: 46,
    },

    textInput: {
        height: 80,
        borderWidth: 1,
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
