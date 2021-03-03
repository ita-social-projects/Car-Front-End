import { StyleSheet } from "react-native";
import Font from "../../../../../../data/fonts/Font";

const TouchableMapBarStyle = StyleSheet.create({
    container: {
        flexDirection: "row",
        borderWidth: 2.3,
        padding: 8,
        marginRight: 20,
        marginLeft: 20,

        backgroundColor: "white",
        fontFamily: Font.OpenSans.Regular
    },

    insideText: {
        color: "#909095",
        marginLeft: 5,
        fontSize: 17,
        fontFamily: Font.OpenSans.Regular
    },

    directionText: {
        color: "black",
        fontSize: 18
    },

    textInputStyle: {
        paddingVertical: 8,
        fontSize: 17,
        lineHeight: 24,
        zIndex: 0
    },

    barIcon: {
        marginRight: 5,
        borderColor: "#EEEEEE"
    }
});

export default TouchableMapBarStyle;
