import { Dimensions, StyleSheet } from "react-native";
import Font from "../../../../data/fonts/Font";

const SearchJouneyStyle = StyleSheet.create({
    container: {
        zIndex: 150,
        backgroundColor: "#FAFAFA"
    },

    loadingContainer: {
        flex: 1,
    },

    recentJourneyText: {
        paddingBottom: 7,
        paddingLeft: 15,
        paddingTop: 8,
        paddingRight: 10,
        marginRight: 10,
        fontWeight: "bold",
        fontSize: 14,
        fontFamily: Font.OpenSans.Bold
    },

    spinner: {
        marginTop: 250
    },

    topInputContainer: {
        backgroundColor: "#FAFAFA",
        zIndex: 2000,
        borderBottomColor: "#C1C1C5",
        borderBottomWidth: 1
    },

    buttonsContainer: {
        flexDirection: "row",
        justifyContent: "space-around"
    },

    button: {
        width: 150
    },

    screenContainer: {
        width: "100%",
        height: "100%"
    },

    mapContainer: {
        position: "absolute",
        width: "100%",
        height: "100%"
    },

    insideContainer: {
        zIndex: 150
    },

    saveButtonContainer: {
        flexDirection: "row",
        justifyContent: "space-between"
    },

    confirmButton: {
        paddingHorizontal: 16,
        paddingVertical: 14,
        top: Dimensions.get("screen").height - 236,
        left: Dimensions.get("screen").width -121,
        position: "absolute",
        backgroundColor: "#000000",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-around"
    },

    confirmButtonSaveText: {
        color: "white",
        textTransform: "uppercase",
        fontWeight: "bold",
        fontSize: 16,
        lineHeight: 20
    }
});

export default SearchJouneyStyle;
