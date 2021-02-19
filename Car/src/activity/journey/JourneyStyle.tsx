import { StyleSheet } from "react-native";
import Font from "../../data/fonts/Font";

const JourneyStyle = StyleSheet.create({
    page: {
        backgroundColor: "white",
        paddingHorizontal: 15
    },

    tabsStyle: {
        flex: 1,
        alignSelf: "stretch"
    },

    segmentControlContainer: {
        height: 56,
        flexDirection: "row",
        paddingTop: 24
    },

    allJourneys: {
        justifyContent: "center",
        alignItems: "center",
        borderColor: "black",
        borderWidth: 2,
        width: 54
    },

    pastJourneys: {
        justifyContent: "center",
        alignItems: "center",
        borderColor: "black",
        borderWidth: 2,
        width: 62
    },

    upcomingJourneys: {
        justifyContent: "center",
        alignItems: "center",
        borderColor: "black",
        borderWidth: 2,
        width: 98
    },

    scheduledJourneys: {
        justifyContent: "center",
        alignItems: "center",
        borderColor: "black",
        borderWidth: 2,
        width: 103
    },

    buttonText: {
        textTransform: "uppercase",
        fontFamily: Font.ProximaNova.ExtraBold,
        fontWeight: "700"
    },

    unactiveButton: {
        backgroundColor: "#FFFFFF",
        color: "#000000"
    },

    activeButton: {
        backgroundColor: "#000000",
        color: "#FFFFFF"
    },

    manageJourneysContainer: {
        paddingTop: 40
    },

    manageJourneysText: {
        fontFamily: Font.ProximaNova.Black,
        fontWeight: "700",
        fontSize: 20,
        textTransform: "uppercase"
    },

    touchableNavigationBlocks: {
        paddingTop: 16
    },

    tabStyle: {
        paddingTop: 24
    }
});

export default JourneyStyle;
