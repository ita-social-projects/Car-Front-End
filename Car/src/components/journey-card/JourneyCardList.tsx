import React from "react";
import { View } from "react-native";
import Journey from "../../../models/Journey";
import JourneyCard from "./JourneyCard";

const JourneyCardList = (props: any) => {
    const journey: Journey[] = props.journey;
    
    return (
        <View>
            {journey.map((item) => (
                <View key={item?.id}>
                    <JourneyCard journey={item} />
                </View>
            ))}
        </View>
    );
};

export default JourneyCardList;
