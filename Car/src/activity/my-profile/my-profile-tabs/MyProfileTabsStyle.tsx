import { Dimensions, Platform, StyleSheet } from "react-native";
import Font from "../../../data/fonts/Font";

const MyProfileTabsStyle = StyleSheet.create({

    container: {
        flex: 1,
        alignSelf: "stretch",
    },
    profileInfo: {
        marginHorizontal: 14,
        marginVertical: 3,
        borderRadius: 16,
        borderWidth: 1,
        height: 142,
        width: Dimensions.get("screen").width - 28,
        top: 0,
        left: 0,
        paddingTop: 10,
        zIndex: 100,
        position: "absolute",
    },
    header:{
        width: "100%",
        height: 51,
        borderBottomWidth:1,
        marginBottom: 16
    },
    headerText: {
        textAlign: "center",
        fontSize: 16,
        fontWeight: "bold",
        paddingTop: 16
    },
    myProfileHeaderStyle: {
        height: Platform.OS === "ios" ? 144 : 150,
        borderBottomWidth:0,
        elevation:0
    },
    headerTitleStyle: {
        fontFamily: Font.OpenSans.ExtraBold,
        fontWeight: "700",
        fontSize: 18,
        marginLeft: 20,
    },
});

export default MyProfileTabsStyle;
