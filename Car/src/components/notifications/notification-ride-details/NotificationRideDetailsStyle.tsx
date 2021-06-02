import EStyleSheet from "react-native-extended-stylesheet";

const NotificationRideDetailsStyle = EStyleSheet.create({
    container: {
        marginTop: 24,
    },

    header: {
        marginBottom: 8,
        fontSize: 13,
        fontWeight: "700",
    },

    detailsContainer: {
        marginBottom: 4,
        flexDirection: "row",
    },

    label: {
        fontSize: 11,
        fontWeight: "700",
        lineHeight: 16,
    },

    value: {
        fontSize: 11,
        fontWeight: "400",
        lineHeight: 16,
    }
});

export default NotificationRideDetailsStyle;