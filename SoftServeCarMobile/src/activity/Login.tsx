import React, { useContext } from 'react'
import { Text, TouchableOpacity, View } from 'react-native'
import { AuthContext } from "./auth/AuthProvider";
import { ButtonStyle } from '../components/styles/ButtonStyle';
import { centerStyle } from '../components/styles/CenterStyle';

export function Login() {
    const { login } = useContext(AuthContext);
    return (
        <View style={{ flex: 1, justifyContent: "space-around", alignItems: "center" }}>
            <View style={centerStyle.container} >
                <Text style={centerStyle.loginPageTextGreeting}>Welcome to</Text>
                <Text style={centerStyle.loginPageTextName}>Softserve Journeys</Text>
            </View>
            <View style={centerStyle.loginButton} >
                <TouchableOpacity style={ButtonStyle.background}>
                    <Text style={ButtonStyle.text}
                        onPress={() => { login(); }}>
                        Login
                    </Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}
