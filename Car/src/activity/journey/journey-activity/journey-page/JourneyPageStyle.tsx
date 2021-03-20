import { Dimensions, StyleSheet } from "react-native";
import Font from "../../../../data/fonts/Font";

const JourneyPageStyle = StyleSheet.create({
    pageContainer: {
        flex: 1,
        backgroundColor: "#88FF88",
        alignItems: "center"
    },

    pageText: {
        fontFamily: Font.ProximaNova.ExtraBold,
        color: "#000000",
    },

    loadingContainer: {
        height: 500,
        backgroundColor: "#FFFFFF",
        justifyContent: "center",
        alignItems: "center"
    },

    carContainer: {
        paddingTop: 22,
        paddingLeft: 16,
        flexDirection: "row"
    },

    carInfoContainer: {
        paddingLeft: 10,
    },

    carName: {
        color: "#000000",
        fontFamily: Font.OpenSans.Bold,
        fontSize: 13,
        lineHeight: 16,
        paddingBottom: 4,
        paddingTop: 1.25,
    },

    carPlateNumber: {
        color: "#414045",
        fontFamily: Font.OpenSans.Regular,
        fontSize: 11,
        lineHeight: 16,
    },

    carAvatar: {
        width: 38.5,
        height: 38.5,
        borderRadius: 38.5,
    },

    carAvatarContainer: {
        width: 36,
        height: 36,
        alignItems: "center",
        justifyContent: "center"

    },

    applicant: {
        flexDirection: "row",
        justifyContent: "space-around",
        paddingVertical: 14.75
    },

    title: {
        fontSize: 32
    },

    panelContainer: {
        position: "absolute",
        top: 0,
        bottom: 0,
        left: 0,
        right: 0
    },

    panel: {
        height: 200,
        backgroundColor: "white"
    },

    headerTitleStyle: {
        paddingLeft: 24,
        paddingBottom: 20,
        backgroundColor: "white"
    },

    headerTextStyle: {
        fontSize: 14,
        lineHeight: 16,
        fontWeight: "bold",
        textTransform: "uppercase",
        letterSpacing: 0.2,
        alignItems: "center"
    },

    contentView: {
        width: "100%",
        paddingHorizontal: "5%",
        alignSelf: "center",
        backgroundColor: "white",
    },

    userBlock: {
        flexDirection: "row",
        justifyContent: "space-around",
        paddingLeft: 2,
    },

    driverBlockWhiteSpace: {
        height: 27,
    },

    userImageBlock: {
        alignItems: "flex-start",
        justifyContent: "space-around",
        margin: 7,
        marginLeft: 13
    },

    userImage: {
        width: 40,
        height: 40,
        borderRadius: 20
    },

    userInfoBlock: {
        flexDirection: "column",
        justifyContent: "space-around",
        flex: 5
    },

    userNameText: {
        fontSize: 15,
        fontWeight: "700",
        fontFamily: Font.OpenSans.Regular
    },

    applicantNameText: {
        fontSize: 15,
        fontWeight: "700",
        fontFamily: Font.OpenSans.ExtraBold,
        color: "#00A3CF"
    },

    userSecondaryInfoBlock: {
        flexDirection: "row",
        justifyContent: "space-between"
    },

    userRoleText: {
        fontSize: 13,
        color: "#909095",
        fontWeight: "100",
        fontFamily: Font.OpenSans.Regular
    },

    dateText: {
        fontSize: 13,
        color: "#02A2CF",
        fontWeight: "700",
        fontFamily: Font.OpenSans.ExtraBold
    },

    separator: {
        backgroundColor: "#C1C1C5",
        height: 1,
        width: "100%",
    },

    ellipsisButton: {
        alignItems: "flex-end",
        justifyContent: "center"
    },

    applicantsHeader: {
        fontFamily: Font.ProximaNova.Bold,
        fontWeight: "bold",
        fontSize: 16,
        justifyContent: "flex-start",
        marginBottom: 10,
    },

    stopsBlock: {
        width: "100%",
        justifyContent: "space-around",
        marginTop: 20,
        marginLeft: 14,
        paddingBottom: 30,
    },

    stopListItem: {
        flexDirection: "row"
    },

    stopListItemRow: {
        flexDirection: "column",
        alignItems: "center"
    },

    stopCustomLineIcon: {
        backgroundColor: "#AAA9AE",
        height: 12,
        width: 2
    },

    bottomPopup: {
        backgroundColor: "white",
    },

    buttonsBlock: {
        flexDirection: "row",
        justifyContent: "flex-end",
        marginTop: 16,
        marginBottom: 16,
    },

    messageAllButton: {
        backgroundColor: "white",
        borderColor: "black",
        borderWidth: 3,
        justifyContent: "center",
        alignItems: "center",
        height: 51,
        width: Dimensions.get("screen").width * 0.4
    },

    buttons: {
        position: "absolute",
        width: Dimensions.get("window").width,
        backgroundColor: "#FFFFFF",
        top: 411,
        paddingHorizontal: "5%"
    },

    messageAllButtonText: {
        color: "black",
        fontWeight: "700",
        fontSize: 18,
        textTransform: "uppercase",
    },

    startJourneyButton: {
        backgroundColor: "black",
        width: Dimensions.get("screen").width * 0.465,
        justifyContent: "center",
        alignItems: "center",
        height: 51,
        marginLeft: Dimensions.get("screen").width * 0.045,
    },

    startJourneyButtonText: {
        color: "white",
        fontWeight: "700",
        fontSize: 18,
        textTransform: "uppercase"
    },

    requestButton: {
        backgroundColor: "black",
        width: Dimensions.get("screen").width * 0.515,
        justifyContent: "center",
        alignItems: "center",
        height: 51,
    },

    requestButtonText: {
        color: "white",
        fontWeight: "700",
        fontSize: 18,
        textTransform: "uppercase"
    },

    pressedButton: {
        opacity: 0.2
    },

    scrollBlock: {
        height: 336
    },
});

export default JourneyPageStyle;
