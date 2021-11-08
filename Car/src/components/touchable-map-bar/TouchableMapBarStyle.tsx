import { StyleSheet } from "react-native";
import Font from "../../data/fonts/Font";

const TouchableMapBarStyle = StyleSheet.create({
    container: {
        flexDirection: "row",
        borderWidth: 1,
        padding: 10,
        fontFamily: Font.OpenSans.Regular
    },

    insideText: {
        marginLeft: 5,
        fontSize: 17,
        fontFamily: Font.OpenSans.Regular
    },

    directionText: {
        fontSize: 18
    },

    barIcon: {
        marginRight: 5,
    }
});

export default TouchableMapBarStyle;
