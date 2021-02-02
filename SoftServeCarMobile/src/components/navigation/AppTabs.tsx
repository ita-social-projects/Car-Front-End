import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Messages from '../../activity/Messages';
import Notifications from '../../activity/Notifications';
import { AppTabsList } from './AppTabsList';

import MyProfileTabs from '../../activity/my-profile/MyProfileTabs';

import JourneyTabs from '../../activity/journey/JourneyTabs';

interface AppTabsProps {}

const Tabs = createBottomTabNavigator<AppTabsList>();

export const AppTabs: React.FC<AppTabsProps> = () => {
	return (
		<Tabs.Navigator
			initialRouteName="JourneyTabs"
			sceneContainerStyle={{ alignItems: 'center' }}
			screenOptions={({ route }) => ({
				tabBarIcon: ({ color, size }) => {
					let iconName;
					switch (route.name) {
					case 'Messages':
						iconName = 'chatbubbles';
						break;
					case 'MyProfileTabs':
						iconName = 'person';
						break;
					case 'JourneyTabs':
						iconName = 'car';
						break;
					case 'Notifications':
						iconName = 'notifications';
						break;
					}

					return <Ionicons name={iconName} size={size} color={color} />;
				},
			})}
			tabBarOptions={{
				labelStyle: {
					fontStyle: 'normal',
					fontSize: 10,
					fontWeight: '800',
					fontFamily: 'OpenSans-Bold',
					lineHeight: 16,
				},
				activeTintColor: 'black',
				inactiveTintColor: '#AAA9AE',
			}}>
			<Tabs.Screen name="Messages" component={Messages} />
			<Tabs.Screen
				options={{ tabBarLabel: 'My Profile' }}
				name="MyProfileTabs"
				component={MyProfileTabs}
			/>
			<Tabs.Screen
				options={{ tabBarLabel: 'Journey' }}
				name="JourneyTabs"
				component={JourneyTabs}
			/>
			<Tabs.Screen name="Notifications" component={Notifications} />
		</Tabs.Navigator>
	);
};
