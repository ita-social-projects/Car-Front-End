import { StyleSheet } from "react-native";

const dropDownStyles = StyleSheet.create({
    container: {
        borderWidth: 2,
        borderColor: '#000000'
    },
    item: {
        backgroundColor: '#E8E8E8',
        padding: 5,
        marginVertical: 2,
    },
    requiredPlaceHoler: {
        color: 'red'
    },
    placeHolderInitial: {
        color: '#909095'
    },
    placeHolder: {
        fontSize: 16,
        lineHeight: 24,
        color: 'black'
    },
    placeHolderContainer: {
        paddingVertical: 10,
        paddingHorizontal: 16,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    searchArea: {
        borderTopColor: '#DCDCDC',
        borderTopWidth: 2,
        backgroundColor: 'white'
    },
    scrollView: {
        maxHeight: 100,
    },
    dropDownArea: {
        position: 'absolute',
        width: '100%',
    }
});
export default dropDownStyles;