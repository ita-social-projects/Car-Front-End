import { createStackNavigator } from '@react-navigation/stack';
import React from 'react'
import { View } from 'react-native';
import AddCars from '../../../../components/Cars/AddCars/AddCars';
import Cars from '../../../../components/Cars/Cars';

const StackTabs = createStackNavigator();

export default function CarTabs() {
    return (
        <View style={{ flex: 1, alignSelf: 'stretch' }}>
            <StackTabs.Navigator>
                <StackTabs.Screen name="Cars" component={Cars}></StackTabs.Screen>
                <StackTabs.Screen name="AddCars" options={{headerBackAccessibilityLabel: "Add a Car"}} component={AddCars}></StackTabs.Screen>
            </StackTabs.Navigator>
        </View>
    )
}