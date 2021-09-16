import React from "react";
import { View } from "react-native";
import Journey from "../../../models/journey/Journey";
import { LESS_THAN_ZERO, MORE_THAN_ZERO, ZERO } from "../../constants/GeneralConstants";
import JourneyCard from "./JourneyCard";

const JourneyCardList = (props: { journey: Journey[] }) => {
    const journey: Journey[] = props.journey.sort(compare);

    function compare (a: Journey, b: Journey) {
        if (a?.departureTime! < b?.departureTime!){
            return MORE_THAN_ZERO;
        }
        if (a?.departureTime! > b?.departureTime!){
            return LESS_THAN_ZERO;
        }

        return ZERO;
    }

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
