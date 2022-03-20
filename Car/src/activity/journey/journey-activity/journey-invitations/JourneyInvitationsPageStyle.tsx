import { StyleSheet } from "react-native";

export const JourneyInvitationsPageStyle = StyleSheet.create({
    row: {
        flexDirection: "row",
        alignItems: "center",
        paddingBottom: 22,
        justifyContent: "space-between"
    },
    icon: {
        position: "absolute",
        top: 15,
        right: 10
    },
    emailText: {
        paddingTop: 5,
    },
    invitationStatus: {
        display: "flex",
        flexDirection: "row",
        top: 3,
    },
    invtiationStatusWrapper: {
        marginRight:5,
    },
    invitationStatusText: {
        paddingTop: 5,
        fontSize: 15,
        fontWeight: "bold",
    },
    invitationStatusIcon: {
        top: 3,
    }
});
