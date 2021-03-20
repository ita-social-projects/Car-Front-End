import { StyleSheet } from "react-native";
import Font from "../../data/fonts/Font";
import DM from "../styles/DM";

const IndicatorStyle = StyleSheet.create({
    text: {
        color: DM("#414045"),
        fontFamily: Font.ProximaNova.ExtraBold,
        fontSize: 14,
        fontWeight: "700"
    },

    container: {
        flex: 1,
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center"
    }
});

export default IndicatorStyle;
