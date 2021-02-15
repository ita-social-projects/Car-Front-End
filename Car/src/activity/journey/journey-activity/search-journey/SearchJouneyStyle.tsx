import { Platform, StyleSheet } from "react-native";
import Font from "../../../../data/fonts/Font";

const SearchJouneyStyle = StyleSheet.create({
    container: {
        backgroundColor: "#FAFAFA"
    },

    recentJourneyText: {
        paddingBottom: 7,
        paddingLeft: 15,
        paddingTop: 8,
        paddingRight: 10,
        marginRight: 10,
        fontWeight: "bold",
        fontSize: 14,
        fontFamily: Font.OpenSans.Bold
    },

    spinner: {
        marginTop: 60
    },

    topInputContainer: {
        borderBottomColor: "#C1C1C5",
        borderBottomWidth: 1
    },

    buttonsContainer: {
        flexDirection: "row",
        justifyContent: "space-around"
    },

    button: {
        width: 150
    }
});

export default SearchJouneyStyle;
