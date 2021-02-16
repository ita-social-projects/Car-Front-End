import React, { useContext, useEffect, useState } from "react";
import { FlatList, Text, View } from "react-native";
import { container } from "tsyringe";
import JourneyService from "../../../../../../../../api-service/journey-service/JourneyService";
import { Journey } from "../../../../../../../../models/Journey";
import JourneyCard from "../../../../../../../components/journey-card/JourneyCard";
import { AuthContext } from "../../../../../../auth/AuthProvider";
import ShceduledJourneysStyle from "./ShceduledJourneysStyle";

export default function ScheduledJourneys(props: any) {
    const { user } = useContext(AuthContext);
    const [journeys, setJourneys] = useState<Array<Journey>>([]);
    const [loading, setLoading] = useState(true);

    const journeyService = container.resolve(JourneyService);

    useEffect(() => {
        journeyService
            .getScheduledJourneys(Number(user?.id))
            .then((res) => {
                setJourneys(res.data);
                setLoading(false);
            })
            .catch((e) => console.log(e));
    }, []);

    return (        
        <View style={ShceduledJourneysStyle.container}>
            <Text style={ShceduledJourneysStyle.text}>Scheduled</Text>
            <FlatList                
                data={journeys}
                keyExtractor={(item, index) => "" + item + index}
                renderItem={({ item }) => <JourneyCard journey={item} />}
            />
        </View> 
    );
}
