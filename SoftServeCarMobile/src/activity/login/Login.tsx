import React, { useContext, useEffect, useState } from 'react'
import { ActivityIndicator, Button, Text, View } from 'react-native'
import {AuthContext} from "../../components/auth/AuthProvider";
import loginStyle from './LoginStyles';


export function Login(props: any){
    const { login } = useContext(AuthContext);
    const [loading, setLoading] = useState(false);
    const [buttonDisabled, setButtonDisabled] = useState(false);

    useEffect(() => {
        if(props.route.params && props.route.params.resetConnection){
            loadingProcess(false);            
        }
    })

    function loadingProcess (value: boolean)  {
        setButtonDisabled(value);
        setLoading(value);      
    }    

    let loader: any;

    if (loading) {
        loader = <ActivityIndicator style={loginStyle.loadingIcon} size="large" color="black" />
    }
    else {
        loader = null;
    }

    return (        
        <View style={{ flex: 1, justifyContent: "space-around", alignItems: "center" }}>
            <View style={loginStyle.container}>
                <Text style = {loginStyle.loginPageTextGreeting}>Welcome to</Text>
                <Text style = {loginStyle.loginPageTextName}>Softserve Journeys</Text>
            </View>
            <View style = {loginStyle.loginButton} >
                {loader}
                <Button color="black" title="Login" disabled={buttonDisabled}
                onPress={()=>{
                    login();
                    loadingProcess(true);
                }} />
            </View>
        </View>
    )
}