import { StyleSheet } from 'react-native';

const carDropDownPickerStyle = StyleSheet.create({
    container: {
        borderWidth: 2,
        borderColor: 'black',
        borderTopLeftRadius: 0,
        borderTopRightRadius: 0,
        borderBottomLeftRadius: 0,
        borderBottomRightRadius: 0,
    },
    dropDownStyle: {
        borderWidth: 2,
        borderColor: 'black',
        borderTopWidth: 0,
        paddingHorizontal: 4
    },
    placeholderStyle: {
        paddingVertical: 10,
        fontSize: 16,
        lineHeight: 24,
        color: 'black',
    },
    itemStyle: {
        justifyContent: 'flex-start',
        backgroundColor: '#F0F0F0',
        marginTop: 5,
        paddingLeft: 8,
    },
    disabledStyle: {
        borderColor: 'gray'
    },
    requiredPointer: {
        color: 'red',
        position: 'absolute',
        left: 18, top: 15
    },
    initialPlaceHolder: {
        color: '#909095'
    }
}); 
export default carDropDownPickerStyle;