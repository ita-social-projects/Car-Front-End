import React, { useContext, useEffect, useState } from "react";
import { FlatList, Text, View } from "react-native";
import JourneyCard from "../../../../../../../components/journey-card/JourneyCard";
import JourneyService from "../../../../../../../../api-service/journey-service/JourneyService";
import PastJourneysStyle from "./PastJourneysStyle";
import { AuthContext } from "../../../../../../auth/AuthProvider";
import { Journey } from "../../../../../../../../models/Journey";
import { container } from "tsyringe";

export default function PastJourneys(props: any) {
    const { user } = useContext(AuthContext);
    const [journeys, setJourneys] = useState<Array<Journey>>([]);
    const [loading, setLoading] = useState(true);

    const journeyService = container.resolve(JourneyService);

    useEffect(() => {
        journeyService
            .getPastJourneys(Number(user?.id))
            .then((res) => {
                setJourneys(res.data);
                setLoading(false);
            })
            .catch((e) => console.log(e));
    }, []);

    return (
        <View style={PastJourneysStyle.container}>
            <Text style={PastJourneysStyle.text}>Past</Text>
                <FlatList                
                    data={journeys}
                    keyExtractor={(item, index) => "" + item + index}
                    renderItem={({ item }) => <JourneyCard journey={item} />}
                />
        </View>     
    );
}
