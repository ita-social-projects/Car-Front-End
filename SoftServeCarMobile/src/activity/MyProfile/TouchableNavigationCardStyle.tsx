import { StyleSheet } from "react-native";

const cardStyle = StyleSheet.create({
    cardCointainer: {
        paddingBottom: 26,
        paddingLeft: 10,
        paddingTop: 26,
        paddingRight: 10,
        borderBottomColor: '#C1C1C5',
        marginLeft: 8,
        marginRight: 8,
        borderBottomWidth: 1,
        fontSize: 13,
        fontWeight: 'bold',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    cardInformationContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        alignContent: 'space-between',
        justifyContent: 'space-between'
    },
    pictureContainer: {
        width: 55,
        alignItems: 'center',
        justifyContent: 'center'
    },
    cardName: {
        fontWeight: 'bold'
    }
});
export default cardStyle;