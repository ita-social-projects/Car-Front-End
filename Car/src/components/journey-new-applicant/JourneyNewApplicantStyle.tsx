import EStyleSheet from "react-native-extended-stylesheet";
import Font from "../../data/fonts/Font";
import { Platform } from "react-native";
import DM from "../styles/DM";

const JourneyNewApplicantStyle = EStyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: DM("#FFFFFF"),
        borderWidth: 1,
        borderColor: DM("rgba(151, 151, 151, 0.233556)"),
        borderStyle: "solid",
        borderTopLeftRadius: 16,
        borderTopRightRadius: 16,
        borderBottomRightRadius: 16,
        borderBottomLeftRadius: 16,
        margin: 10,
        marginTop: Platform.OS === "ios" ? 52 : 0,
        marginBottom: 32,
        paddingTop: 23,
        paddingBottom: 23,
        paddingHorizontal: 25,
        shadowColor: DM("#414045"),
        shadowOffset: { width: 0, height: 16 },
        shadowOpacity: 0.2,
        shadowRadius: 6.27,
        elevation: 10
    },

    headerContainer: {
        width: "50%"
    },

    profileContainer: {
        width: "80%"
    },

    body: {
        backgroundColor: DM("rgba(0, 0, 0, 0.5)"),
        height: "100%"
    },

    circle: {
        backgroundColor: DM("#A5C500"),
        borderRadius: 90,
        height: 57,
        width: 57,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        marginTop: 5
    },

    circleGrad: {
        backgroundColor: DM("#FFFFFF"),
        borderRadius: 90,
        height: "0.8rem",
        width: "0.8rem",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        zIndex: 5
    },

    row: {
        flex: 0,
        flexDirection: "row",
        flexWrap: "wrap",
        alignItems: "flex-start"
    },

    title: {
        marginTop: 32
    },

    header: {
        fontFamily: Font.ProximaNova.Bold,
        fontSize: "1rem",
        lineHeight: 16,
        display: "flex",
        alignItems: "center",
        letterSpacing: 0.2,
        textTransform: "uppercase",
        color: DM("#000000")
    },

    snooze: {
        fontFamily: Font.ProximaNova.Bold,
        fontSize: "1rem",
        lineHeight: 16,
        display: "flex",
        alignItems: "center",
        textAlign: "right",
        letterSpacing: 0.875,
        textTransform: "capitalize",
        color: DM("#02A2CF")
    },

    ellipse: {
        width: 100,
        height: 100
    },

    icon: {
        fontFamily: Font.OpenSans.Bold,
        fontSize: "0.9375rem",
        lineHeight: 16,
        display: "flex",
        alignItems: "center",
        textAlign: "center",
        textTransform: "uppercase",
        color: DM("#FFFFFF")
    },

    profile: {
        textAlign: "left",
        marginLeft: 10
    },

    name: {
        fontFamily: Font.ProximaNova.Bold,
        fontSize: "1.1rem",
        lineHeight: 21,
        color: DM("#000000")
    },

    bio: {
        fontFamily: Font.ProximaNova.Regular,
        fontSize: "0.85rem",
        lineHeight: 14,
        color: DM("#000000"),
        opacity: 0.5,
        marginTop: "0.7rem"
    },

    achievements: {
        fontFamily: Font.ProximaNova.Regular,
        fontSize: 15,
        lineHeight: 14,
        color: DM("#000000"),
        opacity: 0.5,
        marginTop: "0.7rem"
    },

    more: {
        fontFamily: Font.OpenSans.ExtraBold,
        fontSize: 20,
        letterSpacing: 3,
        marginTop: -10,
        paddingTop: 0,
        color: DM("#000000")
    },

    commentsBox: {
        borderWidth: 1,
        borderColor: DM("rgba(151, 151, 151, 0.3)"),
        borderStyle: "solid",
        backgroundColor: DM("#FFFFFF"),
        marginTop: "1.5rem"
    },

    commentsBoxAfter: {
        position: "absolute",
        width: "1rem",
        height: "1rem",
        borderWidth: 1,
        borderStyle: "solid",
        borderTopColor: DM("rgba(0,0,0,0)"),
        borderLeftColor: DM("rgba(0,0,0,0)"),
        borderRightColor: DM("rgba(151, 151, 151, 0.3)"),
        borderBottomColor: DM("rgba(151, 151, 151, 0.3)"),
        top: "-0.5rem",
        left: "50%",
        marginLeft: "-1rem",
        transform: [{ rotateZ: "-135deg" }],
        backgroundColor: DM("#FFFFFF"),
        opacity: 1
    },

    commentsText: {
        margin: "1.5rem",
        textAlign: "center",
        fontFamily: Font.ProximaNova.Regular,
        fontSize: "1.2rem",
        paddingLeft: "1rem",
        paddingRight: "1rem"
    },

    options: {
        marginTop: "1.5rem"
    },

    optionsHeader: {
        fontFamily: Font.OpenSans.Bold,
        lineHeight: "1.1rem",
        fontSize: "1rem"
    },

    optionsValue: {
        fontFamily: Font.OpenSans.Regular,
        lineHeight: "1.2rem",
        fontSize: "1rem",
        marginTop: "0.5rem"
    },

    optionsLine: {
        minHeight: 7,
        minWidth: "99%",
        borderWidth: 1,
        borderTopColor: DM("rgba(0,0,0,0)"),
        borderLeftColor: DM("rgba(0,0,0,0)"),
        borderRightColor: DM("rgba(0,0,0,0)"),
        borderBottomColor: DM("#C1C1C5"),
        borderStyle: "solid",
        backgroundColor: DM("#FFFFFF"),
        marginLeft: "auto",
        marginRight: "auto"
    },

    stopsHeader: {
        fontFamily: Font.OpenSans.Bold,
        lineHeight: "1.1rem",
        fontSize: "1rem"
    },

    stops: {
        marginTop: "1.1rem"
    },

    stop: {
        minHeight: "2rem"
    },

    stopName: {
        textAlignVertical: "center", // ANDROID
        justifyContent: "center", // IOS
        flex: 1,
        fontFamily: Font.OpenSans.Regular,
        fontSize: "1rem",
        lineHeight: "1.1rem",
        color: DM("#909095")
    },

    activeStopName: {
        textAlignVertical: "center", // ANDROID
        justifyContent: "center", // IOS
        flex: 1,
        fontFamily: Font.OpenSans.Bold,
        fontSize: "1rem",
        lineHeight: "1.1rem",
        color: DM("#909095"),
        paddingTop: "0.3rem" // Circle's Border Compensation
    },

    stopLine: {
        borderStyle: "dotted",
        position: "absolute",
        height: "2rem",
        top: "1.3rem",
        marginRight: "0.1435rem",
        borderLeftWidth: "0.1435rem",
        borderColor: DM("#C1C1C5")
    },

    stopsRows: {
        marginTop: "0.6rem"
    },

    tripColumn: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        width: "5%"
    },

    tripPoint: {
        paddingLeft: "0.6rem",
        width: "95%"
    },

    buttons: {
        flex: 1,
        justifyContent: "flex-end"
    },

    button: {
        height: "3.75rem",
        width: "100%",
        justifyContent: "center",
        alignItems: "center"
    },

    acceptButton: {
        backgroundColor: DM("black")
    },

    acceptButtonText: {
        color: DM("white"),
        fontFamily: Font.ProximaNova.Bold,
        fontSize: "1.1rem",
        letterSpacing: "0.05rem"
    },

    declineButtonText: {
        color: DM("#EC6400"),
        fontFamily: Font.ProximaNova.Bold,
        fontSize: "1.1rem",
        letterSpacing: "0.05rem"
    }
});

export default JourneyNewApplicantStyle;
