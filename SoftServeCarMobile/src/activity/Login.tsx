import React, { useContext } from 'react'
import { Button, Text, View } from 'react-native'
import {AuthContext} from "../components/auth/AuthProvider";
import { centerStyle } from '../components/styles/centerStyle';

export function Login(){
    const { login } = useContext(AuthContext);
    return (
        <View style={centerStyle.container}>
            <Text style = {centerStyle.loginPageTextGreeting}>Welcome to</Text>
            <Text style = {centerStyle.loginPageTextName}>Softserve Journeys</Text>
            <View style = {centerStyle.loginButton} >
            <Button color="black" title="Login"
            onPress={()=>{ login();}} />
            </View>
        </View>
    )
}