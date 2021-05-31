import { StyleSheet } from "react-native";
import Font from "../../data/fonts/Font";

const JourneyCardStyle = StyleSheet.create({
    component: {
        height: 128,
        borderRadius: 8,
        borderStyle: "solid",
        borderWidth: 1,
        marginBottom: 16
    },

    feeText: {
        textAlign: "right",
        paddingRight: 12,
        paddingTop: 0,
        fontFamily: Font.OpenSans.Regular,
        fontSize: 11,
        lineHeight: 16
    },

    driverInfoBlock: {
        flexDirection: "row"
    },

    imageBlock: {
        paddingTop: 14.75,
        paddingLeft: 18.75,
        paddingRight: 10.75,
        paddingBottom: 16.75
    },

    driverTextBlock: {
        flex: 1
    },

    driverNameBlock: {
        paddingTop: 16,
        flexDirection: "row",
        justifyContent: "space-between",
        paddingRight: 10
    },

    moreOptionsBlock: {
        flex: 1,
        alignItems: "flex-end",
        height: 16,
        top: -10
    },

    driverPositionBlock: {
        paddingTop: 4,
        paddingRight: 12,
        flexDirection: "row",
        justifyContent: "space-between"
    },

    driverNameText: {
        fontFamily: Font.OpenSans.Extrabold,
        fontSize: 16,
        fontWeight: "700",
        lineHeight: 16,
        alignItems: "center"
    },

    driverPositionText: {
        fontFamily: Font.OpenSans.Regular,
        fontSize: 11,
        lineHeight: 16,
        alignItems: "center"
    },

    timeText: {
        fontFamily: Font.OpenSans.Extrabold,
        fontSize: 11,
        lineHeight: 16,
        fontWeight: "700",
    },

    stopsBlock: {
        paddingLeft: 16
    },

    firstStopBlock: {
        flexDirection: "row"
    },

    lastStopBlock: {
        flexDirection: "row"
    },

    stopCircleIcon: {
        width: 16,
        borderWidth: 2,
        borderRadius: 400
    },

    stopStickIcon: {
        width: 2,
        height: 12,
        left: 7
    },

    stopsText: {
        fontFamily: Font.OpenSans.Regular,
        fontSize: 11,
        lineHeight: 16,
        paddingLeft: 6
    }
});

export default JourneyCardStyle;
