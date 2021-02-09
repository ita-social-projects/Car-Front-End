import { StyleSheet } from "react-native";

export const headerStyle = StyleSheet.create({
    headerContainer: {
        flex: 100,
        alignSelf: "stretch",
        backgroundColor: "#FFFFFF"
    },

    pageTitle: {
        fontSize: 25,
        textAlign: "center",
        fontWeight: "bold",
        padding: 10
    },

    headerUserAvatar: {
        width: 56,
        height: 56,
        borderRadius: 50,
        borderWidth: 3,
        borderColor: "#EEEEEE"
    },

    headerUserInformation: {
        marginLeft: 15,
        fontFamily: "ProximaNova",
        fontWeight: "bold"
    },

    headerUserName: {
        lineHeight: 21,
        fontSize: 18,
        marginBottom: 8,
        fontWeight: "bold"
    },
    headerUserAdditionalData: {
        lineHeight: 14,
        fontSize: 14,
        opacity: 0.5,
        marginBottom: 8
    },

    mainContainer: {
        margin: 20
    },

    baseContainer: {
        flexDirection: "row",
        alignItems: "center",
        padding: 10
    },

    innerContainer: {
        alignItems: "center",
        flexDirection: "row"
    },

    unreadContainer: {
        backgroundColor: "lightblue",
        borderBottomColor: "cornflowerblue",
        borderBottomWidth: 1
    },

    readContainer: {
        borderBottomWidth: 1,
        borderBottomColor: "grey"
    },

    captionView: {
        flex: 1,
        fontSize: 17,
        paddingLeft: 10,
        color: "#909095"
    },

    valueView: {
        flex: 1,
        paddingLeft: 10,
        fontSize: 20,
        color: "cornflowerblue"
    },

    options: {
        fontSize: 30,
        fontWeight: "bold"
    },

    dateBase: {
        fontSize: 17,
        fontWeight: "bold",
        color: "#909095"
    },

    dateUnread: {
        color: "cornflowerblue"
    },

    commentsView: {
        marginTop: 50
    },

    TextInputStyle: {
        height: 100,
        borderWidth: 2,
        borderColor: "black",
        fontSize: 15,
        paddingLeft: 10,
        textAlignVertical: "top"
    },

    commentsCaption: {
        fontSize: 17,
        fontWeight: "bold"
    }
});
