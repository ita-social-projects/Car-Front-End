import { Platform, StyleSheet } from "react-native";

const TouchableDateTimePickerStyle = StyleSheet.create({
    container: {
        flexDirection: "row",
        borderWidth: 2,
        padding: 5,
        paddingLeft: 8,
        paddingBottom: 8,
        paddingTop: 8,
        marginRight: 20,
        marginLeft: 20,
        marginTop: 5,
        fontFamily: Platform.OS === "ios" ? "Open Sans" : "OpenSans-Regular.ttf"
    },

    descriptionText: {
        flex: 0,
        marginLeft: 5,
        fontSize: 16
    },

    dateTimeText: {
        flex: 2,
        marginLeft: 5,
        fontSize: 16,
        fontWeight: "bold"
    },

    barIcon: {
        borderColor: "#EEEEEE",
        paddingRight: 8,
        paddingTop: 0
    },

    centeredView: {
        flex: 1,
        flexDirection: "column-reverse",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "rgba(0, 0, 0, 0.8)",
    },

    modalView: {
        backgroundColor: "#FFFFFF",
        height: "40%",
        width: "92%",
        borderRadius: 20,
        overflow: "hidden",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5
    },

    btnContainer: {
        flexDirection: "row",
        justifyContent: "space-between"
    },

    btnResetText: {
        color: "black",
        fontWeight: "bold",
        fontSize: 16,
        lineHeight: 18,
    },

    btnDoneText: {
        color: "white",
        fontWeight: "bold",
        fontSize: 16,
        lineHeight: 18,
    },

    btnReset: {
        marginTop: 15,
        marginLeft: 15,
        width: 90,
        height: 40,
        backgroundColor: "white",
        justifyContent: "center",
        alignItems: "center",
        borderColor: "black",
        borderWidth: 2,
    },

    btnDone: {
        marginTop: 15,
        marginRight: 15,
        width: 90,
        height: 40,
        backgroundColor: "black",
        justifyContent: "center",
        alignItems: "center",
    },

    datePicker: {
        alignItems: "center",
        marginTop: 15
    }
});

export default TouchableDateTimePickerStyle;
