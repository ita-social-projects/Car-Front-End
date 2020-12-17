import React from 'react'
import { View } from 'react-native'
import TouchableNavigationCard from './TouchableNavigationCard';

const MyProfile = (props: any) => (
    <View style={{ flex: 1, backgroundColor: 'white' }}>
        <TouchableNavigationCard navigation={props.navigation}
            navigationName="Details"
            cardName="Details"
            iconName="person-circle-outline" />

        <TouchableNavigationCard navigation={props.navigation}
            navigationName="Preferences"
            cardName="Preferences"
            iconName="options-outline" />

        <TouchableNavigationCard navigation={props.navigation}
            navigationName="YourCars"
            cardName="Your cars"
            iconName="car" />

        <TouchableNavigationCard navigation={props.navigation}
            navigationName="AddressBook"
            cardName="Address book"
            iconName="bookmark-outline" />

        <TouchableNavigationCard navigation={props.navigation}
            navigationName="Settings"
            cardName="Settings"
            iconName="settings-outline" />
    </View>
)
export default MyProfile;