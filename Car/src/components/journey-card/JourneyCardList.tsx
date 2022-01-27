import React from "react";
import { View } from "react-native";
import Journey from "../../../models/journey/Journey";
import { LESS_THAN_ZERO, MORE_THAN_ZERO, ZERO } from "../../constants/GeneralConstants";
import JourneyCard from "./JourneyCard";

interface JourneyCardListProps {
    journey: Journey[],
    ascending?: boolean,
    isPast?: boolean,
    isCanceled?: boolean
}

const JourneyCardList = (props:JourneyCardListProps) => {
    const journey: Journey[] = props.journey;
    const isPast: boolean = props.isPast ?? false;
    const isCanceled: boolean = props.isCanceled ?? false;

    journey.sort((a: Journey, b: Journey) => compare(a,b, props.ascending));

    function compare (a: Journey, b: Journey, ascendingOrder?:boolean) {
        if (a?.departureTime! < b?.departureTime!){
            return ascendingOrder?LESS_THAN_ZERO:MORE_THAN_ZERO;
        }
        if (a?.departureTime! > b?.departureTime!){
            return ascendingOrder?MORE_THAN_ZERO:LESS_THAN_ZERO;
        }

        return ZERO;
    }

    return (
        <View>
            {journey.map((item) => (
                <View key={item?.id}>
                    <JourneyCard journey={item} displayFee={true} isPast={isPast} isCanceled={isCanceled}/>
                </View>
            ))}
        </View>
    );
};

export default JourneyCardList;
