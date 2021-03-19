import { Dimensions, Platform, StyleSheet } from "react-native";
import Font from "../../data/fonts/Font";

const HeaderStyle = StyleSheet.create({
    container: {
        flex: 1,
        alignSelf: "stretch",
        backgroundColor: "#FFFFFF"
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

    headerTitleStyle: {
        fontFamily: Font.OpenSans.ExtraBold,
        fontWeight: "700",
        fontSize: 18,
        marginLeft: 20
    },

    messages: {
        right: 10
    }
});

export default HeaderStyle;
