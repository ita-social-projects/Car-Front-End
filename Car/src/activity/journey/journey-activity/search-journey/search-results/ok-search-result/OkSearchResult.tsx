import React from "react";
import { FlatList, View } from "react-native";
import JourneyCard from "../../../../../../components/journey-card/JourneyCard";
import OkSearchResultStyle from "./OkSearchResultStyle";
import ApplicantJourney from "../../../../../../../models/journey/ApplicantJourney";
import { useTheme } from "../../../../../../components/theme/ThemeProvider";

const OkSearchResult = (props : {journeys: ApplicantJourney[], displayFee: boolean}) => {
    const { DM } = useTheme();

    return (
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
                    />)}
            />
        </View>
    );
};

export default OkSearchResult;
