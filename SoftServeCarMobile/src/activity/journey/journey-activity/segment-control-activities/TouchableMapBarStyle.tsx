import { StyleSheet } from 'react-native';
import { withSafeAreaInsets } from 'react-native-safe-area-context';

const TouchableMapBarStyle = StyleSheet.create({
    container: {
        flexDirection:'row',
        borderWidth: 2,
        padding: 10,
        marginRight:20,
        marginLeft:20,
        backgroundColor: 'white',
        fontFamily:'OpenSans'
    },
    insideText: {
        flex:1,
        color: '#909095',
        marginLeft: 5,
        fontSize: 16,
        //backgroundColor: 'green'
    },
    directionText: {
        flex:5,
        color: 'black',
        marginLeft: 5,
        fontSize: 16,
       // backgroundColor: 'red'
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
      //  backgroundColor: 'blue'
    }

});
export default TouchableMapBarStyle;