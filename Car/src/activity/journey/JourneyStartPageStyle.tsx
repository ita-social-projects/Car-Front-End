import { StyleSheet } from "react-native";
import Font from "../../data/fonts/Font";

const JourneyStartPageStyle = StyleSheet.create({
    page: {
        paddingHorizontal: 14
    },

    tabsStyle: {
        flex: 1,
        alignSelf: "stretch"
    },

    segmentControlContainer: {
        height: 56,
        flexDirection: "row",
        paddingTop: 24,
        width: "100%",
        flex: 1
    },

    allJourneys: {
        justifyContent: "center",
        alignItems: "center",
        width: "23%",
    },

    pastJourneys: {
        justifyContent: "center",
        alignItems: "center",
        width: "23%",
    },

    upcomingJourneys: {
        justifyContent: "center",
        alignItems: "center",
        width: "23%",
    },

    scheduledJourneys: {
        justifyContent: "center",
        alignItems: "center",
        width: "23%",
    },

    buttonText: {
        textTransform: "uppercase",
        fontFamily: Font.ProximaNova.ExtraBold,
        fontWeight: "300"
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
    },

    scrollViewStyle:{
        width:"100%",
    },
});

export default JourneyStartPageStyle;
