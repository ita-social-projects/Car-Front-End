import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import { View } from 'react-native';
import AddCars from '../add-cars/AddCars';
import Cars from '../Cars';
import EditCars from '../edit-cars/EditCars';
import CarTabsStyle from './CarTabsStyle';

const StackTabs = createStackNavigator();

export default function CarTabs() {
    return (
        <View style={{ flex: 1, alignSelf: 'stretch' }}>
            <StackTabs.Navigator>
                <StackTabs.Screen
                    name="Cars"
                    component={Cars}
                    options={{
                        title: 'Your Cars',
                        headerTitleAlign: 'center',
                        headerTitleStyle: CarTabsStyle.headerTitleStyle,
                    }} />
                <StackTabs.Screen name="AddCars"
                    component={AddCars}
                    options={{
                        title: 'Add a Car',
                        headerTitleAlign: 'center',
                        headerTitleStyle: CarTabsStyle.headerTitleStyle,
                    }} />
                <StackTabs.Screen
                    name="EditCars"
                    component={EditCars}
                    options={{
                        title: 'Edit a Car',
                        headerTitleAlign: 'center',
                        headerTitleStyle: CarTabsStyle.headerTitleStyle,
                    }} />
            </StackTabs.Navigator>
        </View>
    )
}
