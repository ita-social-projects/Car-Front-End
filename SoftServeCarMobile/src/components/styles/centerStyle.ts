import { StyleSheet } from "react-native";

export const centerStyle = StyleSheet.create({
    container:{
        flex:1,
        alignItems:"center",
        justifyContent:"center"
    },
    loginPageTextGreeting: {
        fontSize: 35,        
    },
    loginPageTextName: {
        fontSize: 40,  
        fontWeight: "bold",      
    },
    loginButton: {  
        borderRadius: 2,
        margin: 30,       
    },
    preferencesText: {
        padding: 30,
        textAlign: "left",
        fontSize: 15,
    },
    row: {
        flex: 1,
        flexDirection: "row"
    },
    TextInputStyleClass:{ 
        height: 100,
        borderWidth: 2,
        borderColor: 'black',
        fontSize: 15,
        paddingLeft: 10,
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