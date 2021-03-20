import { StyleSheet } from "react-native";
import Font from "../../data/fonts/Font";
import DM from "../styles/DM";

const TouchableMapBarStyle = StyleSheet.create({
    container: {
        flexDirection: "row",
        borderWidth: 2.3,
        padding: 8,
        marginRight: 20,
        marginLeft: 20,
        backgroundColor: DM("white"),
        fontFamily: Font.OpenSans.Regular
    },

    insideText: {
        color: DM("#909095"),
        marginLeft: 5,
        fontSize: 17,
        fontFamily: Font.OpenSans.Regular
    },

    directionText: {
        color: DM("black"),
        fontSize: 18
    },

    textInputStyle: {
        paddingVertical: 8,
        fontSize: 17,
        color: DM("black"),
        lineHeight: 24,
        zIndex: 0
    },

    barIcon: {
        marginRight: 5,
        borderColor: DM("#EEEEEE")
    }
});

export default TouchableMapBarStyle;
