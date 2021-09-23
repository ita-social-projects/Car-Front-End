import EStyleSheet from "react-native-extended-stylesheet";
import Font from "../../data/fonts/Font";

const ScheduleBottomPopupStyles = EStyleSheet.create({
    header: {
        textTransform: "uppercase",
        fontFamily: Font.ProximaNova.ExtraBold,
        paddingLeft: 36,
        fontSize: 14,
        lineHeight: 16,
    },

    panel: {
        height: 240,
    },

    weekDayContainer: {
        height: 56,
        flexDirection: "row",
        paddingTop: 24,
        marginHorizontal: 36,
        justifyContent: "space-between",
    },

    buttonText: {
        textTransform: "uppercase",
        fontFamily: Font.ProximaNova.ExtraBold,
        fontWeight: "700",
    },

    button: {
        justifyContent: "center",
        alignItems: "center",
        borderWidth: 2,
        width: 40,
        height: 40,
    },

    checkboxContainer: {
        flexDirection: "row",
        marginLeft: 40,
        paddingTop: 32,
        height: 16,
        alignItems: "center",
    },

    switch: {
        height: 32,
        width: 40
    },

    confirmButton: {
        marginHorizontal: 4,
        alignItems: "center",
        borderWidth: 2,
    },

    scheduleButtonBlock: {
        flexDirection: "row",
        justifyContent: "flex-end",
        marginTop: 25,
        marginRight: 36,
    },

    scheduleButton: {
        borderWidth: 2,
        justifyContent: "center",
        alignItems: "center",
        height: 44,
        width: 120,
    },

    scheduleButtonText: {
        fontWeight: "700",
        fontSize: 16,
        textTransform: "uppercase",
    },
});

export default ScheduleBottomPopupStyles;