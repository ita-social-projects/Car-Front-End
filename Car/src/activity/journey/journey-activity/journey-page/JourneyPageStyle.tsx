import { Dimensions, StyleSheet } from "react-native";
import Font from "../../../../data/fonts/Font";

const JourneyPageStyle = StyleSheet.create({
    pageContainer: {
        flex: 1,
        alignItems: "center"
    },

    pageText: {
        fontFamily: Font.ProximaNova.ExtraBold,
    },

    carContainer: {
        paddingTop: 22,
        paddingLeft: 16,
        flexDirection: "row"
    },

    carInfoContainer: {
        paddingLeft: 10,
    },

    lining: {
        position: "absolute",
        top: -10,
        height: 100,
        width: Dimensions.get("screen").width,
        zIndex: -1
    },

    carName: {
        fontFamily: Font.OpenSans.Bold,
        fontSize: 13,
        lineHeight: 16,
        paddingBottom: 4,
        paddingTop: 1.25,
    },

    carPlateNumber: {
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

    panel: {
        height: 200,
    },

    headerTitleStyle: {
        paddingLeft: 24,
        paddingBottom: 20
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
        fontFamily: Font.OpenSans.ExtraBold
    },

    userSecondaryInfoBlock: {
        flexDirection: "row",
        justifyContent: "space-between"
    },

    userRoleText: {
        fontSize: 13,
        fontWeight: "100",
        fontFamily: Font.OpenSans.Regular
    },

    dateText: {
        fontSize: 13,
        fontWeight: "700",
        fontFamily: Font.OpenSans.ExtraBold
    },

    separator: {
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
        height: 12,
        width: 2
    },

    buttonsBlock: {
        flexDirection: "row",
        justifyContent: "flex-end",
        marginTop: 16,
        marginBottom: 16,
    },

    messageAllButton: {
        borderWidth: 3,
        justifyContent: "center",
        alignItems: "center",
        height: 51,
        width: Dimensions.get("screen").width * 0.45
    },

    buttons: {
        position: "absolute",
        width: Dimensions.get("window").width,
        top: 411,
        paddingHorizontal: "5%"
    },

    messageAllButtonText: {
        fontWeight: "700",
        fontSize: 18,
        textTransform: "uppercase",
    },

    requestButton: {
        width: Dimensions.get("screen").width * 0.45,
        justifyContent: "center",
        alignItems: "center",
        height: 51,
    },

    requestButtonText: {
        fontWeight: "700",
        fontSize: 18,
        textTransform: "uppercase"
    },
});

export default JourneyPageStyle;
