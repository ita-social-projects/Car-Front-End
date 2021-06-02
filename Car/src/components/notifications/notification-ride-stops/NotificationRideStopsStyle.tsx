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
    },

    stopsBlock: {
        width: "95%",
        justifyContent: "space-around",
        marginTop: 8,
        paddingBottom: 30,
    },

    stopListItem: {
        flexDirection: "row"
    },

    stopListItemRow: {
        flexDirection: "column",
        alignItems: "center"
    },

    stopCustomLineIcon: {
        height: 12,
        width: 2
    },

    circleGrad: {
        borderRadius: 90,
        height: "0.7rem",
        width: "0.7rem",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        zIndex: 5
    },

    stopName: {
        textAlignVertical: "center", // ANDROID
        justifyContent: "center", // IOS
        flex: 1,
        fontFamily: Font.OpenSans.Regular,
        fontSize: "1rem",
        lineHeight: "1.1rem",
    },

    activeStopName: {
        textAlignVertical: "center", // ANDROID
        justifyContent: "center", // IOS
        flex: 1,
        fontFamily: Font.OpenSans.Bold,
        fontSize: "0.9rem",
        lineHeight: "1.1rem",
        paddingTop: "0.9rem", // Circle's Border Compensation
    },

    activeStopAddress: {
        textAlignVertical: "center", // ANDROID
        justifyContent: "center", // IOS
        flex: 1,
        fontWeight: "400",
        lineHeight: "1.1rem",
        paddingTop: "0.9rem" // Circle's Border Compensation
    },
});

export default NotificationRideStopsStyle;