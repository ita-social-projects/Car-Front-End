import { StyleSheet } from "react-native";
import Font from "../../../../data/fonts/Font";

const DetailsStyle = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 32,
        paddingHorizontal: 24,
    },

    detailsContainer: {
        paddingBottom: 16,
        flexDirection: "row"
    },

    detailContainer: {
        flex: 1
    },

    detailNameText: {
        fontFamily: Font.OpenSans.Blod,
        fontWeight: "700",
        fontSize: 13,
        lineHeight: 16,
    },

    detailValueGrayText: {
        fontFamily: Font.OpenSans.Regular,
        fontSize: 13,
        lineHeight: 18,
    },

    detailValueBlueText: {
        fontFamily: Font.OpenSans.Bold,
        fontWeight: "700",
        fontSize: 13,
        lineHeight: 16,
    }
});

export default DetailsStyle;
