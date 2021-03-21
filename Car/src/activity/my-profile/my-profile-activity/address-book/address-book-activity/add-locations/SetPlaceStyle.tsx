import { StyleSheet } from "react-native";
import Font from "../../../../../../data/fonts/Font";

const SetPlaceStyle = StyleSheet.create({
    globalContainer: {
        width: "100%",
        height: "100%"
    },

    mapContainer: {
        position: "absolute",
        width: "100%",
        height: "100%",
        zIndex: 100
    },

    map: {
        flex: 1
    },

    container: {
        zIndex: 200,
        flexDirection: "row",
        borderWidth: 2.3,
        marginRight: 100,
        marginLeft: 20,
        paddingLeft: 100,
        fontFamily: Font.OpenSans.Regular
    },

    insideText: {
        marginLeft: 5,
        fontSize: 17,
        fontFamily: Font.OpenSans.Regular
    },
});

export default SetPlaceStyle;
