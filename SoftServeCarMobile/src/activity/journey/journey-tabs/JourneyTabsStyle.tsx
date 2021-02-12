import { StyleSheet } from "react-native";
import Font from "../../../data/fonts/Font";

const JourneyTabsStyle = StyleSheet.create({
    journeyPageIcon: {
        paddingRight: 12
    },

    requestButton: {
        paddingRight: 17,
        justifyContent: "center",
        alignItems: "center"
    },

    blackButtonText: {
        color: "black"
    },

    headerTitleStyle: {
        textAlign: "center",
        fontFamily: Font.ProximaNova.Bold,
        fontWeight: "700"
    },

    backButtonOpacity: {
        flexDirection: "row",
        justifyContent: "space-between"
    },

    backButtonTextView: {
        flexDirection: "column",
        justifyContent: "center"
    },

    buttonText: {
        color: "#02A2CF",
        fontFamily: Font.OpenSans.ExtraBold,
        fontSize: 20,
        fontWeight: "700"
    },

    moreOptionsIcon: {
        paddingRight: 12
    }
});

export default JourneyTabsStyle;
