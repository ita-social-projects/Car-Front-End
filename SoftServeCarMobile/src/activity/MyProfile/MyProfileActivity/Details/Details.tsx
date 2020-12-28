import React, { Component, useState } from 'react';
import { useContext } from 'react';
import { Button, Text, View } from 'react-native';
import {AuthManager} from '../../../../components/auth/AuthManager';
import {AuthContext} from "../../../../components/auth/AuthProvider";

type UserId= null | string;
const Details = () => {
    const {user, logout } = useContext(AuthContext);   
  
    return (
        <View>
            <Text style={{textAlign: 'center'}}>Details</Text>
            <View style = {{ justifyContent: 'space-between', alignItems: 'flex-start',padding:10}}>               
                <Text>  Id:  {user?.id}  </Text>              
                <Text>  Name:  {user?.username}  </Text>
                <Text>  Surname:  {user?.surname}  </Text>
                <Text>  Email:  {user?.email}  </Text>
                <Text>  AzureId:  {user?.azureId}  </Text>
               
            </View>
            <View style = {{margin:30}}>
            <Button title = 'Logout' onPress= {()=>{
                    logout();
                }}></Button>
            </View>
           
        </View>
    )
}

export default Details

