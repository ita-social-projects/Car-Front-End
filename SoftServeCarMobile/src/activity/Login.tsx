import React, { useContext } from 'react'
import { Button, StyleSheet, Text, View } from 'react-native'
import { AuthNavProps } from '../components/navigation/AuthParamList'
import {AuthContext} from "../components/navigation/AuthProvider";
import { centerStyle } from '../components/styles/centerStyle';

export function Login({navigation}: AuthNavProps<"Login">){
    const { login } = useContext(AuthContext);
    return (
        <View style={centerStyle.container}>
            <Text>Login</Text>
            <Button title="log me in"
            onPress={()=>{
                login();
            }} />
        </View>
    )
}
