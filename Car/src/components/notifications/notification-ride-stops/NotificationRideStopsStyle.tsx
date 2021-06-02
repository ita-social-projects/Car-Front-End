import EStyleSheet from "react-native-extended-stylesheet";
import Font from "../../../data/fonts/Font";

const NotificationRideStopsStyle = EStyleSheet.create({
    container: {
        flex: 1,
        marginTop: 24,
    },

    header: {
        marginBottom: 8,
        fontSize: 13,
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
        height: "0.8rem",
        width: "0.8rem",
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
        fontSize: "1rem",
        lineHeight: "1.1rem",
        paddingTop: "0.3rem" // Circle's Border Compensation
    },
});

export default NotificationRideStopsStyle;