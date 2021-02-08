import { createStackNavigator } from "@react-navigation/stack";
import React, { useContext, useEffect, useState } from 'react';
import { View } from 'react-native';
import "reflect-metadata";
import { container } from 'tsyringe';
import UserService from '../../../api-service/user-service/UserService';
import { User } from '../../../models/User';
import { AuthContext } from "../auth/AuthProvider";
import AddressBook from './my-profile-activity/address-book/AddressBook';
import AvatarLogoTitle from './my-profile-activity/avatar-logo/AvatarLogoTitle';
import CarTabs from './my-profile-activity/cars/car-tabs/CarTabs';
import Details from './my-profile-activity/details/Details';
import Preferences from './my-profile-activity/preferences/Preferences';
import Settings from './my-profile-activity/settings/Settings';
import MyProfile from './MyProfile';

const StackTabs = createStackNavigator();

const MyProfileTabs = () => {
    const userServices = container.resolve(UserService);
    const [currentUser, setCurrentUser] = useState({} as User);
    const { user } = useContext(AuthContext);

    useEffect(() => {
        userServices.getUser(Number(user?.id))
            .then((res: { data: React.SetStateAction<User>; }) => setCurrentUser(res.data))
            .catch((e: any) => console.log(e));
    }, []);

    return (
        <View style={{ flex: 1, alignSelf: 'stretch' }}>
            <StackTabs.Navigator>
                <StackTabs.Screen name="MyProfile"
                    component={MyProfile}
                    options={{
                        headerStyle: { height: 120 },
                        headerTitle: args => <AvatarLogoTitle {...args} user={currentUser} />
                    }} />
                <StackTabs.Screen name="Preferences" component={Preferences} />
                <StackTabs.Screen name="Details" component={Details} />
                <StackTabs.Screen name="CarTabs" component={CarTabs} options={{ headerShown: false }} />
                <StackTabs.Screen name="AddressBook" component={AddressBook} />
                <StackTabs.Screen name="Settings" component={Settings} />
            </StackTabs.Navigator>
        </View>
    );
}
export default MyProfileTabs;
