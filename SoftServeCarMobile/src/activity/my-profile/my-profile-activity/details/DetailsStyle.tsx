import { StyleSheet } from "react-native";
import Font from "../../../../data/fonts/Font";

const DetailsStyle = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 32,
        paddingHorizontal: 24,
        backgroundColor: "#FFFFFF"
    },

    detailsContainer: {
        paddingBottom: 16,
        flexDirection: "row",
    },

    detailContainer: {
        flex: 1,
    },

    detailNameText: {
        fontFamily: Font.OpenSans.Blod,
        fontWeight: "700",
        fontSize: 13,
        lineHeight: 16,
        color: "#000000",
    },

    detailValueGrayText: {
        fontFamily: Font.OpenSans.Regular,
        fontSize: 13,
        lineHeight: 18,
        color: "#414045"
    },

    detailValueBlueText: {
        fontFamily: Font.OpenSans.Bold,
        fontWeight: "700",
        fontSize: 13,
        lineHeight: 16,
        color: "#02A2CF"
    },
});

export default DetailsStyle;
