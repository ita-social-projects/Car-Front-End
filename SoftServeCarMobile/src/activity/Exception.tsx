import React, { useContext } from 'react'
import { Text, View } from 'react-native'
import { AuthContext } from '../components/auth/AuthProvider';
import { centerStyle } from '../components/styles/centerStyle'
import * as RootNavigation from '../components/navigation/RootNavigation';


export function Exception(props: any){
    const { user, logout } = useContext(AuthContext);   
    const userMessage = props.route.params.errorMessage == 401 ?
     'You are unauthorized. You have to log in to the app.'
    : 'Internal Server Error';
    const process401 =()=>{
        return(
        <View >
            <Text style={centerStyle.exceptionLink} onPress={()=>{
                user ? logout() : RootNavigation.navigate("Login", {});
                }}>Login </Text>
        </View>
        )
    }
    const processOtherErrors = () =>{
        return(
            <View >
                <Text style={centerStyle.exceptionLink} onPress={()=>{
                    RootNavigation.navigate("AppTabs", {});          
                }}>Back to app</Text>
            </View>
            )
    }
    let action = props.route.params.errorMessage == 401 ? process401 :processOtherErrors;
    return (
        <View style={centerStyle.container}>
            <Text style={centerStyle.exceptionCode}>{props.route.params.errorMessage}</Text>
            <Text style={centerStyle.exceptionMessage}>{userMessage}</Text>
            {action()}          
        </View>
    )
}