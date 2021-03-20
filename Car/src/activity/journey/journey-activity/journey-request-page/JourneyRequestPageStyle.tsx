import { Dimensions, StyleSheet } from "react-native";
import DM from "../../../../components/styles/DM";
import Font from "../../../../data/fonts/Font";

const JourneyRequestPageStyle = StyleSheet.create({

    pageContainer: {
        flex: 1,
        backgroundColor: DM("#88FF88"),
        alignItems: "center"
    },

    pageText: {
        fontFamily: Font.ProximaNova.ExtraBold,
        color: DM("#000000"),
    },

    contentView: {
        width: "90%",
        alignSelf: "center"
    },

    bottomPopup: {
        backgroundColor: DM("white")
    },

    mainContainer: {
        backgroundColor: DM("white"),
        height: 400,
    },

    dateText: {
        fontSize: 13,
        color: DM("#02A2CF"),
        fontWeight: "700",
        fontFamily: Font.OpenSans.ExtraBold
    },

    separator: {
        backgroundColor: DM("#C1C1C5"),
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
        color: DM("#909095"),
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
        color: DM("black"),
        fontFamily: Font.OpenSans.Regular
    },

    TextInput: {
        height: 80,
        borderWidth: 2,
        borderColor: DM("black"),
        fontFamily: Font.OpenSans.Regular,
        fontSize: 16,
        lineHeight: 24,
        color: DM("#000000"),
        padding: 16,
        textAlignVertical: "top"
    },

    hintText: {
        paddingTop: 4,
        fontFamily: Font.OpenSans.Regular,
        fontSize: 13,
        lineHeight: 18,
        color: DM("#000000")
    },

    commentsContainer: {
        paddingTop: 8
    },

    commentsText: {
        fontFamily: Font.OpenSans.Bold,
        fontWeight: "700",
        color: DM("#414045"),
        paddingBottom: 4
    },

    chooseOptionContainer: {
        paddingTop: 17,
    },

    confirmButtonText: {
        color: DM("black"),
        fontWeight: "700",
        fontSize: 18,
        textTransform: "uppercase",
    },

    confirmButton: {
        backgroundColor: DM("white"),
        borderColor: DM("black"),
        borderWidth: 3,
        justifyContent: "center",
        alignItems: "center",
        height: 51,
        width: Dimensions.get("screen").width * 0.4
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