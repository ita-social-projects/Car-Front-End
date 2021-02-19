import { StyleSheet } from "react-native";
import Font from "../../../../../../data/fonts/Font";

const AllJourneysStyle = StyleSheet.create({
    text: {
        flex: 1,
        fontFamily: Font.ProximaNova.Black,
        fontWeight: "700",
        fontSize: 14,
        textTransform: "uppercase",
        paddingBottom: 16
    },

    container: {
        paddingTop: 24
    }
});

export default AllJourneysStyle;