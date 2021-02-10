import { StyleSheet } from "react-native";

const PreferencesStyle = StyleSheet.create({
    mainContainer: {
        margin: 20,
        backgroundColor:"#FFFFFF"
    },

    detailsContainer: {
        flexDirection: "row",
        alignItems: "center",
        paddingTop: 30
    },

    captionView: {
        flex: 8,
        fontWeight: "bold",
        fontSize: 17,
        alignItems: "flex-start",
        justifyContent: "space-between"
    },

    valueView: {
        flex: 1,
        paddingLeft: 5,
        fontSize: 20,
        alignItems: "flex-end",
        justifyContent: "space-between"
    },

    switchStyle: {
        flex: 1,
        alignItems: "flex-start",
        justifyContent: "space-between",
        transform: [{ scaleX: 1.3 }, { scaleY: 1.3 }]
    },

    commentsView: {
        marginTop: 50
    },

    TextInputStyle: {
        height: 100,
        borderWidth: 2,
        borderColor: "black",
        fontSize: 15,
        paddingLeft: 5,
        textAlignVertical: "top"
    },

    commentsCaption: {
        fontSize: 17,
        fontWeight: "bold"
    }
});

export default PreferencesStyle;
