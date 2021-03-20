import EStyleSheet from "react-native-extended-stylesheet";
import Font from "../../data/fonts/Font";
import DM from "../styles/DM";

const NewNotificationStyle = EStyleSheet.create({
    content: {
        width: "65%"
    },

    notificationContainer: {
        marginTop: "0.95rem",
        marginBottom: "0.95rem"
    },

    unread: {
        backgroundColor: DM("rgba(0,161,206,0.1)")
    },

    name: {
        color: DM("#02A2CF"),
        fontFamily: Font.OpenSans.Bold,
        fontSize: "1rem"
    },

    title: {
        marginTop: "0.15rem",
        color: DM("#909095"),
        fontFamily: Font.OpenSans.Regular,
        lineHeight: "1.1rem",
        fontSize: "0.825rem"
    },

    time: {
        paddingTop: 22,
        flex: 1,
        justifyContent: "flex-end",
        alignItems: "flex-end"
    },

    dateRead: {
        fontFamily: Font.OpenSans.Regular,
        color: DM("#909095"),
        fontSize: "0.825rem"
    },

    avatar: {
        paddingRight: 10.75,
    },

    dateUnread: {
        fontFamily: Font.OpenSans.Bold,
        color: DM("#02a2cf"),
        fontSize: "0.825rem"
    },

    optionsLineRead: {
        minHeight: 7,
        minWidth: "97%",
        borderWidth: 1,
        borderTopColor: DM("rgba(0,0,0,0)"),
        borderLeftColor: DM("rgba(0,0,0,0)"),
        borderRightColor: DM("rgba(0,0,0,0)"),
        borderBottomColor: DM("#C1C1C5"),
        borderStyle: "solid",
        backgroundColor: DM("rgba(0,0,0,0)"),
        marginLeft: "auto",
        marginRight: "auto"
    },

    optionsLineUnread: {
        minHeight: 7,
        minWidth: "97%",
        borderWidth: 1,
        borderTopColor: DM("rgba(0,0,0,0)"),
        borderLeftColor: DM("rgba(0,0,0,0)"),
        borderRightColor: DM("rgba(0,0,0,0)"),
        borderBottomColor: DM("#02a2cf"),
        borderStyle: "solid",
        backgroundColor: DM("rgba(0,0,0,0)"),
        marginLeft: "auto",
        marginRight: "auto"
    },

    center: {
        alignItems: "center"
    }
});

export default NewNotificationStyle;
