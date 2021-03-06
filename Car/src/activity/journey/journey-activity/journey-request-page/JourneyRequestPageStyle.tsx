import { Dimensions, StyleSheet } from "react-native";
import Font from "../../../../data/fonts/Font";

const JourneyRequestPageStyle = StyleSheet.create({

    pageContainer: {
        flex: 1,
        alignItems: "center"
    },

    pageText: {
        fontFamily: Font.ProximaNova.ExtraBold,
    },

    contentView: {
        width: "90%",
        alignSelf: "center"
    },

    lining: {
        position: "absolute",
        top: -10,
        height: 100,
        width: Dimensions.get("screen").width,
        zIndex: -1
    },

    driverBlockWhiteSpace: {
        height: 27,
    },

    mainContainer: {
        height: 400,
    },

    dateText: {
        fontSize: 13,
        fontWeight: "700",
        fontFamily: Font.OpenSans.ExtraBold
    },

    separator: {
        height: 1,
        width: "100%",
        marginBottom: 7,
        marginTop: 7
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

    textInput: {
        height: 80,
        borderWidth: 2,
        borderColor: "black",
        fontSize: 15,
        paddingLeft: 10,
        textAlignVertical: "top",
        // height: 80,
        // borderWidth: 2,
        fontFamily: Font.OpenSans.Regular,
        // fontSize: 16,
        // lineHeight: 24,
        // paddingHorizontal: 16,
        // textAlignVertical: "top"
    },

    hintText: {
        paddingTop: 4,
        fontFamily: Font.OpenSans.Regular,
        fontSize: 13,
        lineHeight: 18,
    },

    commentsContainer: {
        paddingTop: 8,
        paddingHorizontal: 15
    },

    commentsText: {
        fontFamily: Font.OpenSans.Bold,
        fontWeight: "700",
        paddingBottom: 4
    },

    chooseOptionContainer: {
        paddingVertical: 17,
        paddingHorizontal: 15
    },

    confirmButtonText: {
        fontWeight: "700",
        fontSize: 18,
        textTransform: "uppercase",
    },

    confirmButton: {
        borderWidth: 3,
        justifyContent: "center",
        alignItems: "center",
        height: 50,
        paddingHorizontal: 15
    },

    pressedButton: {
        opacity: 0.2,
    },

    buttonBlock: {
        flexDirection: "row",
        justifyContent: "flex-end",
        marginTop: 20,
        marginBottom: 10,
    },
});

export default JourneyRequestPageStyle;