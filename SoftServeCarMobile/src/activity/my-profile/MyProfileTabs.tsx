import React, { useContext, useEffect, useState } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { View } from 'react-native';
import { container } from 'tsyringe';
import Details from './my-profile-activity/details/Details';
import Preferences from './my-profile-activity/preferences/Preferences';
import Cars from './my-profile-activity/cars/Cars';
import AddressBook from './my-profile-activity/address-book/AddressBook';
import MyProfile from './MyProfile';
import AvatarLogoTitle from './AvatarLogoTitle';
import Settings from './my-profile-activity/settings/Settings';
import 'reflect-metadata';
import UserService from '../../../api-service/user-service/UserService';
import { User } from '../../../models/User';
import { AuthContext } from '../auth/AuthProvider';

const StackTabs = createStackNavigator();

const MyProfileTabs = () => {
	const userServices = container.resolve(UserService);
	const [currentUser, setCurrentUser] = useState({} as User);
	const { user } = useContext(AuthContext);

	useEffect(() => {
		userServices
			.getUser(Number(user?.id))
			.then((res: { data: React.SetStateAction<User> }) => setCurrentUser(res.data))
			.catch((e: any) => console.log(e));
	}, []);

	return (
		<View style={{ flex: 1, alignSelf: "stretch" }}>
			<StackTabs.Navigator>
				<StackTabs.Screen
					name="MyProfile"
					component={MyProfile}
					options={{
						headerStyle: { height: 120 },
						headerTitle: (args) => <AvatarLogoTitle {...args} user={currentUser} />,
					}}
				/>
				<StackTabs.Screen name="Preferences" component={Preferences} />
				<StackTabs.Screen name="Details" component={Details} />
				<StackTabs.Screen name="YourCars" component={Cars} />
				<StackTabs.Screen name="AddressBook" component={AddressBook} />
				<StackTabs.Screen name="Settings" component={Settings} />
			</StackTabs.Navigator>
		</View>
	);
};
export default MyProfileTabs;
