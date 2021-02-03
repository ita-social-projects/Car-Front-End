import { Platform, StyleSheet } from 'react-native';

const TouchableMapBarStyle = StyleSheet.create({
    container: {
        flexDirection:'row',
        borderWidth: 2,
        padding: 10,
        marginRight:20,
        marginLeft:20,
        backgroundColor: 'white',
        fontFamily: Platform.OS === "ios" ? 'Open Sans' : 'OpenSans-Regular.ttf',
    },

    insideText: {
        flex:1,
        color: '#909095',
        marginLeft: 5,
        fontSize: 16,
    },

    directionText: {
        flex:5,
        color: 'black',
        marginLeft: 5,
        fontSize: 16,
    },

    textInputStyle: {
        paddingVertical: 8,
        fontSize: 16,
        lineHeight: 24,
        zIndex: 0,
    },

    barIcon: {
        flex:1,
        borderColor: '#EEEEEE',
    }

});
export default TouchableMapBarStyle;