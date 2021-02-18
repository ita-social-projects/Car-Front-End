import React from "react";
import { Text, View } from "react-native";
import TouchableJourney from "../../touchable/journey/TouchableJourney";
import AllJourneysStyle from "./AllJourneysStyle";

export default function AllJourneys() {
    return (
        <View>
            <View style={AllJourneysStyle.container}>
                <Text style={AllJourneysStyle.text}>Upcoming</Text>
            </View>
            <View>
                <TouchableJourney />
                <TouchableJourney />
            </View>
            <View style={AllJourneysStyle.container}>
                <Text style={AllJourneysStyle.text}>Past</Text>
            </View>
            <View>
                <TouchableJourney />
                <TouchableJourney />
            </View>
            <View style={AllJourneysStyle.container}>
                <Text style={AllJourneysStyle.text}>Scheduled</Text>
            </View>
            <View>
                <TouchableJourney />
                <TouchableJourney />
            </View>
        </View>
    );
}
