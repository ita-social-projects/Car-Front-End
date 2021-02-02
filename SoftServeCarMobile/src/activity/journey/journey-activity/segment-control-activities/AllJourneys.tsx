import React from 'react'
import { Text, View } from 'react-native'
import TouchableJourney from './touchable/journey/TouchableJourney'

export default function AllJourneys() {
    return (
        <View>
            <Text>All Journeys</Text>
            <TouchableJourney />
        </View>
    );
}
