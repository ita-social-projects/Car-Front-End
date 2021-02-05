import React from 'react'
import { Text, View } from 'react-native'
import TouchableJourney from '../../../touchable/journey/TouchableJourney'
import AllJourneysStyle from './AllJourneysStyle';

export default function AllJourneys() {
    return (
        <View style={AllJourneysStyle.container}>
            <Text>All Journeys</Text>
            <TouchableJourney />
        </View>
    );
}
