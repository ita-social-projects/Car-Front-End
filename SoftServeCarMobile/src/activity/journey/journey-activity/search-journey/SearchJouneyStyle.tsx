import { StyleSheet } from "react-native";

const SearchJouneyStyle = StyleSheet.create({

    container: {
        backgroundColor: '#F2F2F2'
    },

    recentJourneyText: {
        paddingBottom: 5,
        paddingLeft: 10,
        paddingTop: 8,
        paddingRight: 10,
        marginRight: 10,
        fontWeight: 'bold',
        fontSize: 12
    },

    topInputContainer: {
        borderBottomColor: '#C1C1C5',
        borderBottomWidth: 1,
    },

    buttonsContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around'
    },

    button: {
        width: 150,
    }
});

export default SearchJouneyStyle;