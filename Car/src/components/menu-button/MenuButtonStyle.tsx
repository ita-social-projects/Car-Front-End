import { StyleSheet } from "react-native";

const MenuButtonStyle = StyleSheet.create({
    wrapper: {
        justifyContent: "space-between",
        flexDirection: "row"
    },

    panelButton: {
        paddingHorizontal: 12,
        height: 48,
        justifyContent: "center",
        flexDirection: "column",
    },

    panelButtonTitle: {
        fontSize: 13,
        lineHeight: 42,
        fontWeight: "bold",
        alignItems: "center",
        paddingLeft: 12,
        marginBottom: 4
    },

    Icon: {
        paddingRight: 12,
        marginBottom: 4
    },

    container: {
        justifyContent: "center"
    },

    separator: {
        marginLeft: 12,
        flexWrap: "wrap",
        width: "92%",
        height: 1,
    }
});

export default MenuButtonStyle;
