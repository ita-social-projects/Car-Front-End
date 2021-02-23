import React, { useContext, useEffect, useState } from "react";
import { View } from "react-native";
import JourneyService from "../../../../../../../api-service/journey-service/JourneyService";
import Journey from "../../../../../../../models/Journey";
import JourneyCard from "../../../../../../components/journey-card/JourneyCard";
import AuthContext from "../../../../../../components/auth/AuthContext";

const PastJourneys = () => {
    const { user } = useContext(AuthContext);
    const [pastJourneys, setJourneys] = useState<Array<Journey>>([]);

    useEffect(() => {
        JourneyService.getPastJourneys(Number(user?.id))
            .then((res) => {
                setJourneys(res.data);
            })
            .catch((e) => console.log(e));
    }, []);

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

export default PastJourneys;
