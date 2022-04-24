import { Dimensions, StyleSheet } from "react-native";

const BottomPopupStyle = StyleSheet.create({
    header: {
        paddingTop: 20,
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        width: Dimensions.get("window").width
    },

    panelHeader: {
        alignItems: "center"
    },

    panelHandle: {
        width: 74,
        height: 4,
        borderRadius: 2,
        marginBottom: 26
    }
});

export default BottomPopupStyle;