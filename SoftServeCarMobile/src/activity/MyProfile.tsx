import React, { Component, useState } from 'react';
import { useContext } from 'react';
import { Button, Text, View } from 'react-native';
import {AuthManager} from '../components/navigation/AuthManager';
import {AuthContext} from "../components/navigation/AuthProvider";

type UserId= null | string;
const MyProfile = () => {
    const { logout } = useContext(AuthContext);   
    const [userId, setUserId] = useState<UserId>(null);
    const getUserId =async()=>{
       let id = await AuthManager.getUserId();
        setUserId(id);
    }
    return (
        <View>
            <Text>My Profile</Text>
            <View style = {{flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center',padding:10}}>               
                <Text>  User id:  {userId}  </Text>              
                <Button title = 'Show userId' onPress ={()=>{ getUserId();}}></Button>
            </View>
            <Button title = 'Logout' onPress= {()=>{
                    logout();
                }}></Button>
        </View>
    )
}

export default MyProfile

