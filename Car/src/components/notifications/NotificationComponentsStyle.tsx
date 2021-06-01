import { Platform } from "react-native";
import EStyleSheet from "react-native-extended-stylesheet";
import Font from "../../data/fonts/Font";

const NotificationComponentsStyle = EStyleSheet.create({
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

});

export default NotificationComponentsStyle;