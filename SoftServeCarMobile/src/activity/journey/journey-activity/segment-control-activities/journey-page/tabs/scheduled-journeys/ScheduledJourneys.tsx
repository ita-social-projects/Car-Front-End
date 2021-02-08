import React from 'react';
import { Text, View } from 'react-native';
import TouchableJourney from '../../../touchable/journey/TouchableJourney';
import ShceduledJourneysStyle from './ShceduledJourneysStyle';

export default function ScheduledJourneys() {
    return (
        <View>
            <View style={ShceduledJourneysStyle.container}>
                <Text style={ShceduledJourneysStyle.text}>Past</Text>
            </View>
            <View>
                <TouchableJourney />
                <TouchableJourney />
            </View>
        </View>
    );
}
