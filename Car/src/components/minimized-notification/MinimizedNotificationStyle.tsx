import EStyleSheet from "react-native-extended-stylesheet";
import Font from "../../data/fonts/Font";

const MinimizedNotification = EStyleSheet.create({
    content: {
        width: "65%"
    },

    notificationContainer: {
        marginTop: "0.95rem",
        marginBottom: "0.95rem"
    },

    name: {
        fontFamily: Font.OpenSans.Bold,
        fontSize: "1rem"
    },

    title: {
        marginTop: "0.15rem",
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
        fontSize: "0.825rem"
    },

    avatar: {
        paddingRight: 10.75,
    },

    dateUnread: {
        fontFamily: Font.OpenSans.Bold,
        fontSize: "0.825rem"
    },

    optionsLineRead: {
        minHeight: 7,
        minWidth: "97%",
        borderWidth: 1,
        borderStyle: "solid",
        marginLeft: "auto",
        marginRight: "auto"
    },

    optionsLineUnread: {
        minHeight: 7,
        minWidth: "97%",
        borderWidth: 1,
        borderStyle: "solid",
        marginLeft: "auto",
        marginRight: "auto"
    },

    center: {
        alignItems: "center"
    }
});

export default MinimizedNotification;
