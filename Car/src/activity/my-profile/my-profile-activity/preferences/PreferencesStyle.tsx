import { StyleSheet } from "react-native";
import DM from "../../../../components/styles/DM";
import Font from "../../../../data/fonts/Font";

const PreferencesStyle = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 5,
        paddingHorizontal: 18,
        backgroundColor: DM("white"),
    },

    whitespaceBlock: {
        height: 20
    },

    loadingContainer: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor:  DM("white"),
    },

    commentsContainer: {
        paddingTop: 40
    },

    commentsText: {
        fontFamily: Font.OpenSans.Bold,
        fontWeight: "700",
        color: DM("#414045"),
        paddingBottom: 4
    },

    chooseOptionContainer: {
        paddingTop: 46,
    },

    TextInput: {
        height: 80,
        borderWidth: 2,
        borderColor: DM("black"),
        fontFamily: Font.OpenSans.Regular,
        fontSize: 16,
        lineHeight: 24,
        color: DM("black"),
        padding: 16,
        textAlignVertical: "top"
    },

    hintText: {
        paddingTop: 4,
        fontFamily: Font.OpenSans.Regular,
        fontSize: 13,
        lineHeight: 18,
        color: DM("black"),
    }
});

export default PreferencesStyle;
