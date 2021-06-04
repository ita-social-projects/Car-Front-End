import EStyleSheet from "react-native-extended-stylesheet";
import Font from "../../../data/fonts/Font";

const NotificationRideStopsStyle = EStyleSheet.create({
    container: {
        flex: 1,
        marginTop: 24,
    },

    header: {
        marginBottom: 8,
        fontSize: "1.1rem",
        fontWeight: "700",
        marginLeft: "0.2rem", // Circle's Size Compensation
    },

    stopsBlock: {
        width: "100%",
    },

    stopListItem: {
        flexDirection: "row",
    },

    stopListItemRow: {
        flexDirection: "column",
        alignItems: "center",
    },

    stopCustomLineIcon: {
        height: "0.8rem",
        width: "0.2rem",
    },

    activeCustomLineIcon: {
        height: "1.1rem",
        width: "0.2rem",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        zIndex: 5
    },

    intermidiateCircleGrad: {
        borderRadius: 90,
        height: "0.7rem",
        width: "0.7rem",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        zIndex: 5
    },

    circleGrad: {
        borderRadius: 90,
        height: "1rem",
        width: "1rem",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        zIndex: 5
    },

    stopName: {
        alignSelf: "flex-end",
        width: "90%",
        marginBottom: "0.1rem"
    },

    activeStopName: {
        fontFamily: Font.OpenSans.Bold,
        fontSize: "0.9rem",
    },

    activeStopAddress: {
        fontWeight: "600",
    },
});

export default NotificationRideStopsStyle;