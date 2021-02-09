import { Dimensions, StyleSheet } from "react-native";
import Font from "../../../../../components/fonts/Font";

const JourneyPageStyle = StyleSheet.create({
    container: {
        flex: 1
    },

    item: {
        padding: 20,
        marginVertical: 8,
        marginHorizontal: 16
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

    mainContainer: {
        backgroundColor: "white",
        height: Dimensions.get("window").height * 0.8
    },

    contentView: {
        width: "90%",
        alignSelf: "center"
    },

    userBlock: {
        flexDirection: "row",
        justifyContent: "space-around"
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
        marginBottom: 7,
        marginTop: 7
    },

    ellipsisButton: {
        alignItems: "flex-end",
        justifyContent: "center"
    },

    applicantsBlock: {
        marginTop: 15
    },

    applicantsHeader: {
        fontFamily: Font.ProximaNova.Bold,
        fontWeight: "bold",
        fontSize: 16,
        justifyContent: "flex-start",
        marginBottom: 10,
        marginTop: 10
    },

    stopsBlock: {
        width: "100%",
        justifyContent: "space-around",
        marginTop: 20,
        marginLeft: 10
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
        backgroundColor: "white"
    },

    buttonsBlock: {
        flexDirection: "row",
        justifyContent: "space-between"
    },

    messageAllButton: {
        backgroundColor: "white",
        borderColor: "black",
        borderWidth: 3,
        width: "40%"
    },

    messageAllButtonText: {
        color: "black",
        fontWeight: "700",
        textAlign: "center",
        height: 45,
        fontSize: 18,
        textAlignVertical: "center"
    },

    startJourneyButton: {
        backgroundColor: "black",
        width: "55%"
    },

    startJourneyButtonText: {
        color: "white",
        fontWeight: "700",
        textAlign: "center",
        height: 45,
        fontSize: 18,
        textAlignVertical: "center"
    }
});

export default JourneyPageStyle;
