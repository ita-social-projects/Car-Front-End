import { Dimensions, StyleSheet } from "react-native";
import { withTheme } from "react-native-elements";
import Font from "../../data/fonts/Font";

const TouchableNavigationBlockStyle = StyleSheet.create({

    blockContainer: {
        borderRadius: 8,
        borderWidth: 3,
        borderStyle: "solid",
        height: 160,
        marginVertical: 5,
        elevation: 8,
        marginHorizontal: 7
        
    },

    textStyle: {
        flex: 1,
        fontFamily: Font.ProximaNova.Bold,
        fontSize: 24,
        justifyContent: "center",
        textTransform: "uppercase",
        textAlignVertical: "center",
        color: "#FFFFFF",
        width: Dimensions.get("window").width / 3,
    },

    textStyleAddRide: {
        marginLeft: 10
    },

    textStyleFindRide: {
        marginLeft: 40
    },

    imageStyle: {
        justifyContent: "flex-end",
        marginTop: 10
    },

    viewContainer: {
        paddingHorizontal: 10,
        justifyContent: "center",
        flexDirection: "row",
        alignItems: "center"
    },
});

export default TouchableNavigationBlockStyle;
