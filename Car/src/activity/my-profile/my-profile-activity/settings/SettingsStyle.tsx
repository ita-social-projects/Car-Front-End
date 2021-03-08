import { Dimensions, StyleSheet } from "react-native";
import Font from "../../../../data/fonts/Font";

const SettingsStyle = StyleSheet.create({
    mainContainer: {
        flex: 1,
        backgroundColor: "#FFFFFF",
    },

    container: {
        height: Dimensions.get("window").height -105,
        width: Dimensions.get("window").width,
    },

    bottomContainer: {
        paddingTop: 166,
    },

    profileInfo: {
        marginHorizontal: 14,
        marginVertical: 20,
        borderRadius: 16,
        borderWidth: 1,
        borderColor: "#F0F0F0",
        height: 126,
        width: Dimensions.get("screen").width - 28,
        top: 0,
        left: 0,
        paddingTop: 10,
        zIndex: 100,
        backgroundColor: "#FFFFFF",
        position: "absolute",
    },

    moreOptions: {
        backgroundColor: "#FFFFFF"
    },

    moreOptionsHeader: {
        textTransform: "uppercase",
        fontFamily: Font.ProximaNova.ExtraBold,
        paddingLeft: 24,
        paddingBottom: 33,
        fontSize: 14,
        lineHeight: 16,
    },

    changeAvatarText: {
        fontFamily: Font.OpenSans.Bold,
        fontWeight: "700",
        fontSize: 13,
        lineHeight: 16,
    },

    deleteAvatarText: {
        fontFamily: Font.OpenSans.Bold,
        fontWeight: "700",
        fontSize: 13,
        lineHeight: 16,
        color: "#EC6400"
    },

    moreOptionsButton: {
        height: 44,
        width: Dimensions.get("window").width,
        alignItems: "flex-start",
        justifyContent: "center",
        paddingLeft: 24,
    },

    sepataror: {
        height: 1,
        backgroundColor: "#C1C1C5",
        marginHorizontal: 10,
    },

    cardText: {
        fontWeight: "bold",
        color: "#000000"
    },

    layout: {
        height: Dimensions.get("screen").height,
        width: Dimensions.get("screen").width,
        position: "absolute",
        backgroundColor: "#000000",
        zIndex: 50,
    }
});

export default SettingsStyle;
