import EStyleSheet from "react-native-extended-stylesheet";
import Font from "../../../data/fonts/Font";

const NotificationHeaderStyle = EStyleSheet.create({
    profileContainer: {
        width: "80%"
    },

    messageContainer: {
        paddingVertical: 14,
        paddingHorizontal: 30,
        borderTopWidth: 1,
        borderBottomWidth: 1,
    },

    message: {
        textAlign: "center",
        lineHeight: 21,
        fontSize: 18,
        fontWeight: "700"
    },

    avatarLogo: {
        marginLeft: -16
    },

    headerContainer: {
        height:120
    },

    row: {
        flexDirection: "row",
        flexWrap: "wrap",
        justifyContent: "space-between"
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
});

export default NotificationHeaderStyle;