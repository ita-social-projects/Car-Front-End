import { StyleSheet } from "react-native";
import DM from "../../../../../../components/styles/DM";
import Font from "../../../../../../data/fonts/Font";

const BadSearchResultStyle = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: DM("#FFFFFF")
    },

    textContainer: {
        paddingTop: 43,
        alignItems: "center",
        justifyContent: "center"
    },

    text: {
        fontFamily: Font.ProximaNova.Extrabold,
        fontSize: 16,
        fontWeight: "700",
        color: DM("#000000"),
        textTransform: "uppercase",
        textAlign: "center"
    },

    imageContainer: {
        flex: 1,
        paddingTop: 42,
        alignItems: "center"
    },

    image: {
        height: 200,
        width: 300
    },

    buttonText: {
        fontFamily: Font.ProximaNova.Extrabold,
        fontSize: 16,
        fontWeight: "700",
        color: DM("#FFFFFF"),
        textTransform: "uppercase"
    },

    buttonContainer: {
        justifyContent: "center",
        alignItems: "flex-end",
        paddingRight: 24,
        paddingBottom: 28
    },

    button: {
        height: 48,
        width: 248,
        backgroundColor: DM("#000000"),
        justifyContent: "center",
        alignItems: "center"
    }
});

export default BadSearchResultStyle;
