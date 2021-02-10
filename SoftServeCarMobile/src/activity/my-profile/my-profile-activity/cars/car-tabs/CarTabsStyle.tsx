import { StyleSheet } from "react-native";
import Font from "../../../../../components/fonts/Font";

const CarTabsStyle = StyleSheet.create({
    headerTitleStyle: {
        textAlign: "center",
        fontFamily: Font.ProximaNova.Bold,
        fontWeight: "700"
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

    moreOptionsIcon: {
        paddingRight: 12
    }
});

export default CarTabsStyle;
