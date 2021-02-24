import React, { useContext, useEffect, useState } from "react";
import { Text, View } from "react-native";
import { container } from "tsyringe";
import JourneyService from "../../../../../../../api-service/journey-service/JourneyService";
import Journey from "../../../../../../../models/Journey";
import JourneyCard from "../../../../../../components/journey-card/JourneyCard";
import AuthContext from "../../../../../auth/AuthContext";
//import PastJourneys from "../past-journeys/PastJourneys";
//import ScheduledJourneys from "../scheduled-journeys/ScheduledJourneys";
//import UpcomingJourneys from "../upcoming-journeys/UpcomingJourneys";
import AllJourneysStyle from "./AllJourneysStyle";

const AllJourneys = () => {
    const { user } = useContext(AuthContext);
    const [pastJourneys, setPastJourneys] = useState<Array<Journey>>([]);
    const [upcomingJourneys, setUpcomingJourneys] = useState<Array<Journey>>(
        []
    );
    const [scheduledJourneys, setScheduledJourneys] = useState<Array<Journey>>(
        []
    );

    const journeyService = container.resolve(JourneyService);

    useEffect(() => {
        journeyService
            .getPastJourneys(Number(user?.id))
            .then((res) => {
                setPastJourneys(res.data);
            })
            .catch((e) => console.log(e));
    }, []);

    useEffect(() => {
        journeyService
            .getUpcomingJourneys(Number(user?.id))
            .then((res) => {
                setUpcomingJourneys(res.data);
            })
            .catch((e) => console.log(e));
    }, []);

    useEffect(() => {
        journeyService
            .getScheduledJourneys(Number(user?.id))
            .then((res) => {
                setScheduledJourneys(res.data);
            })
            .catch((e) => console.log(e));
    }, []);

    const PastJourneys = () => {
        return (
            <View>
                {pastJourneys.map((item) => (
                    <View key={item?.id}>
                        <JourneyCard journey={item} />
                    </View>
                ))}
            </View>
        );
    };

    const ScheduledJourneys = () => {
        return (
            <View>
                {scheduledJourneys.map((item) => (
                    <View key={item?.id}>
                        <JourneyCard journey={item} />
                    </View>
                ))}
            </View>
        );
    };

    const UpcomingJourneys = () => {
        return (
            <View>
                {upcomingJourneys.map((item) => (
                    <View key={item?.id}>
                        <JourneyCard journey={item} />
                    </View>
                ))}
            </View>
        );
    };

    return (
        <View style={AllJourneysStyle.container}>
            <Text style={AllJourneysStyle.text}>Upcoming</Text>
            {<UpcomingJourneys />}

            <Text style={AllJourneysStyle.text}>Past</Text>
            <PastJourneys />

            <Text style={AllJourneysStyle.text}>Scheduled</Text>
            {<ScheduledJourneys />}
        </View>
    );
};

export default AllJourneys;
