import { Dimensions, StyleSheet } from "react-native";

const StopLogoTitleStyle = StyleSheet.create({

    headerStopData: {
        lineHeight: 18,
        fontSize: 14,
        marginBottom: 8,
        fontFamily: "Open Sans",
        fontStyle: "normal",
        width:275,
    },

    container: {
        minHeight: 48,
        width: Dimensions.get("screen").width - 28,
        paddingTop:7,
    },
});

export default StopLogoTitleStyle;
