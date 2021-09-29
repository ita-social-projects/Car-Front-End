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
        width: 450, // scrollview doesn't work with %
    },

    allJourneys: {
        justifyContent: "center",
        alignItems: "center",
        width: "13%",
        flexDirection:"row",
    },

    pastJourneys: {
        justifyContent: "center",
        alignItems: "center",
        width: "13%",
        flexDirection:"row",
    },

    upcomingJourneys: {
        justifyContent: "center",
        alignItems: "center",
        width: "24%",
        flexDirection:"row",
    },

    scheduledJourneys: {
        justifyContent: "center",
        alignItems: "center",
        width: "20%",
        flexDirection:"row",
    },

    buttonText: {
        textTransform: "uppercase",
        fontFamily: Font.ProximaNova.ExtraBold,
        fontWeight: "300",
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

    activeButtonStyle: {
        backgroundColor: "#000000",
        color: "#FFFFFF",
        borderColor: "black"
    },

    inactiveButtonStyle: {
        backgroundColor: "#FFFFFF",
        color: "#000000",
        borderColor: "black"
    },

    scrollViewStyle:{
        width:"100%",
        //flex: 1
    },
});

export default JourneyStartPageStyle;
