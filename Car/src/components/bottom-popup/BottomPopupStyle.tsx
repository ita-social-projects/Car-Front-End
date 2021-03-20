import { StyleSheet } from "react-native";
import DM from "../styles/DM";

const BottomPopupStyle = StyleSheet.create({
    header: {
        backgroundColor: DM("white"),
        shadowColor: DM("#000000"),
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
        backgroundColor: DM("#000000"),
        marginBottom: 26
    }
});

export default BottomPopupStyle;
