import EStyleSheet from "react-native-extended-stylesheet";
import Font from "../../data/fonts/Font";

const NotificationComponentsStyle = EStyleSheet.create({
    window: {
        width: "90%",
        height: "90%",
        borderRadius: 15,
        padding: 20,
    },

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

    background: {
        flex: 1,
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "rgba(0, 0, 0, 0.5)"
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

    button: {
        paddingVertical: 12,
        paddingHorizontal: 18
    },

    buttonText: {
        fontSize: 18,
        fontWeight: "700"

    },
});

export default NotificationComponentsStyle;