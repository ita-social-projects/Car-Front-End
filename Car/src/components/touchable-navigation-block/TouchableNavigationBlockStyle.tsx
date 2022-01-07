import { Dimensions, StyleSheet } from "react-native";
import Font from "../../data/fonts/Font";

const TouchableNavigationBlockStyle = StyleSheet.create({

    blockContainer: {
        borderRadius: 8,
        borderWidth: 3,
        borderStyle: "solid",
        height: (Dimensions.get('screen').height) > 600 ? (160) : (120),
        marginVertical: 5,
        elevation: 8,
        marginHorizontal: 7
    },

    textStyle: {
        flex: 1,
        fontFamily: Font.ProximaNova.Bold,
        fontSize: (Dimensions.get('screen').height) > 600 ? (24) : (18),
        justifyContent: "center",
        textTransform: "uppercase",
        textAlignVertical: "center",
        color: "#FFFFFF",
        width: Dimensions.get("window").width / 3,
    },

    textStyleAddRide: {
        marginLeft: 5
    },

    textStyleFindRide: {
        marginLeft: (Dimensions.get('screen').height) > 600 ? (40) : (30),
        marginRight: (Dimensions.get('screen').height) > 600 ? (0) : (-5),
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
