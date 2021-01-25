import { StyleSheet } from "react-native";

export const TouchableNavigationCardStyle = StyleSheet.create({
    cardContainer: {
        paddingBottom: 26,
        paddingLeft: 27,
        paddingTop: 26,
        paddingRight: 10,
        borderBottomColor: '#C1C1C5',
        marginLeft: 8,
        marginRight: 8,
        borderBottomWidth: 1,
        fontSize: 13,
        fontWeight: 'bold',
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    cardInformationContainer: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    cardIcon: {
        marginRight: 20
    },
    cardName: {
        fontWeight: 'bold'
    }
});
