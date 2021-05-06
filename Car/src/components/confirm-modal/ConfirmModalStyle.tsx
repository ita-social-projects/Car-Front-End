import { StyleSheet } from "react-native";
import Font from "../../data/fonts/Font";

const ConfirmModalStyle = StyleSheet.create({
    background: {
        flex: 1,
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "rgba(0, 0, 0, 0.5)"
    },
    window: {
        width: "80%",
        height: 260,
        backgroundColor: "white",
        opacity:1,
        alignItems: "center",
        borderRadius: 15,
        paddingVertical: 30,
        paddingHorizontal: 20,
        justifyContent: "space-between"
    },
    boldText: {
        fontSize: 16,
        fontWeight: "700",
        fontFamily: Font.OpenSans.Extrabold
    },
    white: {
        color: "white"
    },
    confirmButton: {
        width: "100%",
        alignItems: "center",
        backgroundColor: "#d80056",
        paddingVertical: 10,
    },
    subtitleText: {
        color: "#AFAEAE"
    }
}
);

export default ConfirmModalStyle;
