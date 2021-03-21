import { StyleSheet } from "react-native";
import Font from "../../../../data/fonts/Font";

const JourneyApplicantStyle = StyleSheet.create({
    mainContainer: {
        flex: 1,
        paddingHorizontal: 23,
        paddingTop: 22.5,
    },

    topContainer: {
        height: 116,
        flexDirection: "row"
    },

    avatarContainer: {
        paddingBottom: 23.5,
        alignItems: "center",
        justifyContent: "center",
    },

    userName: {
        lineHeight: 21,
        fontFamily: Font.ProximaNova.Bold,
        fontSize: 18,
        marginBottom: 8,
        fontWeight: "bold"
    },

    userAdditionalData: {
        lineHeight: 14,
        fontSize: 14,
        opacity: 0.5,
        fontFamily: Font.ProximaNova.Regular,
        marginBottom: 8
    },

    separator: {
        height: 1
    },

    bottomContainer: {
        paddingTop: 13
    },

    positionContainer: {
        flexDirection: "row",
        paddingBottom: 16
    },

    locationContainer: {
        flexDirection: "row"
    },

    detailsText: {
        fontFamily: Font.OpenSans.Bold,
        fontWeight: "bold",
        fontSize: 18
    },

    positionText: {
        flex: 133,
        fontFamily: Font.OpenSans.Bold,
        fontWeight: "bold",
        fontSize: 13,
        paddingTop: 16
    },

    locationText: {
        flex: 133,
        fontFamily: Font.OpenSans.Bold,
        fontWeight: "bold",
        fontSize: 13,
    },

    positionData: {
        flex: 194,
        fontFamily: Font.OpenSans.Bold,
        fontSize: 13,
        lineHeight: 18,
        paddingTop: 16
    },

    locationData: {
        flex: 194,
        fontFamily: Font.OpenSans.Bold,
        fontWeight: "bold",
        fontSize: 13
    },

    whitespaceBlock: {
        height: 16
    }
});

export default JourneyApplicantStyle;
