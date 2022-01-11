import { Dimensions, StyleSheet } from "react-native";
import Font from "../../data/fonts/Font";

const sizeOfScreenComparerHeight = 600;
const screenHeight = Dimensions.get("screen").height;

const TouchableNavigationBlockStyle = StyleSheet.create({

    blockContainer: {
        borderRadius: 8,
        borderWidth: 3,
        borderStyle: "solid",
        height: (screenHeight) > sizeOfScreenComparerHeight ? (160) : (120),
        marginVertical: 5,
        elevation: 8,
        marginHorizontal: 7
    },

    textStyle: {
        flex: 1,
        fontFamily: Font.ProximaNova.Bold,
        fontSize: (screenHeight) > sizeOfScreenComparerHeight ? (24) : (18),
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
        marginLeft: (screenHeight) > sizeOfScreenComparerHeight ? (30) : (30),
        marginRight: (screenHeight) > sizeOfScreenComparerHeight ? (0) : (-10),
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
