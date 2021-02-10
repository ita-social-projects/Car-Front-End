import React from 'react';
import { createStackNavigator } from "@react-navigation/stack";
import { View } from 'react-native';
import AddressBook from './AddressBook';
import SetPlace from './SetPlace';

const Stack = createStackNavigator();

const AddressBookTabs = () => {
    var showHeaderForAdressBook: boolean = false;
    return (
        <View style={{ flex: 1, alignSelf: 'stretch' }}>
            <Stack.Navigator screenOptions={{headerShown:showHeaderForAdressBook}}>
            <Stack.Screen name="AddressBook" component={AddressBook}></Stack.Screen>
            <Stack.Screen name="SetPlace" component={SetPlace}></Stack.Screen>
            </Stack.Navigator>
        </View>
    );
}
export default AddressBookTabs;