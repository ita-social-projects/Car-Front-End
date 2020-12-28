import React, { useContext, useEffect, useState } from 'react';
import { createStackNavigator } from "@react-navigation/stack";
import { View } from 'react-native'
import Details from './MyProfileActivity/Details/Details';
import Preferences from './MyProfileActivity/Preferences/Preferences';
import Cars from './MyProfileActivity/Cars/Cars';
import AddressBook from './MyProfileActivity/AddressBook/AddressBook';
import MyProfile from './MyProfile';
import AvatarLogoTitle from './AvatarLogoTitle';
import Settings from './MyProfileActivity/Settings/Settings';
import "reflect-metadata";
import { container } from 'tsyringe';
import UserService from '../../services/APIService/UserService/UserService';
import User from '../../models/User';
import { AuthContext } from "../../components/auth/AuthProvider"

const StackTabs = createStackNavigator();

const MyProfileTabs = (props: any) => {
    const userServices = container.resolve(UserService);
    const [currentUser, setCurrentUser] = useState({} as User);
    const {user} = useContext(AuthContext);  

    useEffect(()=>{
        userServices.getUser(Number(user?.id))
        .then(res => setCurrentUser(res.data))
        .catch(e => console.log(e));
    }, []);

    return (
        <View style={{ flex: 1, alignSelf: 'stretch' }}>
            <StackTabs.Navigator>
                <StackTabs.Screen name="MyProfile"
                    component={MyProfile}
                    options={{ headerStyle: { height: 120 }, 
                    headerTitle: props => <AvatarLogoTitle {...props} user={currentUser} /> }}></StackTabs.Screen>
                <StackTabs.Screen name="Preferences" component={Preferences}></StackTabs.Screen>
                <StackTabs.Screen name="Details" component={Details}></StackTabs.Screen>
                <StackTabs.Screen name="YourCars" component={Cars}></StackTabs.Screen>
                <StackTabs.Screen name="AddressBook" component={AddressBook}></StackTabs.Screen>
                <StackTabs.Screen name="Settings" component={Settings}></StackTabs.Screen>
            </StackTabs.Navigator>
        </View>
    );
}
export default MyProfileTabs;