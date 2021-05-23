import React from "react";
import { FlatList, View } from "react-native";
import JourneyCard from "../../../../../../components/journey-card/JourneyCard";
import DM from "../../../../../../components/styles/DM";
import OkSearchResultStyle from "./OkSearchResultStyle";
import Journey from "../../../../../../../models/journey/Journey";

const OkSearchResult = (props : { journeys: Journey[], displayFee: Boolean }) => (
    <View style={[OkSearchResultStyle.container, { backgroundColor: DM("#FFFFFF") }]}>
        <FlatList
            ListHeaderComponent={<View />}
            ListHeaderComponentStyle={OkSearchResultStyle.listHeader}
            style={OkSearchResultStyle.list}
            data={props.journeys}
            keyExtractor={(item, index) => "" + item + index}
            renderItem={({ item }) => <JourneyCard journey={item} displayFee={props.displayFee} />}
        />
    </View>
);

export default OkSearchResult;
