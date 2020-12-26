import React, { useContext } from 'react'
import { Button, Text, View } from 'react-native'
import {AuthContext} from "../components/navigation/AuthProvider";
import { centerStyle } from '../components/styles/centerStyle';

export function Login(){
    const { login } = useContext(AuthContext);
    return (
        <View style={centerStyle.container}>
            <Text style = {centerStyle.loginPageTextLine1}>Welcome to</Text>
            <Text style = {centerStyle.loginPageTextLine2}>Softserve Journeys</Text>
            <View style = {centerStyle.loginButton} >
            <Button color="black" title="Login"
            onPress={()=>{ login();}} />
            </View>
        </View>
    )
}