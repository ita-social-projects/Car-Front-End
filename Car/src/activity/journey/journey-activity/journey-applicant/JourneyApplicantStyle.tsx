import { StyleSheet } from "react-native";
import Font from "../../../../data/fonts/Font";

const JourneyApplicantStyle = StyleSheet.create({
    mainContainer: {
        flex: 1,
        backgroundColor: "#FFFFFF",
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

    userAvatar: {
        width: 56,
        height: 56,
        borderRadius: 50,
        borderWidth: 3,
        borderColor: "#EEEEEE"
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
        height: 1,
        backgroundColor: "#F2F2F2"
    },

    bottomContainer: {
        backgroundColor: "#FFFFFF",
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
        fontSize: 18,
        color: "black"
    },

    positionText: {
        flex: 133,
        fontFamily: Font.OpenSans.Bold,
        fontWeight: "bold",
        fontSize: 13,
        color: "black",
        paddingTop: 16
    },

    locationText: {
        flex: 133,
        fontFamily: Font.OpenSans.Bold,
        fontWeight: "bold",
        fontSize: 13,
        color: "black"
    },

    positionData: {
        flex: 194,
        fontFamily: Font.OpenSans.Bold,
        fontSize: 13,
        lineHeight: 18,
        color: "#414045",
        paddingTop: 16
    },

    locationData: {
        flex: 194,
        fontFamily: Font.OpenSans.Bold,
        fontWeight: "bold",
        fontSize: 13,
        color: "#02A2CF"
    },

    whitespaceBlock: {
        height: 16
    }
});

export default JourneyApplicantStyle;
