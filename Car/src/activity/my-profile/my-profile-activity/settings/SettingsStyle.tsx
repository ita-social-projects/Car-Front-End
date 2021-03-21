import { Dimensions, Platform, StyleSheet } from "react-native";
import Font from "../../../../data/fonts/Font";

const SettingsStyle = StyleSheet.create({
    mainContainer: {
        flex: 1,
    },

    container: {
        height: Dimensions.get("window").height - (Platform.OS === "ios" ? 170 : 105),
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
        height: 126,
        width: Dimensions.get("screen").width - 28,
        top: 0,
        left: 0,
        paddingTop: 10,
        zIndex: 100,
        position: "absolute",
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
        marginHorizontal: 10,
    },

    cardText: {
        fontWeight: "bold",
    },

    layout: {
        height: Dimensions.get("screen").height,
        width: Dimensions.get("screen").width,
        position: "absolute",
        zIndex: Platform.OS === "ios" ? -1 : 50,
    }
});

export default SettingsStyle;
