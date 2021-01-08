import { StyleSheet } from "react-native";

const loginStyle = StyleSheet.create({   
    
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
    loadingIcon: {
        width: 56,
        height: 56,
        borderRadius: 50,
        borderWidth: 3,
        borderColor: '#EEEEEE'
    },
});
export default loginStyle;