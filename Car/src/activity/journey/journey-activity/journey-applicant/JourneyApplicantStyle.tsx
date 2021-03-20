import { StyleSheet } from "react-native";
import DM from "../../../../components/styles/DM";
import Font from "../../../../data/fonts/Font";

const JourneyApplicantStyle = StyleSheet.create({
    mainContainer: {
        flex: 1,
        backgroundColor: DM("#FFFFFF"),
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
        color: DM("black"),
        fontSize: 18,
        marginBottom: 8,
        fontWeight: "bold"
    },

    userAdditionalData: {
        lineHeight: 14,
        fontSize: 14,
        opacity: 0.5,
        color: DM("black"),
        fontFamily: Font.ProximaNova.Regular,
        marginBottom: 8
    },

    separator: {
        height: 1,
        backgroundColor: DM("#F2F2F2")
    },

    bottomContainer: {
        backgroundColor: DM("#FFFFFF"),
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
        color: DM("black")
    },

    positionText: {
        flex: 133,
        fontFamily: Font.OpenSans.Bold,
        fontWeight: "bold",
        fontSize: 13,
        color: DM("black"),
        paddingTop: 16
    },

    locationText: {
        flex: 133,
        fontFamily: Font.OpenSans.Bold,
        fontWeight: "bold",
        fontSize: 13,
        color: DM("black")
    },

    positionData: {
        flex: 194,
        fontFamily: Font.OpenSans.Bold,
        fontSize: 13,
        lineHeight: 18,
        color: DM("#414045"),
        paddingTop: 16
    },

    locationData: {
        flex: 194,
        fontFamily: Font.OpenSans.Bold,
        fontWeight: "bold",
        fontSize: 13,
        color: DM("#02A2CF")
    },

    whitespaceBlock: {
        height: 16
    }
});

export default JourneyApplicantStyle;
