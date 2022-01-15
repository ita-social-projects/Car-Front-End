import { Dimensions, StyleSheet } from "react-native";
import Font from "../../../../data/fonts/Font";

const SearchJourneyStyle = StyleSheet.create({
    container: {
        backgroundColor: "#F2F2F2",
    },

    locationContainer: {
        paddingTop: 16,
        paddingLeft: 16,
        paddingRight: 15
    },

    DepartureContainerLocation: {
        paddingTop: 16,
        paddingLeft: 16,
        paddingRight: 15
    },

    viaContainerLocation: {
        paddingLeft: 16,
        paddingRight: 15
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
        zIndex: 2000,
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
        height: "100%",
        paddingVertical: 20,
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
        left: Dimensions.get("screen").width - 121,
        position: "absolute",
        backgroundColor: "#000000",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-around"
    },

    confirmButtonSaveText: {
        textTransform: "uppercase",
        fontWeight: "bold",
        fontSize: 16,
        lineHeight: 20
    },

    publishButtonContainer: {
        alignItems: "flex-end",
        flexDirection: "row",
        justifyContent: "flex-end",
        flex: 1,
        height: "100%",
        top: 16,
    },

    publishButton: {
        marginRight: 15,
        marginBottom: 20,
        paddingHorizontal: 16,
        paddingVertical: 12,
        flexDirection: "row",
        borderWidth: 2,
    },
});

export default SearchJourneyStyle;
