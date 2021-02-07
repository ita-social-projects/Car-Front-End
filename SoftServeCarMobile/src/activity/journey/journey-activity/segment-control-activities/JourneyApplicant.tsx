import React, { useState } from 'react'
import { useEffect } from 'react';
import { useContext } from 'react';
import { View, Text, Button, Image } from 'react-native'
import { container } from "tsyringe";
import UserService from '../../../../../api-service/user-service/UserService';
import { User } from '../../../../../models/User';
import { AuthContext } from '../../../auth/AuthProvider';
import Journey from '../../Journey';

const JourneyApplicant = ({route}: any) => {
    const {userId} = route.params;
    const userService = container.resolve(UserService);
    const [currentUser, setUser] = useState({} as User);

    useEffect(() => {
        userService
          .getUser(userId)
          .then((res) => setUser(res.data))
          .catch((e) => console.log(e));
      }, []);


    return(
        <View>
            <Text>{userId}</Text>
            <Text>{currentUser?.name}</Text>
            <Text>{currentUser?.surname}</Text>
        </View>
    )
} 

export default JourneyApplicant;