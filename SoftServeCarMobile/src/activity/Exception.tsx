import React, { useContext } from 'react'
import { Text, View } from 'react-native'
import { AuthContext } from '../components/navigation/AuthProvider';
import { centerStyle } from '../components/styles/centerStyle'
import * as RootNavigation from '../components/navigation/RootNavigation';


export function Exception(props: any){
    const { logout } = useContext(AuthContext);   
    const userMessage = props.route.params.errorMessage == 401 ?
     'You are unauthorized. You have to log in to the app.'
    : 'Internal Server Error';
    const Four0One =()=>{
        return(
        <View >
            <Text style={centerStyle.exceptionLink} onPress={()=>{logout()}}>Login </Text>
        </View>
        )
    }
    const FiveHundred = () =>{
        return(
            <View >
                <Text style={centerStyle.exceptionLink} onPress={()=>{
                    RootNavigation.navigate("AppTabs", {});          
                }}>Back to app</Text>
            </View>
            )
    }
    let action = props.route.params.errorMessage == 401 ? Four0One :FiveHundred;
    return (
        <View style={centerStyle.container}>
            <Text style={centerStyle.exceptionCode}>{props.route.params.errorMessage}</Text>
            <Text style={centerStyle.exceptionMessage}>{userMessage}</Text>
            {action()}          
        </View>
    )
}