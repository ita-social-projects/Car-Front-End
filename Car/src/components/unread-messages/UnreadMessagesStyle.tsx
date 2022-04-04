import { StyleSheet } from "react-native";
const UnreadMessageStyle = StyleSheet.create({
    text:{
        fontSize: 11,
        fontWeight: "700",
        lineHeight: 15
    },

    container: {
        width: 20,
        height: 20,
        borderRadius: 10,
        alignItems: "center",
        justifyContent: "center",
        marginVertical: 24
    }
});

export default UnreadMessageStyle;