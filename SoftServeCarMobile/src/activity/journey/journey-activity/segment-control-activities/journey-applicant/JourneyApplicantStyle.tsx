import { StyleSheet } from "react-native";
import Font from "../../../../../components/fonts/Font";

export const JourneyApplicantStyle = StyleSheet.create({
    mainContainer: {
        flex: 1,
        backgroundColor: "#FFFFFF"
    },

    topContainer: {
        height: 116,
        paddingLeft: 20,
        paddingTop: 36,
        flexDirection: "row"
    },

    userAvatar: {
        width: 56,
        height: 56,
        borderRadius: 50,
        borderWidth: 3,
        borderColor: "#EEEEEE"
    },

    userInformation: {
        marginLeft: 15,
        fontFamily: Font.ProximaNova.Bold,
        fontWeight: "bold"
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

    buttonContainer: {
        alignItems: "flex-end",
        paddingRight: 17,
        paddingBottom: 24
    },

    button: {
        height: 36,
        width: 139,
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        borderColor: "#000000",
        borderWidth: 2,
        borderStyle: "solid"
    },

    buttonText: {
        fontFamily: Font.ProximaNova.ExtraBold,
        fontWeight: "700",
        fontSize: 16,
        lineHeight: 20,
        textTransform: "uppercase",
        color: "black",
        alignItems: "center",
        justifyContent: "center",
        paddingHorizontal: 5
    },

    separator: {
        height: 1,
        backgroundColor: "#F2F2F2"
    },

    bottomContainer: {
        backgroundColor: "#FFFFFF",
        paddingRight: 24,
        paddingLeft: 24,
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
    }
});
