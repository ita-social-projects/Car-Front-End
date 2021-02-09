import React from "react";
import { Text, View } from "react-native";
import TouchableJourney from "../../../touchable/journey/TouchableJourney";
import PastJourneysStyle from "./PastJourneysStyle";

export default function PastJourneys() {
    return (
        <View>
            <View style={PastJourneysStyle.container}>
                <Text style={PastJourneysStyle.text}>Past</Text>
            </View>
            <View>
                <TouchableJourney />
                <TouchableJourney />
            </View>
        </View>
    );
}
