import { StyleSheet } from "react-native";

export const CreateJourneyStyle = StyleSheet.create({
    container: {
        backgroundColor: "#F2F2F2",
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
        borderColor: "black",
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
        marginVertical: 24
    },

    publishButton: {
        marginRight: 20,
        marginBottom: 20,
        paddingHorizontal: 16,
        paddingVertical: 12,
        backgroundColor: "#000000",
        flexDirection: "row",
    },

    publishButtonText: {
        paddingHorizontal: 6,
        color: "white",
        textTransform: "uppercase",
        fontWeight: "bold",
        fontSize: 16,
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
        height: 240,
        marginTop: 25
    }
});
