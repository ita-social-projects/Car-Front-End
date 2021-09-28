import React from "react";
import { FlatList, View } from "react-native";
import JourneyCard from "../../../../../../components/journey-card/JourneyCard";
import DM from "../../../../../../components/styles/DM";
import OkSearchResultStyle from "./OkSearchResultStyle";
import ApplicantJourney from "../../../../../../../models/journey/ApplicantJourney";

const OkSearchResult = (props : {journeys: ApplicantJourney[], displayFee: boolean, passangersCount: number}) => (
    <View style={[OkSearchResultStyle.container, { backgroundColor: DM("#FFFFFF") }]}>
        <FlatList
            ListHeaderComponent={<View />}
            ListHeaderComponentStyle={OkSearchResultStyle.listHeader}
            style={OkSearchResultStyle.list}
            data={props.journeys}
            keyExtractor={(item, index) => "" + item + index}
            renderItem={({ item }) => (
                <JourneyCard
                    journey={item.journey}
                    displayFee={props.displayFee}
                    applicantStops={item.applicantStops}
                    passangersCount={props.passangersCount}
                />)}
        />
    </View>
);

export default OkSearchResult;
