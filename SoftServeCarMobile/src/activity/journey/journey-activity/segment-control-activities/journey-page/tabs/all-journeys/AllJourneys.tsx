import React from 'react'
import { Text, View } from 'react-native'
import TouchableJourney from '../../../touchable/journey/TouchableJourney'
import AllJourneysStyle from './AllJourneysStyle';

export default function AllJourneys() {
    return (
        <View>
            <View style={AllJourneysStyle.text}>
                <Text >All Journeys</Text>
            </View>
            <View>
                <TouchableJourney />
            </View>
        </View>
    );
}
