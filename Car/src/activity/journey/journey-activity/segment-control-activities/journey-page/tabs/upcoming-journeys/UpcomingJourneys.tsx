import React, { useContext, useEffect, useState } from "react";
import { FlatList, Text, View } from "react-native";
import { container } from "tsyringe";
import JourneyService from "../../../../../../../../api-service/journey-service/JourneyService";
import { Journey } from "../../../../../../../../models/Journey";
import JourneyCard from "../../../../../../../components/journey-card/JourneyCard";
import { AuthContext } from "../../../../../../auth/AuthProvider";

export default function UpcomingJourneys(props: any) {
    const { user } = useContext(AuthContext);
    const [upcomingJourneys, setJourneys] = useState<Array<Journey>>([]);

    const journeyService = container.resolve(JourneyService);

    useEffect(() => {
        journeyService
            .getUpcomingJourneys(Number(user?.id))
            .then((res) => {
                setJourneys(res.data);
            })
            .catch((e) => console.log(e));
    }, []);

    return (
        <View>
            {upcomingJourneys.map((item) => {
                return (
                    <View key={item?.id}>
                        <JourneyCard journey={item} />
                    </View>
                );
            })}
        </View>
    );
}
