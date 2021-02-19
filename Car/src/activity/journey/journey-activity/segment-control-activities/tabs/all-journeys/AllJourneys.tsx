import React from "react";
import { Text, View } from "react-native";
import PastJourneys from "../past-journeys/PastJourneys";
import ScheduledJourneys from "../scheduled-journeys/ScheduledJourneys";
import UpcomingJourneys from "../upcoming-journeys/UpcomingJourneys";
import AllJourneysStyle from "./AllJourneysStyle";

const AllJourneys = () => {
    return (
        <View style={AllJourneysStyle.container}>
            <Text style={AllJourneysStyle.text}>Upcoming</Text>
            <UpcomingJourneys />

            <Text style={AllJourneysStyle.text}>Past</Text>
            <PastJourneys />

            <Text style={AllJourneysStyle.text}>Scheduled</Text>
            <ScheduledJourneys />
        </View>
    );
};

export default AllJourneys;
