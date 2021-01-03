import React from 'react'
import { View } from 'react-native'
import TouchableNavigationCard from './TouchableNavigationCard';

function MyProfile(props: any) {
    return (
        <View style={{ flex: 1, backgroundColor: 'white' }}>
            <TouchableNavigationCard navigation={props.navigation}
                navigationName="Details"
                cardName="Details"
                iconName="person-circle-outline"
                angle="0" />

            <TouchableNavigationCard navigation={props.navigation}
                navigationName="Preferences"
                cardName="Preferences"
                iconName="options-outline"
                angle="90" />

            <TouchableNavigationCard navigation={props.navigation}
                navigationName="CarTabs"
                cardName="Your cars"
                iconName="car"
                angle="0" />

            <TouchableNavigationCard navigation={props.navigation}
                navigationName="AddressBook"
                cardName="Address book"
                iconName="bookmark-outline"
                angle="0" />

            <TouchableNavigationCard navigation={props.navigation}
                navigationName="Settings"
                cardName="Settings"
                iconName="settings-outline"
                angle="0" />
        </View>
    );
}
export default MyProfile;