import { StyleSheet } from "react-native";
import { OpenSans } from "../../../../font-manager";

const AppTabsStyle = StyleSheet.create({

    labelStyle: {
        fontStyle: 'normal',
        fontSize: 10,
        fontWeight: '800',
        fontFamily: OpenSans.Bold,
        lineHeight: 16
    },

    navigator: {
        alignItems: "center"
    },
});

export default AppTabsStyle;