import React, { useContext, useEffect, useState } from "react";
import { ActivityIndicator, FlatList, Text, View } from "react-native";
import JourneyCard from "../../../../../../../components/journey-card/JourneyCard";
import JourneyService from "../../../../../../../../api-service/journey-service/JourneyService";
import { AuthContext } from "../../../../../../auth/AuthProvider";
import { Journey } from "../../../../../../../../models/Journey";
import { container } from "tsyringe";

export default function PastJourneys(props: any) {
    const { user } = useContext(AuthContext);
    const [pastJourneys, setJourneys] = useState<Array<Journey>>([]);

    const journeyService = container.resolve(JourneyService);

    useEffect(() => {
        journeyService
            .getPastJourneys(Number(user?.id))
            .then((res) => {
                setJourneys(res.data);
            })
            .catch((e) => console.log(e));
    }, []);

    return (
        <View>
            {pastJourneys.map((item) => {
                return (
                    <View key={item?.id}>
                        <JourneyCard journey={item} />
                    </View>
                );
            })}
        </View>
    );
}
