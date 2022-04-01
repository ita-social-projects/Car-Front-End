import EStyleSheet from "react-native-extended-stylesheet";

const TouchableNavigationCardStyle = EStyleSheet.create({
    cardContainer: {
        paddingBottom: 26,
        paddingLeft: 0,
        paddingTop: 26,
        paddingRight: 0,
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
        width: 32,
        alignItems: "center",
        justifyContent: "center",
        marginRight: 20
    },

    cardName: {
        fontWeight: "bold"
    },
});

export default TouchableNavigationCardStyle;
