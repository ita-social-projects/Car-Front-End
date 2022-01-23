import { StyleSheet } from "react-native";
import Font from "../../data/fonts/Font";

const JourneyStartPageStyle = StyleSheet.create({
    page: {
        paddingHorizontal: 7,
        backgroundColor: "white",
    },

    manageJourneysWrapper: {
        paddingHorizontal: 7
    },

    tabsStyle: {
        flex: 1,
        alignSelf: "stretch"
    },

    segmentControlContainer: {
        height: 56,
        flexDirection: "row",
        paddingTop: 24,
        width: 450, // scrollview doesn't work with %
    },

    allJourneys: {
        justifyContent: "center",
        alignItems: "center",
        width: "10%",
        flexDirection:"row",
    },

    pastJourneys: {
        justifyContent: "center",
        alignItems: "center",
        width: "10%",
        flexDirection:"row",
    },

    upcomingJourneys: {
        justifyContent: "center",
        alignItems: "center",
        width: "20%",
        flexDirection:"row",
    },

    scheduledJourneys: {
        justifyContent: "center",
        alignItems: "center",
        width: "20%",
        flexDirection:"row",
    },

    requestedJourneys: {
        justifyContent: "center",
        alignItems: "center",
        width: "20%",
        flexDirection:"row",
    },

    canceledJourneys: {
        justifyContent: "center",
        alignItems: "center",
        width: "20%",
        flexDirection:"row",
    },

    buttonText: {
        textTransform: "uppercase",
        fontFamily: Font.Milliard.Milliard,
        fontWeight: "200",
    },

    manageJourneysContainer: {
        paddingTop: 40
    },

    manageJourneysText: {
        fontFamily: Font.ProximaNova.Black,
        fontWeight: "700",
        fontSize: 25,
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
        flex: 1
    },
});

export default JourneyStartPageStyle;
