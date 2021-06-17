import EStyleSheet from "react-native-extended-stylesheet";
import Font from "../../data/fonts/Font";
import { Platform } from "react-native";

const JourneyNewApplicantStyle = EStyleSheet.create({
    container: {
        flex: 1,
        borderWidth: 1,
        borderStyle: "solid",
        borderTopLeftRadius: 16,
        borderTopRightRadius: 16,
        borderBottomRightRadius: 16,
        borderBottomLeftRadius: 16,
        margin: 10,
        marginTop: Platform.OS === "ios" ? 52 : 32,
        marginBottom: 32,
        paddingTop: 23,
        paddingBottom: 23,
        paddingHorizontal: 25,
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
        height: "100%"
    },

    circleGrad: {
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
    },

    ellipse: {
        width: 100,
        height: 100
    },

    profile: {
        textAlign: "left",
        marginLeft: 10
    },

    name: {
        fontFamily: Font.ProximaNova.Bold,
        fontSize: "1.1rem",
        lineHeight: 21,
    },

    bio: {
        fontFamily: Font.ProximaNova.Regular,
        fontSize: "0.85rem",
        lineHeight: 14,
        opacity: 0.5,
        marginTop: "0.7rem"
    },

    achievements: {
        fontFamily: Font.ProximaNova.Regular,
        fontSize: 15,
        lineHeight: 14,
        opacity: 0.5,
        marginTop: "0.7rem"
    },

    commentsBox: {
        borderWidth: 1,
        borderStyle: "solid",
        marginTop: "1.5rem"
    },

    commentsBoxAfter: {
        position: "absolute",
        width: "1rem",
        height: "1rem",
        borderWidth: 1,
        borderStyle: "solid",
        top: "-0.5rem",
        left: "50%",
        marginLeft: "-1rem",
        transform: [{ rotateZ: "-135deg" }],
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
        borderStyle: "solid",
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
    },

    activeStopName: {
        textAlignVertical: "center", // ANDROID
        justifyContent: "center", // IOS
        flex: 1,
        fontFamily: Font.OpenSans.Bold,
        fontSize: "1rem",
        lineHeight: "1.1rem",
        paddingTop: "0.3rem" // Circle's Border Compensation
    },

    stopLine: {
        borderStyle: "dotted",
        position: "absolute",
        height: "2rem",
        top: "1.3rem",
        marginRight: "0.1435rem",
        borderLeftWidth: "0.1435rem",
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

    acceptButtonText: {
        fontFamily: Font.ProximaNova.Bold,
        fontSize: "1.1rem",
        letterSpacing: "0.05rem"
    },

    declineButtonText: {
        fontFamily: Font.ProximaNova.Bold,
        fontSize: "1.1rem",
        letterSpacing: "0.05rem"
    },

    applicantStopsText: {
        fontWeight: "bold",
        fontSize: 16,
        paddingTop: 15,
        paddingBottom: 5
    },

    tipsText: {
        color: "#717172"
    }
});

export default JourneyNewApplicantStyle;
