import { Dimensions, StyleSheet } from "react-native";

const MyProfileTabsStyle = StyleSheet.create({

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
});

export default MyProfileTabsStyle;
