import { StyleSheet } from "react-native";

export const CreateJourneyStyle = StyleSheet.create({
    container: {
        paddingTop: 0
    },

    dropDownPickerContainer: {
        marginLeft: 16,
        marginRight: 15,
        marginTop: 24
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
        marginTop: 15,
        marginLeft: 20,
        marginRight: 20
    },

    invitationsView: {
        marginTop: 24,
        marginLeft: 16,
        marginRight: 20,
    },

    invitationsLink: {
        flexDirection: "row",
        alignItems: "center",
        paddingHorizontal: 4,
        paddingVertical: 24
    },

    textInputStyle: {
        height: 100,
        borderWidth: 2,
        fontSize: 15,
        paddingLeft: 10,
        textAlignVertical: "top",
    },

    invitationInputStyle: {
        height: 45,
        borderWidth: 1,
        fontSize: 15,
        paddingLeft: 10,
        paddingRight: '12%',
    },

    commentsCaption: {
        fontSize: 16,
        fontWeight: "bold",
        marginBottom: 5
    },

    invitationsCaption: {
        fontSize: 16,
        fontWeight: "bold",
        marginBottom: 2
    },

    invitationsDescription: {
        fontSize: 12,
    },

    publishButtonContainer: {
        alignItems: "flex-end",
        marginVertical: 24,
        flexDirection: "row-reverse",
        justifyContent: "space-between"
    },

    publishButton: {
        marginRight: 15,
        marginBottom: 20,
        paddingHorizontal: 16,
        paddingVertical: 12,
        flexDirection: "row",
        borderWidth: 2,

    },

    publishButtonText: {
        paddingHorizontal: 6,
        textTransform: "uppercase",
        fontWeight: "bold",
        fontSize: 16,
        lineHeight: 20,
        letterSpacing: 0.25
    },

    discardButton: {
        marginLeft: 30,
        marginBottom: 20,
        paddingHorizontal: 16,
        paddingVertical: 12,
        flexDirection: "row"
    },

    saveButonContainer:{
        alignSelf: "flex-end",
        position: "absolute",
        fontSize: 14,
        bottom: 20,
        right: 20,
    },

    saveButton:{
        paddingVertical: 12,
        paddingHorizontal: 16,
    },

    discardButtonText: {
        color: "#EC6400",
        fontWeight: "bold",
        fontSize: 16,
        lineHeight: 22,
    },

    movableMarker: {
        position: "absolute",
        zIndex: 1
    },

    scrollView: {
        position: "absolute",
        top: 25,
        zIndex: 1,
        width: "100%",
        paddingHorizontal: 10,
        height: 265,
        marginTop: 0
    },

    separator: {
        height: 1,
        width: "92%",
        left: 15,
        right: 15,
    },
});
