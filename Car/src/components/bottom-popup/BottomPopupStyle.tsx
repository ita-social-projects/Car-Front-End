import { StyleSheet } from "react-native";

const BottomPopupStyle = StyleSheet.create({
    header: {
        paddingTop: 20,
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20
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
