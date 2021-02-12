import { StyleSheet } from "react-native";
import Font from "../../../../components/fonts/Font";
const SimpleMessageStyle = StyleSheet.create({
    main: {
        display: 'flex',
        flexDirection: 'column',
        borderBottomWidth: 1,
        borderBottomColor: '#C1C1C5',
        height: 68,
        alignContent: 'center',
        width: 344,
        alignSelf: 'center',
    },
    button: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 10,
    },
    fonts: {
        fontFamily: Font.OpenSans.Bold,
        fontSize: 13,
    },
    image: {
        width: 56,
        height: 56,
        borderRadius: 50,
        marginRight: 7,
        bottom: 5
    },
    lottie: {
        width: 100,
        height: 100
    },
    container: {
        backgroundColor: 'white',
    },
    containerStyle: {
        height: 44,
        backgroundColor: 'white',
        borderBottomColor: 'transparent',
        borderTopColor: 'transparent',
        marginTop: 5,
        marginBottom: 20
    },
    inputContainerStyle: {
        backgroundColor: "white",
        borderColor: 'black',
        borderWidth: 2,
        borderBottomWidth: 2,
        borderBottomColor: 'black',
        paddingLeft: 5
    },
    textStyle:{
        fontSize: 11,
        paddingTop: 10,
        fontFamily: Font.OpenSans.SemiBold,
    }
})


export default SimpleMessageStyle;
