import EStyleSheet from "react-native-extended-stylesheet";

const NotificationRideDetailsStyle = EStyleSheet.create({
    container: {
        alignItems: "center",
        justifyContent: "space-around",
        flexDirection: "row",
        marginTop: 24,
    },

    detailsContainer: {
        marginBottom: 11,
        justifyContent: "center",
        alignItems: "center",
    },

    luggageContainer:
    {
        marginTop: 20,
        justifyContent: "center",
        alignItems: "center",
    },

    value: {
        fontSize: 14,
        fontWeight: "bold",
        lineHeight: 16,
    },

    icon:
    {
        width: 80,
        height: 90,
    },

    separator: {
        flexWrap: "wrap",
        width: "100%",
        height: 1,
        marginTop: 7
    }
});

export default NotificationRideDetailsStyle;