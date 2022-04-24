import { Dimensions, StyleSheet } from "react-native";
import Font from "../../../../data/fonts/Font";

const JourneyPageStyle = StyleSheet.create({
    pageContainer: {
        flex: 1
    },

    lineBlock: {
        flexDirection: "row",
        flexWrap: "wrap",
        paddingLeft: 6
    },

    stopBlock: {
        flexDirection: "row",
        alignItems: "center"
    },

    pageText: {
        fontFamily: Font.ProximaNova.ExtraBold,
    },

    carContainer: {
        paddingTop: 22,
        paddingBottom: 20,
        flexDirection: "row"
    },

    carInfoContainer: {
        paddingLeft: 10,
    },

    taxiText: {
        fontWeight: "700",
        fontSize: 15,
        textAlignVertical: "center",
        height: 30
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
        borderRadius: 38.5
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
        height: 240,
    },

    headerTitleStyle: {
        paddingLeft: 24,
        paddingBottom: 21
    },

    headerTextStyle: {
        fontSize: 14,
        lineHeight: 16,
        fontWeight: "bold",
        textTransform: "uppercase",
        letterSpacing: 0.2,
        alignItems: "center"
    },

    View: {
        width: "100%",
        paddingHorizontal: "5%",
        alignSelf: "center",
    },

    detailsBlock: {
        height: 300
    },

    commentsLabel: {
        fontWeight: "bold"
    },

    userBlock: {
        flexDirection: "row",
        justifyContent: "space-around",
        paddingLeft: 2,
    },

    driverBlockWhiteSpace: {
        height: 15,
    },

    feeText: {
        fontSize: 11,
        lineHeight: 15,
        textAlign: "right"
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
        paddingLeft: "3%",
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
        fontSize: 11,
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
        fontFamily: "Milliard-Bold",
        fontStyle: "normal",
        fontWeight: "normal",
        fontSize: 14,
        justifyContent: "flex-start",
        marginBottom: 10,
        textTransform: "uppercase"
    },

    stopsBlock: {
        width: "95%",
        justifyContent: "space-around",
        marginTop: 20,
        paddingBottom: 15,
    },

    stopListItem: {
        flexDirection: "row",
    },

    addressInfo: {
        marginLeft: 10,
        flexShrink: 1
    },

    usersList: {
        marginTop: 4,
        marginLeft: 28
    },

    stopListItemRow: {
        flexDirection: "column",
    },

    stopCustomLineIcon: {
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
        //height: 51,
        //width: Dimensions.get("screen").width * 0.45
    },

    buttons: {
        width: "100%",
        paddingHorizontal: "5%",
    },

    messageAllButtonText: {
        fontWeight: "700",
        fontSize: 16,
        textTransform: "uppercase",
        paddingLeft:16,
        paddingTop:12,
        paddingBottom:12,
        paddingRight:16,
    },

    requestButton: {
        justifyContent: "center",
        alignItems: "center",
    },

    requestButtonText: {
        fontSize: 16,
        letterSpacing: 0.25,
        fontFamily: Font.Milliard.Bold,
        textTransform: "uppercase",
        paddingLeft:16,
        paddingTop:12,
        paddingBottom:12,
        paddingRight:16
    },

    journeyDetailBlock: {
        paddingRight: 16,
        flexDirection: "row",
        justifyContent: "space-between"
    },

    confirmationFormContainer: {
        paddingHorizontal: 15,
    },

    dropDownContainer:
    {
        marginBottom: 50,
        marginTop: 0
    },

    dropDown:{
        left: 0,
        right: 0,
        marginBottom: 100,
        position: "absolute",
    },

    chooseOptionContainer: {
        paddingVertical: 17,
    },

    confirmButtonText: {
        fontWeight: "700",
        fontSize: 16,
        textTransform: "uppercase",
    },

    confirmButton: {
        width: 159,
        borderWidth: 3,
        justifyContent: "center",
        alignItems: "center",
        height: 50,
        paddingHorizontal: 15,
        marginTop: 40
    },

    commentsBlockContainer:
    {
        paddingLeft: 0,
        paddingRight: 0
    }
});

export default JourneyPageStyle;
