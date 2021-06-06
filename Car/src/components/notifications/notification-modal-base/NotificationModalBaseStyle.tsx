import EStyleSheet from "react-native-extended-stylesheet";

const NotificationModalBaseStyle = EStyleSheet.create({
    window: {
        width: "90%",
        borderRadius: 15,
        padding: 20,
    },

    background: {
        flex: 1,
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "rgba(0, 0, 0, 0.5)"
    },

});

export default NotificationModalBaseStyle;