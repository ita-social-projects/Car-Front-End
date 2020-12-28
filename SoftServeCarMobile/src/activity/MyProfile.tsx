import React from 'react';
import { useContext } from 'react';
import { Button, Text, View } from 'react-native';
import {AuthContext} from "../components/auth/AuthProvider";

type UserId= null | string;
const MyProfile = () => {
    const {user, logout } = useContext(AuthContext);   
  
    return (
        <View>
            <Text>My Profile</Text>
            <View style = {{ justifyContent: 'space-between', alignItems: 'flex-start',padding:10}}>               
                <Text>  Id:  {user?.id}  </Text>              
                <Text>  Name:  {user?.username}  </Text>
                <Text>  Surname:  {user?.surname}  </Text>
                <Text>  Email:  {user?.email}  </Text>
                <Text>  AzureId:  {user?.azureId}  </Text>
               
            </View>
            <Button title = 'Logout' onPress= {()=>{
                    logout();
                }}></Button>
        </View>
    )
}

export default MyProfile

