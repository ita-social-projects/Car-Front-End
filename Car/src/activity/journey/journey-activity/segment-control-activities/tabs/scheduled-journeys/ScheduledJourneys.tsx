import React, { useContext, useEffect, useState } from "react";
import { Alert, View } from "react-native";
import JourneyService from "../../../../../../../api-service/journey-service/JourneyService";
import Journey from "../../../../../../../models/Journey";
import JourneyCard from "../../../../../../components/journey-card/JourneyCard";
import AuthContext from "../../../../../../components/auth/AuthContext";

const ScheduledJourneys = () => {
    const { user } = useContext(AuthContext);
    const [scheduledJourneys, setJourneys] = useState<Array<Journey>>([]);

    useEffect(() => {
        JourneyService.getScheduledJourneys(Number(user?.id))
            .then((res) => {
                setJourneys(res.data);
            })
            .catch((e) => Alert.alert("Error", e.message));
    }, []);

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

export default ScheduledJourneys;
