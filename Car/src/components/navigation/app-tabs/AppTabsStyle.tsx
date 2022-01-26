import { StyleSheet } from "react-native";
import Font from "../../../data/fonts/Font";

const AppTabsStyle = StyleSheet.create({
    labelStyle: {
        fontStyle: "normal",
        fontSize: 10,
        fontWeight: "bold",
        fontFamily: Font.OpenSans.Bold,
        lineHeight: 12,
    },

    navigator: {
        alignItems: "center"
    }
});

export default AppTabsStyle;
