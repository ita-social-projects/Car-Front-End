import { StyleSheet } from "react-native";
import Font from "../../data/fonts/Font";

const JourneyStartPageStyle = StyleSheet.create({
    page: {
        paddingHorizontal: 15
    },

    tabsStyle: {
        flex: 1,
        alignSelf: "stretch"
    },

    segmentControlContainer: {
        height: 56,
        flexDirection: "row",
        paddingTop: 24,
        margin: -1,
    },

    allJourneys: {
        justifyContent: "center",
        alignItems: "center",
        borderWidth: 2,
        width: "25%",
    },

    pastJourneys: {
        justifyContent: "center",
        alignItems: "center",
        borderWidth: 2,
        width: "25%"
    },

    upcomingJourneys: {
        justifyContent: "center",
        alignItems: "center",
        borderWidth: 2,
        width: "25%"
    },

    scheduledJourneys: {
        justifyContent: "center",
        alignItems: "center",
        borderWidth: 2,
        width: "25%"
    },

    buttonText: {
        textTransform: "uppercase",
        fontFamily: Font.ProximaNova.ExtraBold,
        fontWeight: "700"
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
    },

    tabTextStyle: {
        flex: 1,
        fontFamily: Font.ProximaNova.Black,
        fontWeight: "700",
        fontSize: 14,
        textTransform: "uppercase",
        paddingBottom: 16
    }
});

export default JourneyStartPageStyle;
