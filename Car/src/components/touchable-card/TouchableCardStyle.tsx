import { StyleSheet } from "react-native";
import Font from "../../data/fonts/Font";

const TouchableCardStyle = StyleSheet.create({
    cardContainer: {
        paddingBottom: 18,
        paddingLeft: 27,
        paddingTop: 18,
        paddingRight: 10,
        borderBottomColor: "#C1C1C5",
        borderTopColor: "#C1C1C5",
        marginLeft: 8,
        marginRight: 8,
        borderBottomWidth: 1,
        fontSize: 14,
        fontWeight: "bold",
        flexDirection: "row",
        justifyContent: "space-between"
    },

    cardInformationContainer: {
        flexDirection: "row",
        alignItems: "center"
    },

    cardIcon: {
        marginRight: 20
    },

    cardName: {
        flex: 2,
        fontWeight: "bold",
        fontFamily: Font.OpenSans.Regular,
        fontStyle: "normal",
        fontSize: 14,
        lineHeight: 16,
        marginBottom: 2,
        marginTop: 1
    },

    cardTextContainer: {
        flexDirection: "column"
    },

    cardAddress: {
        flex: 4,
        fontSize: 12,
        color: "#909095",
        fontFamily: Font.OpenSans.Regular
    }
});

export default TouchableCardStyle;
