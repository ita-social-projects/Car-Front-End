import { Platform } from "react-native";
import EStyleSheet from "react-native-extended-stylesheet";

const TouchableNavigationCardStyle = EStyleSheet.create({
    cardContainer: {
        paddingBottom: 26,
        paddingLeft: 10,
        paddingTop: 26,
        paddingRight: 10,
        borderBottomColor: Platform.OS === "ios" ? "rgba(0,0,0,0.5)" : "#C1C1C5",
        marginLeft: 8,
        marginRight: 8,
        borderBottomWidth: 1,
        fontSize: 13,
        fontWeight: "bold",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center"
    },

    cardInformationContainer: {
        flexDirection: "row",
        alignItems: "center",
        alignContent: "space-between",
        justifyContent: "space-between"
    },

    pictureContainer: {
        width: 55,
        alignItems: "center",
        justifyContent: "center"
    },

    cardName: {
        fontWeight: "bold"
    },
});

export default TouchableNavigationCardStyle;