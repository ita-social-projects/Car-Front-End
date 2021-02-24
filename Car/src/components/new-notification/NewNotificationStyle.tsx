import EStyleSheet from "react-native-extended-stylesheet";
import Font from "../../data/fonts/Font";

const NewNotificationStyle = EStyleSheet.create({
    content: {
        paddingLeft: 11.75,
        marginRight: 20
    },

    avatar: {},

    notificationContainer: {
        marginTop: "0.95rem",
        marginBottom: "0.95rem"
    },

    unread: {
        backgroundColor: "rgba(0,161,206,0.1)"
    },

    name: {
        color: "#02A2CF",
        fontFamily: Font.OpenSans.Bold,
        fontSize: "1rem"
    },

    title: {
        marginTop: "0.15rem",
        color: "#909095",
        fontFamily: Font.OpenSans.Regular,
        lineHeight: "1.1rem",
        fontSize: "0.825rem"
    },

    time: {},

    dateRead: {
        fontFamily: Font.OpenSans.Regular,
        color: "#909095",
        fontSize: "0.825rem",
        position: "absolute",
        top: "0.15rem",
        right: "-0.35rem",
        textAlign: "right"
    },

    dateUnread: {
        fontFamily: Font.OpenSans.Bold,
        color: "#02a2cf",
        fontSize: "0.825rem",
        position: "absolute",
        top: "0.15rem",
        right: "-0.35rem",
        textAlign: "right"
    },

    optionsLineRead: {
        minHeight: 7,
        minWidth: "97%",
        borderWidth: 1,
        borderTopColor: "rgba(0,0,0,0)",
        borderLeftColor: "rgba(0,0,0,0)",
        borderRightColor: "rgba(0,0,0,0)",
        borderBottomColor: "#C1C1C5",
        borderStyle: "solid",
        backgroundColor: "rgba(0,0,0,0)",
        marginLeft: "auto",
        marginRight: "auto"
    },

    optionsLineUnread: {
        minHeight: 7,
        minWidth: "97%",
        borderWidth: 1,
        borderTopColor: "rgba(0,0,0,0)",
        borderLeftColor: "rgba(0,0,0,0)",
        borderRightColor: "rgba(0,0,0,0)",
        borderBottomColor: "#02a2cf",
        borderStyle: "solid",
        backgroundColor: "rgba(0,0,0,0)",
        marginLeft: "auto",
        marginRight: "auto"
    },

    center: {
        alignItems: "center"
    }
});

export default NewNotificationStyle;
