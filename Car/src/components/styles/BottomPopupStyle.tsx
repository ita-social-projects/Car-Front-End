import { StyleSheet } from "react-native";
import DM from "./DM";

const BottomPopupStyle = StyleSheet.create({
    headerContainer: {
        alignItems: "center",
        backgroundColor: DM("white"),
        borderTopRightRadius: 16,
        borderTopLeftRadius: 16
    },

    headerBlackline: {
        justifyContent: "center",
        alignItems: "center",
        width: 74,
        backgroundColor: DM("black"),
        height: 4,
        marginTop: 15,
        borderRadius: 2
    }
});

export default BottomPopupStyle;
