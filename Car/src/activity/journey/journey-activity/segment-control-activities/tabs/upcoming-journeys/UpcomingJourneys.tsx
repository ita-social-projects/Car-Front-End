import React, { useContext, useEffect, useState } from "react";
import { View } from "react-native";
import JourneyService from "../../../../../../../api-service/journey-service/JourneyService";
import Journey from "../../../../../../../models/Journey";
import JourneyCard from "../../../../../../components/journey-card/JourneyCard";
import AuthContext from "../../../../../../components/auth/AuthContext";

const UpcomingJourneys = () => {
    const { user } = useContext(AuthContext);
    const [upcomingJourneys, setJourneys] = useState<Array<Journey>>([]);

    useEffect(() => {
        JourneyService.getUpcomingJourneys(Number(user?.id)).then((res) => {
            setJourneys(res.data);
        });
    }, []);

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

export default UpcomingJourneys;
