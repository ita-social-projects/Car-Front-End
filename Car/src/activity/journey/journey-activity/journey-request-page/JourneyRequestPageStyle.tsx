import { Dimensions, StyleSheet } from "react-native";
import Font from "../../../../data/fonts/Font";

const JourneyRequestPageStyle = StyleSheet.create({

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
        height: 300,
        backgroundColor: "#FFFFFF",
        justifyContent: "center",
        alignItems: "center"
    },

    contentView: {
        width: "90%",
        alignSelf: "center"
    },

    bottomPopup: {
        backgroundColor: "white"
    },

    mainContainer: {
        backgroundColor: "white",
        height: 400,
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

    TextInput: {
        height: 80,
        borderWidth: 2,
        borderColor: "black",
        fontFamily: Font.OpenSans.Regular,
        fontSize: 16,
        lineHeight: 24,
        color: "#000000",
        padding: 16,
        textAlignVertical: "top"
    },

    hintText: {
        paddingTop: 4,
        fontFamily: Font.OpenSans.Regular,
        fontSize: 13,
        lineHeight: 18,
        color: "#000000"
    },

    commentsContainer: {
        paddingTop: 8
    },

    commentsText: {
        fontFamily: Font.OpenSans.Bold,
        fontWeight: "700",
        color: "#414045",
        paddingBottom: 4
    },

    chooseOptionContainer: {
        paddingTop: 17,
    },

    confirmButtonText: {
        color: "black",
        fontWeight: "700",
        fontSize: 18,
        textTransform: "uppercase",
    },

    confirmButton: {
        backgroundColor: "white",
        borderColor: "black",
        borderWidth: 3,
        justifyContent: "center",
        alignItems: "center",
        height: 51,
        width: Dimensions.get("screen").width * 0.4
    },

    buttonBlock: {
        flexDirection: "row",
        justifyContent: "flex-end",
        marginTop: 20,
        marginBottom: 10,
    },
});

export default JourneyRequestPageStyle;