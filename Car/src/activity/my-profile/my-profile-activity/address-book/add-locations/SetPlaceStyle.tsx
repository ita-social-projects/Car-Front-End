import { StyleSheet } from "react-native";
import Font from "../../../../../data/fonts/Font";

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
        backgroundColor: "white",
        fontFamily: Font.OpenSans.Regular
    },

    insideText: {
        color: "#909095",
        marginLeft: 5,
        fontSize: 17,
        fontFamily: Font.OpenSans.Regular
    },

    textInputStyle: {
        fontSize: 16,
        lineHeight: 24,
        zIndex: 0
    },

    errorText: {
        color: "red"
    }
});
export default SetPlaceStyle;
