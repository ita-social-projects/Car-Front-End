import { StyleSheet } from "react-native";
import Font from "../../data/fonts/Font";

const NotificationsStyle = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center"
    },
    deleteButton: {
        backgroundColor: "#FF0000",
        justifyContent: "center",
        alignItems: "center",
        width: "15%"
    },
    noNotificationsContainer: {
        flex: 100,
        paddingTop: 40,
    },
    noNotificationsStyle: {
        textAlign: "center",
        fontSize: 16,
        fontFamily: Font.Milliard.Bold,
        marginTop: 10,
    },
    noNotificationsImageStyle: {
        marginTop: 65,
        marginLeft: 20,
        width: 359,
        height: 212,
        resizeMode: "stretch"
    },
});

export default NotificationsStyle;
