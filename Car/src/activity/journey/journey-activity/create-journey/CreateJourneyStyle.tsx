import { StyleSheet } from "react-native";

export const CreateJourneyStyle = StyleSheet.create({
    container: {
        paddingTop: 25
    },

    recentJourneyText: {
        paddingBottom: 5,
        paddingLeft: 10,
        paddingTop: 8,
        paddingRight: 10,
        marginRight: 10,
        fontWeight: "bold",
        fontSize: 12
    },

    topInputContainer: {
        borderBottomColor: "#C1C1C5",
        borderBottomWidth: 1,
    },

    barIcon: {
        flex: 1,
        borderColor: "#EEEEEE",
    },

    dropDownPicker: {
        marginTop: 20
    },

    text: {
        flex: 1,
        fontWeight: "bold",
    },

    commentsView: {
        marginTop: 24,
        marginLeft: 20,
        marginRight: 20
    },

    textInputStyle: {
        height: 100,
        borderWidth: 2,
        fontSize: 15,
        paddingLeft: 10,
        textAlignVertical: "top",
    },

    commentsCaption: {
        fontSize: 17,
        fontWeight: "bold",
        marginBottom: 8
    },

    publishButtonContainer: {
        alignItems: "flex-end",
        marginVertical: 24,
        flexDirection: "row",
        paddingLeft: 20,
        justifyContent: "space-between"
    },

    publishButton: {
        marginRight: 20,
        marginBottom: 20,
        paddingHorizontal: 16,
        paddingVertical: 12,
        flexDirection: "row",
        borderWidth: 2
    },

    publishButtonText: {
        paddingHorizontal: 6,
        textTransform: "uppercase",
        fontWeight: "bold",
        fontSize: 14,
        lineHeight: 20,
    },

    discardButton: {
        marginBottom: 20,
        paddingHorizontal: 16,
        paddingVertical: 12,
        borderWidth: 2
    },

    discardButtonText: {
        paddingHorizontal: 6,
        color: "red",
        textTransform: "uppercase",
        fontWeight: "bold",
        fontSize: 14,
        lineHeight: 20,
    },

    movableMarker: {
        position: "absolute",
        zIndex: 1
    },

    scrollView: {
        position: "absolute",
        zIndex: 1,
        width: "100%",
        paddingHorizontal: 10,
        height: 265,
        marginTop: 0
    }
});
