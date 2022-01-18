import { Platform, StyleSheet } from "react-native";
import Font from "../../data/fonts/Font";

const HeaderStyle = StyleSheet.create({
    container: {
        flex: 1,
        alignSelf: "stretch",
    },

    border: {
        borderBottomWidth: 1,
        //borderBottomColor:"#414045"
    },

    layout: {
        height: "100%",
        width: "100%",
        position: "absolute",
        zIndex: 50,
    },

    popUp: {
        height: "100%",
        width: "100%",
        position: "absolute",
    },

    myProfileHeaderStyle: {
        height: Platform.OS === "ios" ? 144 : 120,
        borderBottomWidth:1,
    },

    headerTitleStyle: {
        fontFamily: Font.OpenSans.ExtraBold,
        fontWeight: "700",
        fontSize: 18,
        marginLeft: 20,
    },

    messages: {
        right: 10
    }
});

export default HeaderStyle;
