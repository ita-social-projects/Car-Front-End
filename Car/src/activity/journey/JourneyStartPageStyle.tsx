import { StyleSheet } from "react-native";
import DM from "../../components/styles/DM";
import Font from "../../data/fonts/Font";

const JourneyStartPageStyle = StyleSheet.create({
    page: {
        backgroundColor: DM("white"),
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
        borderColor: DM("black"),
        borderWidth: 2,
        width: 54
    },

    pastJourneys: {
        justifyContent: "center",
        alignItems: "center",
        borderColor: DM("black"),
        borderWidth: 2,
        width: 62
    },

    upcomingJourneys: {
        justifyContent: "center",
        alignItems: "center",
        borderColor: DM("black"),
        borderWidth: 2,
        width: 98
    },

    scheduledJourneys: {
        justifyContent: "center",
        alignItems: "center",
        borderColor: DM("black"),
        borderWidth: 2,
        width: 103
    },

    buttonText: {
        textTransform: "uppercase",
        fontFamily: Font.ProximaNova.ExtraBold,
        color: DM("black"),
        fontWeight: "700"
    },

    unactiveButton: {
        backgroundColor: DM("#FFFFFF"),
        color: DM("#000000")
    },

    activeButton: {
        backgroundColor: DM("#000000"),
        color: DM("#FFFFFF")
    },

    manageJourneysContainer: {
        paddingTop: 40
    },

    manageJourneysText: {
        fontFamily: Font.ProximaNova.Black,
        color: DM("black"),
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
        color: DM("black"),
        fontSize: 14,
        textTransform: "uppercase",
        paddingBottom: 16
    }
});

export default JourneyStartPageStyle;
