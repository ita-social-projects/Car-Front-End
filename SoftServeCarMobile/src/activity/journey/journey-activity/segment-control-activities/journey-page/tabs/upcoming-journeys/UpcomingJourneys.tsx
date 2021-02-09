import React from "react";
import { Text, View } from "react-native";
import TouchableJourney from "../../../touchable/journey/TouchableJourney";
import UpcomingJourneysStyle from "./UpcomingJourneysStyle";

export default function UpcomingJourneys() {
    return (
        <View>
            <View style={UpcomingJourneysStyle.container}>
                <Text style={UpcomingJourneysStyle.text}>Upcoming</Text>
            </View>
            <View>
                <TouchableJourney />
                <TouchableJourney />
            </View>
        </View>
    );
}
