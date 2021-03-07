import { Dimensions, Platform, StyleSheet } from "react-native";
import Font from "../../data/fonts/Font";

const HeaderStyle = StyleSheet.create({
    container: {
        flex: 1,
        alignSelf: "stretch",
        backgroundColor: "#FFFFFF"
    },

    requestButton: {
        paddingRight: 17,
        justifyContent: "center",
        alignItems: "center"
    },

    layout: {
        height: Dimensions.get("screen").height,
        width: Dimensions.get("screen").width,
        position: "absolute",
        backgroundColor: "#000000",
        zIndex: 50,
    },

    popUp: {
        backgroundColor: "#FFFFFF",
        height: Dimensions.get("screen").height,
        width: Dimensions.get("screen").width,
        position: "absolute",
    },

    myProfileHeaderStyle: {
        height: Platform.OS === "ios" ? 144 : 120
    },

    backButtonOpacity: {
        flexDirection: "row",
        justifyContent: "space-between"
    },

    backButtonTextView: {
        flexDirection: "column",
        justifyContent: "center"
    },

    buttonText: {
        color: "#02A2CF",
        fontFamily: Font.OpenSans.ExtraBold,
        fontSize: 20,
        fontWeight: "700"
    },

    orangeButtonText: {
        color: "#EC6400"
    },

    moreOptionsIcon: {
        paddingRight: 12
    },

    headerTitleStyle: {
        fontFamily: Font.OpenSans.ExtraBold,
        fontWeight: "700",
        fontSize: 18
    },

    messages: {
        right: 10
    }
});

export default HeaderStyle;
