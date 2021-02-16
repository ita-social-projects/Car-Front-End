import React from "react";
import { Text, View } from "react-native";
import PastJourneys from "../past-journeys/PastJourneys";
import ScheduledJourneys from "../scheduled-journeys/ScheduledJourneys";
import UpcomingJourneys from "../upcoming-journeys/UpcomingJourneys";

export default function AllJourneys() {
    return (
        <View>
            <UpcomingJourneys />
            <PastJourneys />
            <ScheduledJourneys />
        </View>
    );
}