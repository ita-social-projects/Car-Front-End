import { StyleSheet } from "react-native";
import DM from "../styles/DM";

const MenuButtonStyle = StyleSheet.create({
    wrapper: {
        justifyContent: "space-between",
        flexDirection: "row"
    },

    panelButton: {
        paddingLeft: 12,
        height: 44,
        justifyContent: "center",
        flexDirection: "column"
    },

    panelButtonTitle: {
        fontSize: 13,
        lineHeight: 42,
        fontWeight: "bold",
        color: DM("black"),
        alignItems: "center",
        paddingLeft: 24
    },

    Icon: {
        paddingRight: 12
    },

    container: {
        justifyContent: "center"
    },

    separator: {
        flexWrap: "wrap",
        width: "100%",
        height: 1
    }
});

export default MenuButtonStyle;
