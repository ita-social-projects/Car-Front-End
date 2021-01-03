import React from 'react'
import { Text, View } from 'react-native';
import TouchableNavigationCard from '../../activity/MyProfile/TouchableNavigationCard';
import carsStyle from './CarsStyle'

export default function Cars(props: any) {
    return (
        <View style={carsStyle.container}>
            <TouchableNavigationCard navigation={props.navigation}
                navigationName="AddCars"
                cardName="Add a car"
                iconName="add-circle-outline"
                angle="0" />
            <Text style={carsStyle.message}>
                Currently you don’t have any car in the list. You have to add a car if you want to create Journeys with personal one.
            </Text>
        </View>
    )
}