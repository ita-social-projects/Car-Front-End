import { StyleSheet } from 'react-native'

const carsStyle = StyleSheet.create({
    container: {
        backgroundColor: 'white',
    },
    loading: {
        flex: 1,
    },
    carContainer: {
        flex: 1,
        alignSelf: 'stretch',
        justifyContent: 'center',
        padding: 8
    },
    brand: {
        fontWeight: 'bold',
        color: 'black'
    },
    model: {
        fontWeight: 'bold',
        fontSize: 11,
        lineHeight: 16,
        color: '#414045'
    },
    message: {
        paddingHorizontal: 24,
        paddingVertical: 16,
        fontSize: 15,
        color: '#414045'
    },
    carAvatar: {
        width: 38.5,
        height: 38.5,
        borderRadius: 38.5,
        borderWidth: 3,
        borderColor: '#EEEEEE'
    },
});
export default carsStyle;