import { StyleSheet } from "react-native";

const MenuButtonStyle = StyleSheet.create({
    wrapper: {
        justifyContent: "space-between",
        flexDirection: "row"
    },

    panelButton: {
        paddingHorizontal: 12,
        height: 44,
        justifyContent: "center",
        flexDirection: "column"
    },

    panelButtonTitle: {
        fontSize: 13,
        lineHeight: 42,
        fontWeight: "bold",
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
