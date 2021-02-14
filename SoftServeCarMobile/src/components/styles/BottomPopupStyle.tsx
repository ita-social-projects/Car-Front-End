import { StyleSheet } from "react-native";

const BottomPopupStyle = StyleSheet.create({
    headerContainer: {
        alignItems: "center",
        backgroundColor: "white",
        borderTopRightRadius: 16,
        borderTopLeftRadius: 16
    },
    headerBlackline: {
        justifyContent: "center",
        alignItems: "center",
        width: 74,
        backgroundColor: "black",
        height: 4,
        marginTop: 15,
        borderRadius: 2
    }
});

export default BottomPopupStyle;
