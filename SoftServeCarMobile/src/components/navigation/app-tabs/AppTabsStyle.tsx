import { Platform, StyleSheet } from "react-native";

const AppTabsStyle = StyleSheet.create({

    labelStyle: {
        fontStyle: 'normal',
        fontSize: 10,
        fontWeight: '800',
        fontFamily: Platform.OS === "ios" ? 'Open Sans' : 'OpenSans-Bold.ttf',
        lineHeight: 16
    },

    navigator: {
        alignItems: "center"
    },
});

export default AppTabsStyle;