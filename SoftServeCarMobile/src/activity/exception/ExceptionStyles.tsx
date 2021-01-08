import { StyleSheet } from "react-native";

export const exceptionStyle = StyleSheet.create({
    container:{
        flex:1,
        alignItems:"center",
        justifyContent:"center"
    },
    exceptionMessage: {
        fontSize:40,
        padding:20,
        textAlign: 'center'
    },
    exceptionCode: {
        fontWeight:"bold",
        fontSize:45
    },
    exceptionLink: {
        fontSize:40,
        color:'blue'
    }
    
})