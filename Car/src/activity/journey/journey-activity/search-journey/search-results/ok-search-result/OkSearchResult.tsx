import React from "react";
import { View } from "react-native";
import { FlatList } from "react-native-gesture-handler";
import JourneyCard from "../../../../../../components/journey-card/JourneyCard";
import OkSearchResultStyle from "./OkSearchResultStyle";

const OkSearchResult = (props: any) => {
    const journeys = props.route.params.journeys;

    return (
        <View style={OkSearchResultStyle.container}>
            <FlatList
                ListHeaderComponent={<View />}
                ListHeaderComponentStyle={OkSearchResultStyle.listHeader}
                style={OkSearchResultStyle.list}
                data={journeys}
                keyExtractor={(item, index) => "" + item + index}
                renderItem={({ item }) => <JourneyCard journey={item} />}
            />
        </View>
    );
};

export default OkSearchResult;
