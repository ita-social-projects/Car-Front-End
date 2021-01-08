import React, { useContext } from 'react'
import { Text, View } from 'react-native'
import { AuthContext } from '../../components/auth/AuthProvider';
import * as RootNavigation from '../../components/navigation/RootNavigation';
import {exceptionStyle} from './ExceptionStyles';

export function Exception(props: any){
    const { user, logout } = useContext(AuthContext);   
    const userMessage = props.route.params.errorMessage == 401 ?
     'You are unauthorized. You have to log in to the app.'
    : props.route.params.errorMessage == 'Network error' ? 'The site can’t be reached' : 'Internal Server Error';
    const process401 =()=>{
        return(
        <View >
            <Text style={exceptionStyle.exceptionLink} onPress={()=>{
                user ? logout() : RootNavigation.navigate("Login", {resetConnection: true});
                }}>Login </Text>
        </View>
        )
    }
    const processOtherErrors = () =>{
        return(
            <View >
                <Text style={exceptionStyle.exceptionLink} onPress={()=>{
                    RootNavigation.navigate("AppTabs", {});          
                }}>Back to app</Text>
            </View>
            )
    }
    let action = props.route.params.errorMessage == 401 || props.route.params.errorMessage == 'Network error' ? process401 : processOtherErrors;
    return (
        <View style={exceptionStyle.container}>
            <Text style={exceptionStyle.exceptionCode}>{props.route.params.errorMessage}</Text>
            <Text style={exceptionStyle.exceptionMessage}>{userMessage}</Text>
            {action()}          
        </View>
    )
}